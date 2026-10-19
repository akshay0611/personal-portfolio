export interface CaseStudyMetric {
	label: string;
	value: string;
}

export interface CaseStudySection {
	id: string;
	heading: string;
	body?: string[];
	bullets?: string[];
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
	role: string;
	timeline: string;
	industry: string;
	logo: string;
	logoFit?: 'cover' | 'contain';
	liveUrl?: string;
	metaTitle: string;
	metaDescription: string;
	keywords: string[];
	tldr: string;
	metrics: CaseStudyMetric[];
	sections: CaseStudySection[];
	techStack: string[];
	faqs: CaseStudyFaq[];
}

export const caseStudies: CaseStudy[] = [
	{
		slug: 'edulinkup-learning-platform',
		projectName: 'EduLinkUp — Learning & Developer Ecosystem Platform',
		org: 'EduLinkUp',
		tagline:
			'Architecting a single Next.js platform that carries learners from their first course to their first job.',
		role: 'Lead Developer',
		timeline: 'Nov 2025 – Present',
		industry: 'EdTech · Developer Tools',
		logo: '/images/project/edulinkup.png',
		logoFit: 'contain',
		liveUrl: 'https://edulinkup.dev',
		metaTitle: 'EduLinkUp Case Study: Scaling an EdTech Platform to 2,700+ MAU',
		metaDescription:
			'How I architected EduLinkUp — a Next.js, Supabase and Google Cloud platform serving 2,700+ monthly active users across 100+ countries — spanning courses, coding labs, internships and an app store.',
		keywords: [
			'edtech platform case study',
			'Next.js Supabase edtech platform',
			'scaling an edtech platform',
			'supabase row level security education',
			'online coding judge platform',
			'verifiable course certificates',
		],
		tldr:
			'EduLinkUp had courses but no path after them. I designed and led the rebuild into one Next.js platform that unifies structured learning, in-browser coding practice, open-source programs, internships and a community app store — now serving 2,700+ monthly active users across 100+ countries with 300+ new signups a month.',
		metrics: [
			{ value: '2,700+', label: 'Monthly active users' },
			{ value: '100+', label: 'Countries served' },
			{ value: '300+', label: 'Signups per month' },
			{ value: '100+', label: 'Interns onboarded' },
		],
		sections: [
			{
				id: 'problem',
				heading: 'The problem',
				body: [
					'Learners on EduLinkUp could finish a course, but the platform offered little momentum after the last lesson. Practice, open-source contribution, career applications and community tooling all lived in different places — or nowhere at all. The result was a leaky funnel: strong course completion, weak retention, and no reason to return once a certificate was downloaded.',
					'The platform also had to answer a harder product question: what does a learner actually need between "I finished a course" and "I got hired"? We answered that with placement, practice and proof-of-work — and then built the systems to back it up.',
				],
			},
			{
				id: 'constraints',
				heading: 'Constraints that shaped the design',
				bullets: [
					'One lead architect (me) and a small contributor base — every architectural choice had to be maintainable by a rotating team.',
					'A live product with existing users, so no big-bang rewrite was acceptable.',
					'Untrusted code would run on the platform, which rules out naive server-side execution.',
					'Infrastructure spend had to stay predictable while traffic grew unevenly around launches.',
					'Every certificate and premium entitlement had to be independently verifiable and abuse-resistant.',
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
			},
			{
				id: 'hard-parts',
				heading: 'The hard parts',
				body: [
					'Running student code was the highest-risk surface. The judging layer treats every submission as hostile: execution happens in isolated sandboxes, resource use is bounded, and the editor is a front-end convenience rather than a trusted boundary. That separation is what made a public coding judge safe to ship.',
					'Access control came second. Premium content, internships and admin tooling all need different rules, and enforcing them client-side would have been a permanent leak. Pushing authorization into Row Level Security meant the same rules apply whether a request arrives through the web app, an API route or an admin action.',
					'Certificates need to survive scrutiny, so each one is generated as a verifiable artifact with QR-based validation rather than a static image — a hiring manager can confirm it against the database instead of trusting a screenshot.',
				],
			},
			{
				id: 'shipped',
				heading: 'What shipped',
				bullets: [
					'Learning platform: chapter-based courses, progress tracking, test series, assessments and verifiable certificates with QR validation.',
					'ELUCode and Labs: an in-browser coding environment with submission judging, alongside hands-on Linux and Python labs.',
					'Developer App Store: community-driven discovery of tools, AI assistants, games and open-source projects, with bookmarks and store analytics.',
					'ELUSOC: an open-source contribution program with leaderboards, partner tiers, badges, bonus points and certificates.',
					'Careers and recruitment: internship and job listings, application workflows, offer-letter generation and role-based administration.',
					'Payments and entitlements: Razorpay-powered subscriptions, premium access controls and referral rewards with rate limiting and auditability.',
					'Community and content: blogs, events, a campus ambassador program, newsletters and DSA practice.',
				],
			},
			{
				id: 'results',
				heading: 'Results',
				body: [
					'EduLinkUp evolved from a course catalogue into a developer ecosystem. It now supports 2,700+ monthly active users across 100+ countries, absorbs 300+ new signups per month, and powers a hiring pipeline that has onboarded 100+ interns — with an internship acceptance rate of roughly 76% across 150+ applications.',
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
			'A production LMS built to protect paid content while serving live classes, recordings and certificates on Android.',
		role: 'Full Stack Developer',
		timeline: 'Jul 2026 – Oct 2026',
		industry: 'EdTech · Mobile',
		logo: '/images/project/mbt.png',
		logoFit: 'cover',
		liveUrl: 'https://play.google.com/store/apps/details?id=com.tensorik.mbt_lms',
		metaTitle: 'MBT Learning Case Study: A Piracy-Protected LMS for a Training Institute',
		metaDescription:
			'How I built a production LMS for MBT Institute — single-device content protection, dual Razorpay payment tracks, live Zoom classes and auto-published recordings — shipped to Google Play with Flutter, NestJS and Supabase.',
		keywords: [
			'prevent course piracy LMS',
			'Flutter LMS app case study',
			'NestJS LMS backend',
			'device binding content protection',
			'dual payment gateway edtech',
			'Supabase LMS platform',
		],
		tldr:
			'MBT Institute sold courses through ad-hoc channels and lost revenue to account sharing and manual payment handling. I built a production LMS — a Flutter learner app, a NestJS API and a Next.js admin console on Supabase — that locks each enrolment to a single active device, splits payments into hardware and software tracks, and delivers live classes and auto-published recordings. Shipped to Google Play as com.tensorik.mbt_lms.',
		metrics: [
			{ value: 'Google Play', label: 'Shipped (Education)' },
			{ value: '1 device', label: 'Active per learner' },
			{ value: '2 tracks', label: 'Payment models' },
			{ value: '100%', label: 'Server-validated coupons' },
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
					'Backend: a modular NestJS API with clear domains for auth, courses, enrollments, payments, coupons, devices, certificates, notifications, search and support, using Redis and BullMQ for background jobs and DTO validation on every input.',
					'Data: Supabase PostgreSQL with Row Level Security and RPC functions modelling profiles, devices and transfer requests, courses, sections and lessons, carts, enrollments, payments, coupons, invoices, sessions, recordings, wishlists, notifications and support tickets.',
					'Media: a signed-upload asset pipeline on Cloudinary and object storage, so recordings and resources are served through authorized URLs rather than public links.',
					'Admin: a Next.js console for course, syllabus and renewal-plan management, live-class scheduling, billing reconciliation, device approvals, support triage and role-based access with Zod validation.',
				],
			},
			{
				id: 'protection',
				heading: 'Piracy-resistant delivery',
				body: [
					'Content protection was the reason this project existed, so it drove the data model instead of being bolted on. Each enrolment is bound to a single active device using a device fingerprint stored in secure storage, and that binding is verified server-side on every session.',
				],
				bullets: [
					'One active device per learner: signing in on a new phone does not silently grant a second stream of access.',
					'Controlled transfers: moving to a new device requires an admin-approved transfer request, which keeps legitimate upgrades possible without opening the door to sharing.',
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
					'Server-validated coupons: discount codes are scoped per track and verified on the server, which blocks cross-category coupon exploits where a code meant for one track is applied to another.',
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
				id: 'results',
				heading: 'Results',
				body: [
					'The platform shipped to Google Play as com.tensorik.mbt_lms in the Education category, closing the loop from enrolment through live class to certification inside a single controlled product.',
					'Content access is now tied to a verified, single-device enrolment instead of a shareable login; hardware and software payments settle on separate, auditable tracks; and live-class operations that used to be manual are scheduled and delivered through the app.',
				],
			},
			{
				id: 'lessons',
				heading: 'What I would do differently',
				bullets: [
					'Scope device-transfer flows earlier — retrofitting an approval workflow onto a live enrolment model is more delicate than designing it in.',
					'Add structured analytics on playback and drop-off from the first release to inform content decisions, not just access control.',
					'Centralize notification templates sooner; per-event templates grow quickly across mobile and admin surfaces.',
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
				question: 'How do you prevent students from sharing accounts?',
				answer:
					'Each enrolment is bound to a single active device using a device fingerprint held in secure storage, and that binding is verified on the server for every session. Moving to a new device requires an admin-approved transfer request, which keeps legitimate upgrades possible without allowing account sharing.',
			},
			{
				question: 'Why run two separate Razorpay payment tracks?',
				answer:
					'The institute sells hardware and software courses under different commercial rules. Running them through distinct payment configuration keeps pricing and settlement separate and lets coupons be scoped to a single track, which prevents discount codes from being applied across categories.',
			},
			{
				question: 'How are live classes and recordings delivered?',
				answer:
					'Live sessions are created and scheduled through Zoom OAuth in the admin console, then shown to learners in a daily schedule and deep-linked player. After a class, recordings are automatically published back into the course with chaptered playback and served through authorized URLs rather than public links.',
			},
			{
				question: 'How do you stop coupon abuse and cross-category exploits?',
				answer:
					'Coupons are scoped per payment track and validated entirely on the server before any discount is applied, so a code issued for one track cannot be reused on another. Every purchase also generates its own invoice, which makes reconciliation and abuse detection straightforward.',
			},
		],
	},
];

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
	caseStudies.find((study) => study.slug === slug);

export const caseStudySlugs = caseStudies.map((study) => study.slug);
