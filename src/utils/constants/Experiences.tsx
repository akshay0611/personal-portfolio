import { ExperienceProps } from 'utils/developerStory';
import prodigyinfotechImg from '../../../public/images/experience/prodigyinfotech.jpeg';
import octanetImg from '../../../public/images/experience/octanet.jpeg';
import shadowfoxImg from '../../../public/images/experience/shadowfox.png';
import aicteImg from '../../../public/images/experience/aicte.png';
import cliniqImg from '../../../public/images/experience/cliniq.png';
import gssocImg from '../../../public/images/experience/gssoc.png';
import codeuniaImg from '../../../public/images/experience/codeunia.png';
import openSourceConnectImg from '../../../public/images/experience/opensourceconnect.jpeg';
import edulinkupImg from '../../../public/images/experience/edulinkup.png';
import apertreImg from '../../../public/images/experience/apertre.webp';

import altqImg from '../../../public/images/experience/altqlogo.png';

export const allExperiences: { [key: string]: ExperienceProps } = {
	altq: {
		fromDate: 'Sept 2025',
		toDate: 'Jan 2026',
		positionHeld: 'Chief Technology Officer',
		orgName: 'AltQ',
		orgLocation: 'Remote',
		imageURL: altqImg,
		ctaLabel: 'View project',
		description: `
- **Technical Strategy**: Built and led the complete technical foundation from 0 to production in 5 months, delivering a scalable booking and queue management platform.
- **Product Delivery**: Shipped **15+ production features** within 5 months, maintaining a structured release cycle aligned with business goals.
- **Reliability & Uptime**: Maintained **99.5% platform uptime** across the booking and queue management system, ensuring reliability for salon operators.
`,
		featured: true,
	},
	openSourceConnect: {
		fromDate: 'Jan 2026',
		toDate: 'April 2026',
		positionHeld: 'State Lead – Bihar',
		orgName: 'Open Source Connect',
		orgLocation: 'Remote',
		url: 'https://www.osconnect.org/',
		imageURL: openSourceConnectImg,
		ctaLabel: 'View community',
		description: `
- **Community Growth**: Onboarded 100+ developers and contributors to the Bihar open-source ecosystem, expanding regional participation in the global Open Source Connect network.
- **Regional Advocacy**: Championing open-source culture across Bihar by connecting developers to real-world contribution opportunities and long-term career pathways.
`,
		featured: true,
	},

	apertreRiveto: {
		fromDate: 'Feb 2026',
		toDate: 'Present',
		positionHeld: 'Mentor, Apertre 3.0',
		orgName: 'Apertre 3.0 — Resourcio',
		orgLocation: 'Open Source Program',
		imageURL: apertreImg,
		url: 'https://github.com/Nsanjayboruds/RIVETO',
		ctaLabel: 'View repository',
		description: `
Selected as a mentor for an open-source project under Resourcio's Apertre 3.0 program (project: Riveto).
- **Mentorship & Guidance**: Guiding contributors on architecture, code quality, and best practices.
- **Review & Planning**: Reviewing pull requests and helping scope/plan features for Riveto.
`,
		featured: false,
	},

	edulinkup: {
		fromDate: 'Nov 2025',
		toDate: 'Present',
		positionHeld: 'Lead Developer',
		orgName: 'EduLinkUp',
		orgLocation: 'Remote',
		url: 'https://edulinkup.dev',
		imageURL: edulinkupImg,
		ctaLabel: 'Visit platform',
		description: `
- **Technical Ownership**: Architected and built the full platform on Next.js and Google Cloud, serving **2,700+ monthly active users** across **100+ countries**.
- **Performance at Scale**: Scaled the platform to handle **300+ new signups** in a single month while maintaining production-grade reliability.
- **Operations & Mentorship**: Built an internship selection system processing **150+ applications** with a **76% acceptance rate**, onboarding **100+ interns**.
- **System Governance**: Leading deployment and release workflows via Google Cloud Run with auto-scaling infrastructure handling consistent global traffic.
`,
		featured: true,
	},

	codeunia: {
		fromDate: 'May 2025',
		toDate: 'Present',
		positionHeld: 'Web Development Lead',
		orgName: 'Codeunia',
		orgLocation: 'Community-led',
		imageURL: codeuniaImg,
		url: 'https://codeunia.com',
		ctaLabel: 'View community',
		description: `
- **Engineering Leadership**: Architected and maintained community platforms serving **3,000+ active developers** globally with **5,000+ monthly visitors** and **64k+ monthly requests**.
- **Team Mentorship**: Led and mentored **29 interns**, each delivering a production-ready project, resulting in **29 projects shipped** under technical guidance.
- **Community Impact**: Hosted **10+ events** with a **95% success rate**, managing **590MB+ monthly bandwidth** via Cloudflare.
`,
		featured: true,
	},


	gssoc: {
		fromDate: 'July 2025',
		toDate: 'Oct 2025',
		positionHeld: 'Ranked #2 among 3,424 contributors (GSSoC 2025)',
		orgName: 'GirlScript Summer of Code (GSSoC)',
		orgLocation: 'Open Source Program',
		url: 'https://gssoc.girlscript.tech/',
		imageURL: gssocImg,
		ctaLabel: 'View impact',
		description: `
- **Top 0.06% Performance**: Ranked #2 out of 3,424 global contributors.
- **High-Velocity Delivery**: Merged 238 Pull Requests across diverse tech stacks.
- **Technical Impact**: Earned 2,014 points through complex bug fixes and feature implementations.
`,
		featured: true,
	},

	cliniq: {
		fromDate: 'Oct 2025',
		toDate: 'Oct 2025',
		positionHeld: 'Led and maintained an open-source healthcare platform (Hacktoberfest)',
		orgName: 'ClinIQ - Hacktoberfest 2025',
		orgLocation: 'Open Source Project',
		url: 'https://github.com/akshay0611/ClinIQ',
		imageURL: cliniqImg,
		ctaLabel: 'See contributions',
		description: `
- **Repository Stewardship**: Led the end-to-end lifecycle of a healthcare management platform.
- **Code Governance**: Conducted thorough reviews and CI/CD validation for all global contributions.
`,
		featured: true,
	},

	octanet: {
		fromDate: 'Dec 2024',
		toDate: 'Jan 2025',
		positionHeld: 'Web Development Intern',
		orgName: 'Techoctanet Services Pvt Ltd',
		orgLocation: 'Remote (Work From Home)',
		url: 'https://octanet.in/',
		imageURL: octanetImg,
		description: `
- **End-to-End Delivery**: Built and deployed web applications from scratch, focusing on responsive design and cross-browser compatibility.
- **Performance Optimization**: Implemented code-splitting and lazy loading strategies to improve initial load times.
- **Production Deployment**: Delivered scalable, user-friendly solutions ready for real-world usage.
`,
		featured: false,
	},


	prodigyInfoTech: {
		fromDate: 'Nov 2024',
		toDate: 'Dec 2024',
		positionHeld: 'Machine Learning Intern',
		orgName: 'Prodigy InfoTech',
		orgLocation: 'Remote (Work From Home)',
		url: 'https://prodigyinfotech.dev/',
		imageURL: prodigyinfotechImg,
		description: `
- **Data Pipeline Development**: Designed and implemented preprocessing pipelines to transform raw datasets into ML-ready formats.
- **Visualization Dashboards**: Created stakeholder-facing dashboards using Matplotlib, Seaborn, and Tableau for data-driven decision making.
- **Model Integration**: Prepared data workflows supporting production ML model deployment and inference.
`,
		featured: false,
	},

	shadowFox: {
		fromDate: 'Feb 2025',
		toDate: 'March 2025',
		positionHeld: 'Web Development Intern',
		orgName: 'ShadowFox',
		orgLocation: 'Remote (Work From Home)',
		url: 'https://www.shadowfox.in/',
		imageURL: shadowfoxImg,
		description: `
- **Next.js Architecture**: Implemented SSR and ISR patterns for optimal performance and SEO.
- **Performance Engineering**: Optimized Core Web Vitals through code-splitting, lazy loading, and image optimization.
- **Code Quality**: Established review practices and maintained clean, documented codebases across projects.
`,
		featured: false,
	},

	cyberSecurityIntern: {
		fromDate: 'Jan 2025',
		toDate: 'Feb 2025',
		positionHeld: 'Built security-focused systems under IBM SkillsBuild',
		orgName: 'AICTE & IBM SkillsBuild',
		orgLocation: 'Remote (Work From Home)',
		url: 'https://skillsbuild.org/',
		imageURL: aicteImg,
		ctaLabel: 'Read details',
		description: `
- **Secure Architecture**: Designed and implemented data security and secure communication principles.
- **Risk Mitigation**: Conducted risk assessments and ethical hacking simulations across IBM modules.
`,
		featured: true,
	},

};
