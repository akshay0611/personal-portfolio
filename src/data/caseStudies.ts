export interface CaseStudyMetric {
	label: string;
	value: string;
}

export interface CaseStudyCta {
	label: string;
	href: string;
}

export interface CaseStudySection {
	id: string;
	heading: string;
	body?: string[];
	bullets?: string[];
	cta?: CaseStudyCta[];
	diagram?: {
		title: string;
		description?: string;
		nodes: { id: string; label: string }[];
		edges: { from: string; to: string; label?: string }[];
	};
	milestones?: CaseStudyMetric[];
	milestonesSource?: string;
}

export interface CaseStudyFaq {
	question: string;
	answer: string;
}

export interface CaseStudy {
	slug: string;
	projectName: string;
	org: string;
	tagline: string;
	heroEyebrow?: string;
	heroTitle?: string;
	heroDescription?: string;
	role: string;
	timeline: string;
	industry: string;
	logo: string;
	logoFit?: 'cover' | 'contain';
	liveUrl?: string;
	metaTitle: string;
	metaDescription: string;
	publishedDate?: string;
	modifiedDate?: string;
	keywords: string[];
	tldr: string;
	metrics: CaseStudyMetric[];
	milestones?: CaseStudyMetric[];
	milestonesSource?: string;
	sections: CaseStudySection[];
	techStack: string[];
	faqs: CaseStudyFaq[];
}

export const caseStudies: CaseStudy[] = [
	{
		slug: 'edulinkup-learning-platform',
		projectName: 'EduLinkUp — Learning & Developer Ecosystem Platform',
		org: 'EduLinkUp',
		tagline: 'From open-source roots to a developer ecosystem — architected from day one.',
		heroEyebrow: 'Founding Engineering · Product Architecture · EdTech',
		heroTitle: 'From an Open-Source GitHub Organization to a Developer Ecosystem.',
		heroDescription:
			'EduLinkUp started as an open-source initiative. I helped turn that community into a production-grade digital ecosystem — establishing its engineering foundation, architecting the platform, and building the systems that evolved it into a multi-product experience for developers and learners.',
		role: 'Founding Engineer · Technical Architect',
		timeline: 'Nov 2025 – Present',
		industry: 'EdTech · Developer Tools',
		logo: '/images/project/edulinkup.webp',
		logoFit: 'contain',
		liveUrl: 'https://edulinkup.dev',
		metaTitle: 'EduLinkUp — Building a Developer Ecosystem from Zero',
		metaDescription:
			'How I helped take EduLinkUp from an open-source community to a production-grade developer ecosystem — architecting the Next.js, Supabase and Google Cloud platform and building the multi-product engineering capability behind learning, coding, open-source and career experiences.',
		publishedDate: '2026-10-19',
		modifiedDate: '2026-11-09',
		keywords: [
			'founding engineer',
			'developer ecosystem case study',
			'edtech platform architecture',
			'open source edtech',
			'Next.js Supabase developer platform',
			'supabase row level security education',
			'online coding judge platform',
			'verifiable course certificates',
			'build product from zero',
		],
		tldr:
			'EduLinkUp started as an open-source community for students and developers contributing to real projects, and later grew into a digital learning and developer ecosystem. I was involved from its earliest stages — before the platform existed — helping define the technical direction and build the product from zero into a Next.js and Supabase-based ecosystem spanning learning, coding practice, open-source programs, internships and careers — now serving 2,700+ monthly active users across 100+ countries.',
		metrics: [
			{ value: '2,700+', label: 'Monthly active users' },
			{ value: '100+', label: 'Countries served' },
			{ value: '300+', label: 'Signups per month' },
			{ value: '100+', label: 'Interns onboarded' },
		],
		sections: [
			{
				id: 'origin',
				heading: 'The origin — before there was a platform',
				body: [
					'EduLinkUp did not begin as an edtech product with a course catalogue and a website. It began as a GitHub organization — a focused home for open-source software, developer collaboration and contribution opportunities for students and developers.',
					'The founding premise was simple: give students and early-career developers a structured way to move from learning about open source to contributing to real projects. As the initiative gathered momentum, it became clear that the community needed a more durable digital home — and that is when the product work began.',
				],
				bullets: [
					'Open-source collaboration and real-world contribution practice.',
					'Student participation in developer communities.',
					'A growing initiative that needed a structured digital home.',
				],
			},
			{
				id: 'from-community-to-product',
				heading: 'From community initiative to product',
				body: [
					'As the community grew, the organization moved from GitHub-led collaboration into a dedicated digital platform. I was involved at the point where community intent had to become software: establishing the product foundation, architecting the application, and building the first version that turned community momentum into structured learning, coding practice and contribution experiences.',
					'The platform was designed as an extensible product foundation rather than a fixed feature list. The early architectural decisions — server-first rendering, a single data layer, authorization enforced at the database — were made to keep the door open for the product evolution that followed.',
				],
				bullets: [
					'Product foundation and initial platform development.',
					'Architecture chosen for long-term extensibility.',
					'Long-term planning for evolving requirements.',
				],
			},
			{
				id: 'engineering-ownership',
				heading: 'Engineering ownership',
				body: [
					'The story of EduLinkUp is also my story of technical ownership. I personally established the engineering foundation that later product lines were built on, while coordinating execution across a contributor community.',
					'The work falls cleanly into four areas: product engineering, architecture and infrastructure, platform engineering, and engineering leadership.',
				],
				bullets: [
					'Product engineering — establishing the initial web platform, translating community requirements into working product capabilities, and designing extensible application modules.',
					'Architecture and infrastructure — choosing the Next.js application architecture, designing the Supabase and PostgreSQL data architecture with Row Level Security, and making infrastructure and deployment decisions.',
					'Platform engineering — building competitive programming and code judging, open-source program infrastructure, certificate generation and verification, payments and entitlement systems, and careers workflows.',
					'Engineering leadership — technical direction, contributor coordination, code quality and maintainability, development workflows, and long-term technical decisions.',
				],
			},
			{
				id: 'evolution',
				heading: 'Engineering for expansion',
				body: [
					'EduLinkUp grew from a learning platform into a multi-product developer ecosystem. The expansion was staged: each product addressed a real gap in the journey of a learner — from finishing a course, to practicing, to contributing, to being discovered and hired.',
				],
				bullets: [
					'**ELUCode** — Bi-weekly competitive programming challenges with an in-browser coding competition experience, leaderboards and recognition. It evolved from a contest series into an ongoing developer engagement initiative.',
					'**ELUSOC 2026** — Open-source contribution program with participant onboarding and contribution workflows, leaderboards, partner tiers, badges, bonus points and certificates.',
					'Learning and developer resources — learning resources, developer tools and a community app store, plus practical labs and coding experiences.',
					'Careers and opportunities — internships, job opportunities, application workflows, recruitment and offer-letter capabilities.',
					'Community ecosystem — events, campus ambassador initiatives, blogs and newsletters, and developer engagement initiatives.',
				],
			},
			{
				id: 'architecture',
				heading: 'Architecture',
				body: [
					'I chose a deliberately boring, server-first stack so that the interesting engineering could go into the product rather than the plumbing.',
				],
				bullets: [
					'Application: Next.js App Router with React Server Components, TypeScript and a Radix-based component system, so data-heavy views render on the server and ship less JavaScript.',
					'Data and security: Supabase PostgreSQL with Row Level Security as the authorization backbone, plus storage and database-backed business logic close to the data instead of spreading rules across the client.',
					'Infrastructure: Google Cloud Run autoscaling behind Cloudflare, with Sentry for error visibility, rate limiting on sensitive routes, and SSO integration.',
					'Code execution: a Monaco-based editor wired to a pluggable multi-language judging system, with untrusted submissions isolated in sandboxed environments.',
					'Integrations: Razorpay for subscriptions, React Email with Brevo and Resend for transactional mail, and Playwright for end-to-end coverage of critical flows.',
				],
				diagram: {
					title: 'Platform architecture',
					description:
						'A simplified view of the deployed runtime flow. Only primary integration paths are shown; not every component communicates directly with every other component.',
					nodes: [
						{ id: 'learner', label: 'Learner' },
						{ id: 'cloudflare', label: 'Cloudflare' },
						{ id: 'sentry', label: 'Sentry' },
						{ id: 'cloudrun', label: 'Google Cloud Run' },
						{ id: 'nextjs', label: 'Next.js App Router' },
						{ id: 'supabase', label: 'Supabase (PostgreSQL · Auth · RLS)' },
						{ id: 'judge', label: 'Code Execution · Judging' },
						{ id: 'razorpay', label: 'Razorpay' },
						{ id: 'email', label: 'React Email · Brevo / Resend' },
					],
					edges: [
						{ from: 'learner', to: 'cloudflare' },
						{ from: 'cloudflare', to: 'cloudrun', label: 'autoscale' },
						{ from: 'cloudrun', to: 'nextjs', label: 'serve' },
						{ from: 'nextjs', to: 'supabase', label: 'SQL / Auth / RLS' },
						{ from: 'nextjs', to: 'judge', label: 'submissions' },
						{ from: 'nextjs', to: 'razorpay', label: 'checkout' },
						{ from: 'nextjs', to: 'email', label: 'transactional' },
						{ from: 'nextjs', to: 'sentry', label: 'errors' },
					],
				},
			},
			{
				id: 'challenges',
				heading: 'Engineering challenges and decisions',
				body: [
					'Running untrusted code was the highest-risk surface the platform ever exposed. **The problem.** Once the platform opened a code judging surface to the public, every submission had to be treated as hostile. **The decision.** The Monaco-based editor was kept as a front-end convenience and every submission routed through a pluggable multi-language judging system executing in isolated sandboxes with bounded resources. **The trade-off.** The judging pipeline carried substantial complexity and latency that could not match a local IDE. **The engineering outcome.** A public coding judge could ship safely, because the application process never became an execution authority.',
					'Access control could not live only in the interface. **The problem.** Course content, internships and premium access all needed different rules, and client-side enforcement would have been a permanent leak. **The decision.** Authorization was enforced in Supabase PostgreSQL through Row Level Security, so the same rules applied to web requests, API routes and admin actions. **The trade-off.** The cost was upfront effort around authoring and testing database policies. **The engineering outcome.** Authorization became a single source of truth instead of a client-side pattern that could drift.',
					'Certificates needed to survive scrutiny. **The problem.** Static images could not be independently verified. **The decision.** Verifiable artifacts with QR-based validation were issued instead of static images. **The trade-off.** Verification infrastructure had to be built alongside certificate generation. **The engineering outcome.** Hiring managers could confirm a certificate against the platform rather than trusting a screenshot.',
					'The platform had to absorb multiple product lines without a rewrite. **The problem.** Later products — coding challenges, open-source programs, careers, community tooling — needed to reuse an already-built foundation. **The decision.** Product modules were treated as the architectural boundary from the earliest releases. **The trade-off.** Some up-front structuring discipline was required. **The engineering outcome.** Later products were built as modules instead of forks of the original codebase.',
					'The infrastructure had to stay economically predictable while traffic grew unevenly around launches. **The problem.** Autoscaling had to serve real demand without peak-provisioned waste. **The decision.** Google Cloud Run autoscaling behind Cloudflare, server-side rendering with aggressive caching, and rate limiting on sensitive routes were adopted. **The trade-off.** Capacity still had to be planned before launch rather than after. **The engineering outcome.** Predictable spend while capacity tracked real traffic.',
				],
			},
			{
				id: 'milestones',
				heading: 'Milestones and product impact',
				body: [
					'The journey unfolded in stages, each building on the previous one.',
				],
				milestones: [
					{ value: '3.5K', label: 'Website views' },
					{ value: '5.4K', label: 'Tracked events' },
				],
				milestonesSource: 'Google Analytics · EduLinkUp website · 7 November 2026',
				bullets: [
					'**Nov 2025 — Founding stage:** The initiative began as an open-source community, and the founding engineering effort started establishing the digital platform.',
					'**Core platform:** Structured learning, coding labs and verifiable certificates formed the first product foundation.',
					'**ELUCode Edition 7 — 7 November 2026:** Bi-weekly competitive programming challenges launched and later evolved into an ongoing developer engagement initiative. During the edition, platform activity spiked to approximately 3.5K website views and 5.4K tracked events in a single day — a dated engagement milestone rather than proven attribution of the spike, and kept separate from the platform-wide metrics.',
					'**ELUSOC 2026:** Open-source contribution program opened with structured onboarding and contribution workflows.',
					'**Ecosystem expansion:** Learning resources, developer app store, careers and community initiatives were layered onto the platform.',
				],
			},
			{
				id: 'results',
				heading: 'Results',
				body: [
					'EduLinkUp grew from the open-source community initiative into a developer ecosystem. It now supports 2,700+ monthly active users across 100+ countries, absorbs 300+ new signups per month, and powers a hiring pipeline that has onboarded 100+ interns — with an internship acceptance rate of roughly 76% across 150+ applications.',
					'Just as importantly, the platform stayed operable by a small team: server-first rendering, RLS-based authorization and managed infrastructure kept the surface area small enough that new contributors could ship without a long ramp-up.',
				],
			},
			{
				id: 'lessons',
				heading: 'What I would do differently',
				bullets: [
					'Introduce a shared design token layer earlier — consistent spacing and state styles paid off the moment multiple contributors touched the same views.',
					'Treat observability as a first-class feature from day one; retrofitting tracing around a judging pipeline is far harder than starting with it.',
					'Model entitlements as explicit domain objects sooner, so new premium surfaces plug into one rule source instead of re-implementing checks.',
					'Establish contributor onboarding and engineering processes early so community velocity does not depend on a single person.',
					'Balance product velocity with long-term maintainability as the platform absorbs new product lines.',
				],
			},
			{
				id: 'closing',
				heading: 'From zero to a living ecosystem',
				body: [
					'The engineering story of EduLinkUp is the story of building from zero: an idea that began as an open-source community, then became a product through architecture decisions made alongside rapidly evolving requirements.',
					'The most satisfying stretch of this project was the transition from community initiative to functioning digital ecosystem — not a rebuild of an existing platform, but the founding engineering effort that turned open-source intent into a product people could learn, practice, contribute and get hired through.',
				],
				cta: [
					{ label: 'Visit the live platform', href: 'https://edulinkup.dev' },
					{ label: 'Explore other case studies', href: '/case-studies' },
				],
			},
		],
		techStack: [
			'skill_nextjs',
			'skill_reactjs',
			'skill_typescript',
			'skill_tailwindcss',
			'skill_supabase',
			'skill_framer_motion',
			'skill_razorpay',
		],
		faqs: [
			{
				question: 'How is untrusted student code executed safely?',
				answer:
					'Submissions never run inside the application process. A Monaco-based editor hands code to a multi-language judging system that executes each submission in an isolated sandbox with bounded resources, so a malicious or runaway program cannot reach the platform or other users.',
			},
			{
				question: 'Why build on Supabase instead of a custom backend?',
				answer:
					'Supabase gave us PostgreSQL, authentication, storage and Row Level Security with far less operational overhead than a hand-rolled backend. Keeping authorization inside RLS means the same access rules hold across the web app, API routes and admin actions, which removes an entire class of security bugs.',
			},
			{
				question: 'How do you keep infrastructure costs predictable as traffic grows?',
				answer:
					'Google Cloud Run autoscales with demand behind Cloudflare, so capacity tracks real traffic instead of peak-provisioned servers. Combining server-side rendering with aggressive caching keeps the number of expensive requests low, and rate limiting protects sensitive endpoints from abuse.',
			},
			{
				question: 'How do you stop users from sharing premium access?',
				answer:
					'Premium entitlement is enforced in the database through Row Level Security rather than in the client, and sensitive actions are rate limited and audited. That means a shared link or tampered front-end cannot unlock content the account has not paid for.',
			},
		],
	},
	{
		slug: 'mbt-learning-lms-piracy-protection',
		projectName: 'MBT Institute LMS — Mobile Learning Platform',
		org: 'Tensorik Technologies · Client: MBT Institute',
		tagline:
			'A production LMS with controls to deter sharing of paid content while serving live classes, recordings and certificates on Android.',
		role: 'CTO & Lead Full Stack Developer',
		timeline: 'Jul 2026 – Oct 2026',
		industry: 'EdTech · Mobile',
		logo: '/images/project/mbt.webp',
		logoFit: 'cover',
		liveUrl: 'https://play.google.com/store/apps/details?id=com.tensorik.mbt_lms',
		metaTitle: 'MBT Learning Case Study: Content Protection and Delivery for a Training Institute',
		metaDescription:
			'How I built MBT Institute’s LMS for content protection and delivery, live classes and two payment tracks. Google Play listing captured 27 Oct 2026: 500+ downloads, 5.0 stars and 123 reviews. A separate Play statistics chart showed 264 install events on 21 Oct 2026. As of 27 Oct 2026, the platform had 740+ paid orders across hardware and software tracks.',
		publishedDate: '2026-10-19',
		modifiedDate: '2026-10-27',
		keywords: [
			'LMS content protection and delivery',
			'Flutter LMS app case study',
			'NestJS LMS backend',
			'device binding content protection',
			'dual payment gateway edtech',
			'Supabase LMS platform',
		],
		tldr:
			'MBT Institute sold paid courses through WhatsApp groups, shared drives and manual payments, losing revenue to account sharing and reconciliation guesswork. I built and shipped a production LMS — a Flutter Android learner app, a NestJS API and a Next.js admin console on Supabase — that binds each enrolment to a single active device, separates hardware and software payments into distinct Razorpay tracks, and delivers live classes with auto-published recordings. Released on Google Play ahead of its inauguration at the institute’s fifth-anniversary student meet-up in Vijayawada on 24 Oct 2026.',
		metrics: [
			{ value: '500+', label: 'Google Play downloads · 27 Oct 2026 capture' },
			{ value: '5.0 stars', label: '123 reviews · 27 Oct 2026 capture' },
			{ value: '740+', label: 'Paid orders · as of 27 Oct 2026' },
			{ value: '24 Oct 2026', label: 'Launch · Vijayawada' },
		],
		sections: [
			{
				id: 'problem',
				heading: 'The problem',
				body: [
					'MBT Institute was selling paid course access through a patchwork of WhatsApp groups, shared drives and manual payments. That created three compounding problems: students shared accounts freely, so one purchase served many learners; payments for hardware and software courses were mixed together, making reconciliation guesswork; and every live class or recording was distributed by hand.',
					'The institute did not need another marketing site. It needed a single system where enrolment, payment, content access and certification were all controlled by the same rules.',
				],
			},
			{
				id: 'constraints',
				heading: 'Constraints that shaped the design',
				bullets: [
					'The learner experience had to ship on Android, which meant a real mobile app rather than a web wrapper.',
					'A single backend had to serve both the mobile app and a separate admin console without duplicated business logic.',
					'Downstream operations had to stay cheap — the institute had no DevOps team and no appetite for servers to babysit.',
					'Payments had to remain flexible: some courses belong to a hardware track, others to software, and their pricing and coupon rules differ.',
					'Existing content and student records needed to migrate without disrupting a running intake.',
					'The release carried a fixed external date: the app was to ship to Google Play ahead of its inauguration at the institute’s fifth-anniversary student meet-up in Vijayawada on 24 Oct 2026.',
				],
			},
			{
				id: 'architecture',
				heading: 'Architecture',
				body: [
					'I structured the system as three deployables sharing one source of truth, so the mobile app and the admin console are thin clients over the same API and database.',
				],
				bullets: [
					'Mobile: a Flutter app using go_router for navigation, dedicated services and providers per domain, Supabase Auth for OTP and Google sign-in, Razorpay for checkout, and Firebase Cloud Messaging plus local notifications for delivery.',
					'Backend: a modular NestJS/TypeScript API with clear domains for auth, courses, enrollments, payments, coupons, devices, certificates, notifications, search and support, using Redis and BullMQ for asynchronous processing and DTO validation on every input.',
					'Data: Supabase PostgreSQL with Row Level Security and RPC functions modelling profiles, devices and transfer requests, courses, sections and lessons, carts, enrollments, payments, coupons, invoices, sessions, recordings, wishlists, notifications and support tickets.',
					'Media: a signed-upload asset pipeline on Cloudinary and object storage, so recordings and resources are served through authorized URLs rather than public links.',
					'Admin: a Next.js console for course, syllabus and renewal-plan management, live-class scheduling, billing reconciliation, device approvals, support triage and role-based access with Zod validation.',
				],
			},
			{
				id: 'protection',
				heading: 'Content protection and delivery',
				body: [
					'Content protection was the reason this project existed, so it drove the data model instead of being bolted on. Each enrolment is bound to a single active device using a device fingerprint stored in secure storage, and that binding is verified server-side on every session.',
				],
				bullets: [
					'One active device per enrolment: signing in on a new phone does not automatically grant a second stream of access.',
					'Controlled device transfers: moving to a new device requires an admin-approved transfer request, which keeps legitimate upgrades reviewable and helps deter account sharing.',
					'Capture deterrence: a no-screenshot flag is set on protected playback surfaces, and video is delivered through authorized, short-lived URLs instead of public buckets.',
					'Identity anchoring: verified OTP and Google sessions are tied to a phone number, making disposable accounts harder to farm.',
				],
			},
			{
				id: 'payments',
				heading: 'Payment integrity',
				body: [
					'The institute runs two commercial models in parallel — hardware courses and software courses — and mixing them was a source of revenue leakage. I separated them explicitly.',
				],
				bullets: [
					'Dual Razorpay tracks: hardware and software enrolments run through distinct payment configuration, so pricing, settlement and reporting stay cleanly separated.',
					'Server-side coupon validation: discount codes are scoped per track and verified on the server before any discount is applied, helping limit cross-category coupon misuse.',
					'Invoices per purchase: every transaction produces its own invoice, and the admin console reconciles payments and billing against enrolments rather than against spreadsheets.',
				],
			},
			{
				id: 'live',
				heading: 'Live classes and recordings',
				body: [
					'Live delivery had to feel native in the app rather than a link that gets forwarded. Zoom is connected through OAuth so sessions are created and scheduled by the admin, then surfaced to learners in a daily schedule view and a deep-linked player.',
					'When a class ends, recordings are auto-published back to the course with chaptered playback, so learners who miss a session land on the same course page they already use — not on a private link that leaks.',
				],
			},
			{
				id: 'production',
				heading: 'Production operations',
				body: [
					'The app was inaugurated on 24 Oct 2026, after becoming available on Google Play, and the figures below are dated snapshots.',
					'They come from different systems and reporting windows, are not additive, and do not represent unique active users.',
				],
				bullets: [
					'Google Play listing, captured 27 Oct 2026: 500+ downloads, a 5.0-star rating and 123 reviews. The download total is bucketed and may be delayed.',
					'Google Play statistics, 21 Oct 2026: 264 install events in the daily chart. This is a single-day figure, separate from the Play listing.',
					'Supabase API Gateway, 20–27 Oct 2026: 1,974,492 total requests, 13,937 response errors, and a displayed response speed of 223.19 ms.',
					'Render backend, 7-day window: 219,435 requests.',
				],
			},
			{
				id: 'launch',
				heading: 'Launch',
				body: [
					'The app shipped to the Google Play Education category as com.tensorik.mbt_lms ahead of its inauguration at MBT Institute’s fifth-anniversary student meet-up in Vijayawada on 24 Oct 2026.',
				],
			},
			{
				id: 'results',
				heading: 'Results',
				body: [
					'The platform shipped to Google Play as com.tensorik.mbt_lms in the Education category, closing the loop from enrolment through live class to certification inside a single controlled product — course discovery, enrolments, live classes, recordings, certificates, learner support and notifications all live in one app rather than a set of forwarded links.',
					'Content access is now tied to a verified, single-device enrolment instead of a shareable login; hardware and software payments settle on separate, auditable tracks; and live-class operations that used to be manual are scheduled and delivered through the app.',
					'As of 27 Oct 2026 the platform had processed 740+ paid orders across the hardware and software tracks, with hardware contributing roughly three-fifths of revenue.',
				],
			},
			{
				id: 'lessons',
				heading: 'What I would do differently',
				bullets: [
					'Scope device-transfer flows earlier — retrofitting an approval workflow onto a live enrolment model is more delicate than designing it in.',
					'Add structured analytics on playback and drop-off from the first release to inform content decisions, not just access control.',
					'Centralize notification templates sooner; per-event templates grow quickly across mobile and admin surfaces.',
					'Set resource alerts and headroom expectations before launch, so capacity signals are visible during planning rather than after launch.',
				],
			},
		],
		techStack: [
			'skill_flutter',
			'skill_dart',
			'skill_nestjs',
			'skill_nextjs',
			'skill_typescript',
			'skill_supabase',
			'skill_firebase',
			'skill_razorpay',
		],
		faqs: [
			{
				question: 'How does the app deter account sharing?',
				answer:
					'Each enrolment is bound to one active device using a device fingerprint held in secure storage, and the binding is verified on the server for every session. Moving to a new device requires an admin-approved transfer request. These controls are intended to deter account sharing; they are not a claim that sharing is impossible.',
			},
			{
				question: 'Why run two separate Razorpay payment tracks?',
				answer:
					'The institute sells hardware and software courses under different commercial rules. Separate payment tracks keep their pricing and settlement distinct, and coupons are scoped to a single track and checked on the server.',
			},
			{
				question: 'How are live classes and recordings delivered?',
				answer:
					'Live sessions are created and scheduled through Zoom OAuth in the admin console, then shown to learners in a daily schedule and deep-linked player. After a class, recordings are automatically published back into the course with chaptered playback and served through authorized URLs rather than public links.',
			},
			{
				question: 'How are coupons scoped across payment tracks?',
				answer:
					'Coupons are scoped per payment track and validated on the server before a discount is applied, helping limit cross-category misuse. Every purchase generates its own invoice, which the admin console can use for billing reconciliation.',
			},
			{
				question: 'How many people use the app?',
				answer:
					'The Google Play listing for com.tensorik.mbt_lms showed 500+ downloads, a 5.0-star rating and 123 reviews when captured on 27 Oct 2026. The download total is bucketed and may be delayed. Separately, the Play statistics chart showed 264 install events on 21 Oct 2026. As of 27 Oct 2026, the all-time admin dashboard showed 740+ paid orders across hardware and software tracks, with hardware contributing roughly three-fifths of revenue. These figures come from separate systems and do not add up to an active-user count; I do not report a unique active-learner figure.',
			},
			{
				question: 'What do the production metrics actually measure?',
				answer:
					'The Google Play listing snapshot is dated 27 Oct 2026: 500+ downloads, a 5.0-star rating and 123 reviews. A separate Play statistics chart showed 264 install events on 21 Oct 2026. Supabase API Gateway reported 1,974,492 requests, 13,937 response errors and a displayed response speed of 223.19 ms for 20–27 Oct 2026; Render reported 219,435 requests over a 7-day window. These figures come from different systems and windows, are not additive, and do not count unique active users.',
			},
			{
				question: 'When was the app inaugurated?',
				answer:
					'The app shipped to the Google Play Education category as com.tensorik.mbt_lms ahead of its inauguration at MBT Institute’s fifth-anniversary student meet-up in Vijayawada on 24 Oct 2026.',
			},
		],
	},
];

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
	caseStudies.find((study) => study.slug === slug);

export const caseStudySlugs = caseStudies.map((study) => study.slug);
