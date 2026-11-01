# SEO Audit — Agent Task Board

**Site:** https://connectwithakshay.netlify.app
**Audit date:** 2026-10-31
**Health score at audit:** 83 / 100
**Stack:** Next.js (App Router) on Netlify · `next-sitemap` · Tailwind

## How agents should use this file

1. Pick **one task** at a time, in order (T1 → T9). Respect the `Depends on` field.
2. Read the task's **Context**, edit exactly the listed **Files**, then run the **Verification** steps.
3. A task is done only when every **Acceptance criteria** line passes.
4. Check the task off (`- [x]`) and append the completion note under **Log**.
5. Do not batch multiple tasks in one commit/PR unless explicitly asked.
6. After all High tasks (T1–T4) are done, re-run the site audit and update the score.

### Project commands

```bash
npm run dev      # dev server (localhost:3000)
npm run build    # production build (runs next-sitemap via postbuild)
npm run lint     # ESLint
```

### Global verification helpers

```bash
# Count H1s on a rendered page
curl -s https://connectwithakshay.netlify.app/ | grep -o '<h1[ >]' | wc -l

# Count anchors missing href
curl -s https://connectwithakshay.netlify.app/ | grep -oE '<a([ >][^>]*)?>' | grep -vc 'href='

# Inspect JSON-LD blocks on a page
curl -s <url> | python3 -c "import sys,re,json; [print(json.dumps(json.loads(m),indent=1)[:800]) for m in re.findall(r'<script type=\"application/ld\+json\">(.*?)</script>', sys.stdin.read(), re.S)]"
```

---

## Task index

| ID | Priority | Task | Status |
|----|----------|------|--------|
| T1 | High | Fix H1 hierarchy on homepage (8 → 1) | ✅ |
| T2 | High | Add `href` to link-like anchors (incl. "Hire me") | ✅ |
| T3 | High | Add `datePublished`/`dateModified` to case-study Article schema | ✅ |
| T4 | High | Compress `banner.png` (601KB → WebP ≤200KB) | ✅ |
| T5 | Medium | Story page: add `og:type`, investigate 233KB HTML | ✅ |
| T6 | Medium | Sitemap: real per-page `lastmod`, drop `changefreq=daily` | ✅ |
| T7 | Medium | Add speculation rules (prefetch/prerender) | ✅ |
| T8 | Medium | Add `aria-label` to 4 unnamed interactive nodes | ✅ |
| T9 | Low | robots.txt cleanup + optional GEO (`llms.txt`) | ✅ |

---

## T1 — Fix H1 hierarchy on homepage (High)

**Problem:** The homepage renders **8 `<h1>` elements**. Only one H1 is allowed per page; the rest should be H2s. Current rendered H1s:

| H1 text | Source component |
|---|---|
| Akshay Kumar | `src/components/home/herosection.tsx:31` (KEEP as the single H1) |
| Akshay Kumar (duplicate) | `src/components/home/sidebar.tsx:98` |
| About Me | `src/components/home/about.tsx:21` |
| Professional Journey | `src/components/home/experiences.tsx:45` |
| Open Source Impact | `src/components/home/GitHubActivity.tsx:55` |
| What I Work With | `src/components/home/projects.tsx:16` |
| Recommendations | `src/components/home/testimonials.tsx:130` |
| Say hi! | `src/components/footer.tsx:69` |

Note: `src/components/Skills/index.tsx:15` and `src/components/Story.tsx:59` also use `<h1>` — check whether they render on the homepage; if so, demote them too. The `footer.tsx` H1 appears on **every** page, so fixing it improves all pages at once.

**Files to edit:**
- `src/components/home/sidebar.tsx` (line ~98)
- `src/components/home/about.tsx` (line ~21)
- `src/components/home/experiences.tsx` (line ~45)
- `src/components/home/GitHubActivity.tsx` (line ~55)
- `src/components/home/projects.tsx` (line ~16)
- `src/components/home/testimonials.tsx` (line ~130)
- `src/components/footer.tsx` (line ~69)

**Change:** Replace `<h1 ...>` with `<h2 ...>` (keep every className and attribute identical). Keep `herosection.tsx` H1 unchanged.

**Watch out:** The `.h1` CSS class (e.g. `className='h1 animate-text-bg ...'`) is a *style* class in `src/styles/` / Tailwind config — do **not** rename the class, only the HTML tag. Search the CSS for `.h1` if unsure. Preserve any `animate-text-bg before:` pseudo-element styling.

**Verification:**
1. `curl -s http://localhost:3000/ | grep -o '<h1[ >]' | wc -l` → must be `1`
2. `curl -s http://localhost:3000/ | grep -o '<h2[ >]' | wc -l` → must be `≥ 7`
3. Visual check: homepage section headings look unchanged (same size/weight).
4. `npm run lint` passes.

**Acceptance criteria:**
- [x] Exactly 1 `<h1>` on the homepage (hero name)
- [x] All former section-heading H1s are H2s with identical styling
- [x] Footer heading is H2 on every page (check `/story`, `/writing` too)
- [x] No visual regression

---

## T2 — Add `href` to link-like anchors (High)

**Problem:** 9 `<a>` tags in the rendered homepage have **no `href`** — crawlers can't follow them and screen readers won't announce them as links. The main CTA "Hire me" is one of them.

**Location:** `src/components/home/herosection.tsx` lines ~103–109:

```tsx
<Link smooth spy offset={-32} duration={200} to='contact'>
    Hire me
</Link>
```

This is a `react-scroll` `Link` (scrolls to `#contact`) — it renders an `<a>` without `href`. Other href-less anchors exist elsewhere (scroll arrows, icon wrappers).

**Files to edit:**
- `src/components/home/herosection.tsx` (Hire me CTA)
- Any other component rendering `<a>` without `href` — find them:
  ```bash
  grep -rn "<a[^>]*>" src --include="*.tsx" | grep -v "href" | head -30
  ```

**Change (pick per element):**
- **CTA that should navigate:** give it a real destination, e.g. `href='mailto:akshay.allen26200@gmail.com'` or `href='/#contact'`, rendered as a plain `<a>` or Next `<Link>`.
- **Scroll-only affordances** (e.g. hero bounce arrow): convert to `<button type='button' aria-label='Scroll to next section' onClick={scrollFn}>` **or** keep `<a href='#section-id'>` so it remains a real fragment link. Never leave a bare `<a>` with no href.
- If keeping react-scroll for smooth behavior, it accepts an `href`-style fallback — or attach `role='button'` + `tabIndex={0}` + keyboard handler. Prefer a real `href` when the target is a page or anchor.

**Verification:**
1. `curl -s http://localhost:3000/ | grep -oE '<a([ >][^>]*)?>' | grep -vc 'href='` → ideally `0`; any remainder must be justified in the completion note.
2. Tab through the homepage: every interactive element is reachable and announced correctly.
3. "Hire me" click behavior is unchanged (scrolls to contact section **or** opens mail — whatever you implement; note which).

**Acceptance criteria:**
- [x] "Hire me" is a real link (has `href`) or a real `<button>` with accessible name
- [x] Zero unjustified `<a>` without `href` on the homepage
- [x] Keyboard navigation works for all fixed elements
- [x] `npm run lint` passes

---

## T3 — Add dates to case-study Article schema (High)

**Problem:** The `Article` JSON-LD on `/case-studies/[slug]` lacks `datePublished` and `dateModified`. The writing articles already include `datePublished` (`src/app/writing/[slug]/page.tsx:80`) — case studies should match. Dates are an E-E-A-T freshness signal for Article-type content.

**Files to edit:**
- `src/data/caseStudies.ts` — add optional `publishedDate` and `modifiedDate` fields to the `CaseStudy` interface and set truthful values per study (e.g. real launch/publish dates; for MBT, the content references 24 Oct 2026 inauguration and 27 Oct 2026 Play snapshot).
- `src/app/case-studies/[slug]/page.tsx` — in `articleSchema` (lines 66–91), add:
  ```ts
  datePublished: study.publishedDate,
  dateModified: study.modifiedDate ?? study.publishedDate,
  ```

**Do not invent dates.** Use the earliest date the case study was publicly written/known; `dateModified` may equal the last content update (the sitemap build stamped 2026-10-27 — use only if it reflects a real content change).

**Verification:**
1. `npm run build` succeeds.
2. For each case-study URL, run the JSON-LD helper (see Global verification helpers) — output must contain `datePublished` and `dateModified`.
3. Validate one page in Google's Rich Results Test (manual step for the human owner).

**Acceptance criteria:**
- [x] Both case studies emit `datePublished` + `dateModified` in Article JSON-LD
- [x] Dates are truthful (traceable to real events, not build time)
- [x] Writing articles untouched and still valid

---

## T4 — Compress OG image `banner.png` (High)

**Problem:** `/images/banner.png` is **601,094 bytes** (PNG, 1200×630 target). It's referenced by homepage OG/Twitter meta in `src/app/layout.tsx`. Social scrapers time out or render slowly on images this heavy; target ≤ 200KB.

**Files/paths involved:**
- Source: `public/images/banner.png`
- Referenced from: `src/app/layout.tsx` (`openGraph.images` / `twitter.images` — search for `banner.png`)

**Change:**
1. Convert to WebP at 1200×630, quality ~80, aiming ≤ 200KB:
   ```bash
   npx @squoosh/cli --webp '{"quality":80}' -d public/images public/images/banner.png
   # or: cwebp -q 80 public/images/banner.png -o public/images/banner.webp
   ```
2. Update layout metadata to point at `banner.webp` (keep PNG as fallback only if you also add an OG-image array entry; OG supports WebP on major scrapers, but including both PNG+WebP entries is safest).
3. Keep PNG in repo only if still referenced; otherwise delete to avoid dead weight.

**Verification:**
1. `ls -la public/images/banner.*` → WebP ≤ 200KB.
2. Rendered homepage `<meta property="og:image">` URL returns 200 and the new size:
   `curl -s -o /dev/null -w "%{size_download}" https://connectwithakshay.netlify.app/images/banner.webp`
3. Facebook Sharing Debugger / LinkedIn Post Inspector show the preview (manual step for owner).

**Acceptance criteria:**
- [x] OG image ≤ 200KB
- [x] og:image + twitter:image both resolve (200, correct dimensions)
- [x] Visual quality of the social preview is acceptable

---

## T5 — Story page metadata + page weight (Medium)

**Problem:**
1. `/story` `openGraph` is missing `type` (defaults inconsistently; other pages set `article`/`website`). Add `type: 'website'`.
2. `/story` serves **~233KB of HTML** — the heaviest page on the site. Likely large inlined content in `src/components/Story.tsx` / `src/utils/developerStory.tsx` / `src/data/story/`.

**Files to edit:**
- `src/app/story/page.tsx` — add `type: 'website'` to `openGraph` (line 22–27) and an `images` entry if one exists for story.
- Investigate weight: `curl -s http://localhost:3000/story | wc -c` before/after. Check for duplicated data blobs, base64 images inline, or un-trimmed arrays in `src/data/story/*`. If large inline images exist in HTML, move to `<img>`/`next/image` files.

**Verification:**
1. Rendered `/story` head contains `og:type` = `website`.
2. HTML size reduced (report before/after bytes); if no safe reduction found, document the cause in the completion note instead of forcing risky refactors.
3. `npm run build && npm run lint` pass.

**Acceptance criteria:**
- [x] `og:type` present on `/story`
- [x] Weight cause identified; reduced if safely possible, otherwise explained
- [x] No visual/functional regression on `/story`

---

## T6 — Sitemap hygiene (Medium)

**Problem:** All 8 URLs share one identical `lastmod` (`2026-10-27T06:54:19.320Z` — build time) and `changefreq=daily` even for evergreen pages. Uniform priority `0.7` too. This trains crawlers to ignore your freshness signals.

**Files to edit:**
- `next-sitemap.config.js` — currently:
  ```js
  siteUrl: "https://connectwithakshay.netlify.app/",
  changefreq: 'daily',
  ```
  Changes:
  1. Remove global `changefreq: 'daily'`. Set per-path or omit entirely (Google ignores changefreq mostly; omitting is cleaner).
  2. Add `transform` (or `additionalPaths`) to emit real `lastmod` per route. Source of truth options:
     - Writing posts: `post.date` from `src/utils/writing.ts` / `src/content/writing/*` git or frontmatter dates.
     - Case studies: the `modifiedDate` added in **T3**.
     - Static pages (`/`, `/story`, `/success`): last meaningful content-change date; a single maintained constant is acceptable.
  3. Also fix the trailing slash: `siteUrl` ends with `/` which propagates a trailing-slash `Host:` line into robots.txt while canonicals omit the slash. Set `siteUrl: "https://connectwithakshay.netlify.app"` (no trailing slash) and confirm robots/sitemap URLs still generate correctly.
- `public/sitemap*.xml` are build artifacts (regenerated by `postbuild`); do not hand-edit — rebuild to refresh.

**Verification:**
1. `npm run build` regenerates sitemaps.
2. `curl -s http://localhost:3000/sitemap-0.xml` → distinct `lastmod` values where content dates differ; no `changefreq` (or realistic values).
3. `curl -s http://localhost:3000/robots.txt` → `Host:` line (if present) matches canonical form without double-slash issues.

**Acceptance criteria:**
- [x] `lastmod` reflects real content dates for writing + case studies
- [x] No blanket `changefreq=daily`
- [x] robots.txt / sitemap URLs consistent with canonical (no trailing slash)
- [x] Build passes

---

## T7 — Speculation rules for prefetch/prerender (Medium)

**Problem:** `preload_check` scored 75/100 — zero Speculation Rules. In-site navigations (homepage → case studies → writing) pay full navigation cost every time.

**Files to edit:**
- Add a speculation-rules script to the root layout `src/app/layout.tsx` `<head>` (or a small component):
  ```html
  <script type="speculationrules">
  {
    "prefetch": [
      { "where": { "href_matches": "/case-studies/*" }, "eagerness": "moderate" },
      { "where": { "href_matches": "/writing/*" }, "eagerness": "moderate" }
    ],
    "prerender": [
      { "where": { "href_matches": "/case-studies" }, "eagerness": "moderate" },
      { "where": { "href_matches": "/writing" }, "eagerness": "moderate" }
    ]
  }
  </script>
  ```
- Keep eagerness `moderate` (viewport-adjacent links) to avoid bandwidth waste; do not prerender on hover-only without data.

**Verification:**
1. View source of homepage: `<script type="speculationrules">` present and valid JSON.
2. Chrome DevTools → Performance/Application: prerender happens on hover/viewport for listed links (manual spot check).
3. Lighthouse (local) does not flag console errors.

**Acceptance criteria:**
- [x] Speculation rules script present, valid, limited to high-value paths
- [x] No regression on browsers without support (rules ignored gracefully)
- [x] Build passes

---

## T8 — Accessible names for interactive nodes (Medium)

**Problem:** Agent-UX audit scored 88/100: **4 interactive nodes without accessible name** (−12). Also 3 inputs flagged in static scan.

**How to find them:**
1. Run the audit script (if available in this environment):
   ```bash
   "$HOME/.claude/skills/seo/scripts/claude-seo" run agent_ux_check.py "http://localhost:3000/"
   ```
2. Or manually: in Chrome DevTools accessibility pane, inspect buttons/links with "Name — (empty)". Likely candidates: icon-only social buttons, the terminal CLI launcher button (already has `aria-label='Open Terminal'` — verify others match that pattern), scroll arrow (fixed in T2), any `<button>` wrapping only an SVG.

**Files to edit:** wherever the unnamed nodes live — start with:
- `src/components/home/herosection.tsx` (social icon row uses anchors with only SVG children — ensure each has `aria-label`: GitHub, LinkedIn, Email, HackerRank)
- `src/components/common/*` and `src/components/ui/*` shared buttons

**Change:** add `aria-label='Descriptive name'` (e.g. `aria-label='GitHub profile'`). If the visible text exists but is in a nested span the a11y tree misses, restructure rather than duplicating labels.

**Verification:**
1. Re-run agent_ux_check → `unnamed_interactive: 0`
2. VoiceOver/NVDA spot check: every icon control announces a meaningful name.

**Acceptance criteria:**
- [x] Zero unnamed interactive nodes on homepage
- [x] No duplicate/conflicting accessible names
- [x] Lint passes

---

## T9 — robots.txt cleanup + GEO extras (Low)

**Problem / opportunities:**
1. Generated `robots.txt` contains two `User-agent: *` groups and a `Host:` directive whose trailing slash disagrees with canonical (root cause fixed in **T6** via `siteUrl`).
2. `llms.txt` returns **404**. AI-crawler citability would improve with `/llms.txt` + optional markdown mirrors.
3. `meta keywords` in `src/app/layout.tsx` is obsolete — remove (harmless but dead weight).

**Files to edit:**
- `next-sitemap.config.js` `robotsTxtOptions.policies` — merge into a single:
  ```js
  policies: [{ userAgent: '*', allow: '/', disallow: ['/api'] }]
  ```
- `public/llms.txt` (new) — concise site map for AI agents, e.g.:
  ```
  # Akshay Kumar — Full Stack Developer
  > Lead Developer at EduLinkUp, Web Development Lead at Codeunia. Builds AI & cloud-driven products.

  ## Pages
  - [Portfolio](https://connectwithakshay.netlify.app/): Home, skills, experience
  - [Case Studies](https://connectwithakshay.netlify.app/case-studies): Production system deep-dives
  - [Writing](https://connectwithakshay.netlify.app/writing): Long-form engineering notes
  - [Story](https://connectwithakshay.netlify.app/story): Career journey
  ```
- `src/app/layout.tsx` — remove `keywords` meta (line ~39) if present at layout level.

**Verification:**
1. `curl -s http://localhost:3000/robots.txt` → single user-agent group; Sitemap line intact.
2. `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/llms.txt` → `200`
3. Homepage head: no `meta name="keywords"`.

**Acceptance criteria:**
- [x] robots.txt merged and consistent
- [x] llms.txt live and accurate
- [x] keywords meta removed
- [x] Build passes

---

## Post-audit re-check (after all tasks)

1. `npm run build && npm run lint` — green.
2. Deploy preview, then re-run:
   - H1 count = 1 on homepage
   - `agent_ux_check.py` → unnamed_interactive = 0
   - `preload_check.py` → speculation rules detected, score > 75
   - JSON-LD extraction on both case studies shows dates
3. Ask the site owner to re-run `/seo audit https://connectwithakshay.netlify.app` for a refreshed health score.
4. Optional: configure `GOOGLE_API_KEY` at `~/.config/claude-seo/google-api.json` so Core Web Vitals (PSI/CrUX) can be measured — the one gap in the original audit (PSI was rate-limited, no key configured).

## Log

<!-- Agents append completion notes here: date, task ID, PR/commit, verification results, before/after metrics -->

- **2026-10-31 — T1 (High) — H1 hierarchy fixed.** Demoted 8 section H1s to H2 (sidebar, about, experiences, GitHubActivity, projects, testimonials, footer, Skills). Footer fix also corrected all other pages. Verified: homepage 1 `<h1>` / 9 `<h2>`; `/story` and `/writing` 1 `<h1>` each. `npm run lint` clean. Styling classes untouched (`.h1` class preserved).

- **2026-10-31 — T2 (High) — href-less anchors fixed.** Added `href` fallbacks to all 7 react-scroll `Link` usages: hero "Hire me" (`#contact`), hero scroll arrow (`#about`), navbar logo (`#herosection`), navbar section links (`#<section>`), sidebar logo + section links. react-scroll still intercepts clicks for smooth scrolling, so UX is unchanged; `href` gives crawlers/screen readers/no-JS a real target. Verified rendered homepage: 8 → 0 anchors without `href`; "Hire me" renders `<a href="#contact">`. Lint clean.

- **2026-10-31 — T3 (High) — Case-study Article dates added.** Added optional `publishedDate`/`modifiedDate` to `CaseStudy` and emitted them in Article JSON-LD. Dates traced to git: both studies first published `2026-10-19` (commit dfe21d9); MBT content updated `2026-10-27` (commit e3ae6a4 added Play/order snapshots), so `modifiedDate` set only for MBT. Verified in rendered JSON-LD: EduLinkUp `2026-10-19`/`2026-10-19`, MBT `2026-10-19`/`2026-10-27`. `npm run build` + lint pass.

- **2026-10-31 — T4 (High) — OG image compressed.** `banner.png` was 1920×1080 / 601KB; generated `banner.webp` at 1200×630 (center-cropped), quality 80 → **47KB** (−92%). Pointed `openGraph.images` and `twitter.images` at `banner.webp` with `type: image/webp`. Verified rendered tags + `GET /images/banner.webp` → 200, 47,044 bytes, `Content-Type: image/webp`. Original PNG kept because `src/utils/constants/Projects.tsx` still links it via GitHub raw for a project README.

- **2026-10-31 — T5 (Medium) — /story metadata + weight investigation.** Added `og:type: website` + OG image (banner.webp 1200×630) to `/story` metadata; verified rendered `<meta property="og:type" content="website">`. Weight investigation: HTML is 233KB uncompressed but only **38.5KB gzipped** (what browsers transfer). Cause: 170 inline SVGs totalling ~104KB (45% of payload) — react-icons rendered per story card/tech badge, only 34 unique shapes; plus ~12KB hydration scripts, 32KB text. No base64 images or duplicated data (`src/data/story/all.ts` = 6.5KB). No safe reduction without a risky icon-sprite refactor; documented instead of forcing it. Build + lint pass, page renders normally.

- **2026-10-31 — T6 (Medium) — Sitemap hygiene.** Rewrote `next-sitemap.config.js`: removed global `changefreq: 'daily'` (priority kept only for `/`=1.0 and section hubs=0.9); added a `transform` that emits real per-route `lastmod` — writing posts read frontmatter `date`/`updated` from `src/content/writing/*.md`, case studies parse `publishedDate`/`modifiedDate` from `src/data/caseStudies.ts` (dates added in T3), static pages use a maintained constant map. Fixed `siteUrl` trailing slash → `robots.txt` now emits `Host: https://connectwithakshay.netlify.app` (no slash), single `User-agent: *` group (also fixes the T9 duplicate-group issue). Verified rendered `sitemap-0.xml`: 8 distinct lastmod dates (EduLinkUp `2026-10-19`, MBT `2026-10-27`, writing `2026-10-21`), 0 `changefreq`. Build passes.

- **2026-10-31 — T7 (Medium) — Speculation rules added.** Added a `type="speculationrules"` script at the top of `<body>` in `src/app/layout.tsx` (renders on every page, serialized as JSON): prefetch `moderate` for `/case-studies/*` and `/writing/*`; prerender `moderate` for the `/case-studies`, `/writing`, `/story` hubs. Unsupported browsers ignore the custom script type entirely (no regression). Verified: script present + valid JSON on `/` and `/story`; `npm run build` + lint pass.

- **2026-10-31 — T8 (Medium) — Accessible names added.** Added `aria-label` + `aria-hidden` icons to every icon-only control: hero socials (GitHub/LinkedIn/Email/HackerRank), hero scroll arrow (`Scroll to next section`), navbar + sidebar GitHub icon links, sidebar social row, and the CertificationBar modal close button (`Close certificates dialog`) — the last one being the 4th unnamed node the audit flagged. Controls that already had names were left alone (CLI buttons, Back to top, testimonial/article carousels). Verified homepage HTML: all anchors/buttons render a descriptive name, no duplicate conflicts. Build + lint pass.

- **2026-10-31 — T9 (Low) — robots cleanup + llms.txt.** robots.txt duplicate `User-agent: *` groups were already merged as part of the T6 config rewrite (single `allow: /` + `disallow: [/api]`, `Host:` with no trailing slash); verified rendered robots.txt. Added `public/llms.txt` (verified 200) describing the site map, case studies, and contact. Removed the obsolete layout-level `keywords` meta from `src/app/layout.tsx`; homepage head no longer contains `name="keywords"`. Build + lint pass.

---

- **2026-10-31 — ALL TASKS (T1–T9) COMPLETE.** Final local sweep: exactly 1 `<h1>` on `/`, `/story`, `/writing`, `/case-studies` (index + article pages); 0 href-less anchors on homepage; speculation rules on every page; llms.txt 200; keywords meta gone; robots.txt clean. `npm run build` + `npm run lint` green throughout. Site totals: ~13 files edited, banner 601KB→47KB, uncompressed /story HTML cause documented (38.5KB gzipped on the wire). **Owner steps remaining:** deploy, then re-run `/seo audit https://connectwithakshay.netlify.app` for the refreshed health score (live site still serves pre-fix HTML — the audit scripts above can't target localhost), plus optional Google Rich Results Test on a case study and configuring `GOOGLE_API_KEY` for CWV data.
