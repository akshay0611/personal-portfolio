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

export const allExperiences: { [key: string]: ExperienceProps } = {
	openSourceConnect: {
		fromDate: 'Jan 2026',
		toDate: 'Present',
		positionHeld: 'State Lead – Bihar',
		orgName: 'Open Source Connect',
		orgLocation: 'Remote',
		url: 'https://www.osconnect.org/',
		imageURL: openSourceConnectImg,
		ctaLabel: 'View community',
		description: `
Spearheading open-source initiatives and community growth across Bihar as a regional leader.
- **Ecosystem Development**: Cultivating a thriving local open-source ecosystem by nurturing developer communities and fostering collaboration.
- **Strategic Coordination**: Bridging the gap between regional contributors and the global Open Source Connect network to drive impactful participation.
- **Community Advocacy**: Promoting open-source adoption and knowledge sharing through mentorship, events, and strategic partnerships.
`,
		featured: true,
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
Architecting and scaling the core EduLinkUp platform capabilities with a focus on reliability, performance, and real-world user workflows.
- **Technical Ownership**: Owning the technical roadmap for high-impact features, translating user requirements into scalable, production-ready systems.
- **Architectural Stewardship**: Driving code quality through standardized development workflows, rigorous code reviews, and performance-first design principles.
- **System Governance**: Leading deployment and release workflows for production-grade systems, with emphasis on security, SEO visibility, and platform credibility.
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
Leading web engineering initiatives at Codeunia with a focus on scalable architecture, code quality, and real-world delivery.
- **Engineering Leadership**: Architecting and maintaining production-ready web platforms using the MERN stack and Next.js.
- **Team Enablement**: Mentoring developers and interns, setting coding standards, and enforcing best practices through structured code reviews.
- **Delivery Execution**: Translating product and business requirements into clean, scalable technical solutions while ensuring performance, security, and long-term maintainability.
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
Open-source contributor working across multiple production repositories.
- **Top 0.06% Perfomance**: Ranked #2 out of 3,424 global contributors.
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
Project Administrator managing a distributed team of developers.
- **Repository Stewardship**: Led the end-to-end lifecycle of a healthcare management platform.
- **Code Governance**: Conducted thorough reviews and CI/CD validation for all global contributions.
- **Community Mentorship**: Guided contributors through documentation and constructive feedback loops.
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
Delivered responsive web applications with optimized performance during an intensive development program.

- **End-to-End Delivery**: Built and deployed web applications from scratch, focusing on responsive design and cross-browser compatibility.
- **Performance Optimization**: Implemented code-splitting and lazy loading strategies to improve initial load times.
- **Remote Collaboration**: Coordinated with distributed team members through async communication and structured code reviews.
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
Built data pipelines and machine learning workflows for real-world inference applications.

- **Data Pipeline Development**: Designed and implemented preprocessing pipelines to transform raw datasets into ML-ready formats.
- **Exploratory Analysis**: Conducted comprehensive EDA to identify patterns, trends, and anomalies across structured and unstructured data.
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
Architected and delivered full-stack web applications using modern frameworks and performance-first design principles.

- **Next.js Architecture**: Implemented SSR and ISR patterns for optimal performance and SEO.
- **Component Library Integration**: Built UI systems with ShadCN and Tailwind CSS for consistent, scalable design.
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
Cybersecurity intern focusing on secure digital systems and threat mitigation.
- **Secure Architecture**: Designed and implemented data security and secure communication principles.
- **Risk Mitigation**: Conducted risk assessments and ethical hacking simulations across IBM modules.
- **Industry Validation**: Recognized for project implementation by IBM SkillsBuild and AICTE.
`,
		featured: true,
	},

};
