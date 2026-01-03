import { ProjectProps } from 'utils/developerStory';
import postmanImg from '/public/images/project/postman.png';
import portfolioImg from '/public/images/project/portfolio-logo.jpg';
import finPulseImg from '/public/images/project/finpulse.png';
import healwellImg from '/public/images/project/healwell.png';
import imprintwordsImg from '/public/images/project/imprintwords.png';
import tanjoreCoffeeImg from '/public/images/project/tanjorecoffee.png';
import finTrackImg from '/public/images/project/fintrack.png';
export const allProjects: { [key: string]: ProjectProps } = {


	aiTextSummarizer: {
		fromDate: 'Nov 2024',
		toDate: 'Nov 2024',
		projectName: 'AI Text Summarizer App',
		orgName: 'Personal Project',
		imageURL: postmanImg,
		featured: true,
		description: `
Engineered a high-performance text summarization engine by orchestrating asynchronous communication between Node.js and the Hugging Face Inference API. Designed a robust middleware layer to handle API rate limits and optimize payload processing, ensuring sub-second latency for large text blocks.

![](https://private-user-images.githubusercontent.com/82256067/390232194-edab3728-ccef-4099-b0c2-d87078e57d8c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzI2NzUzNjgsIm5iZiI6MTczMjY3NTA2OCwicGF0aCI6Ii84MjI1NjA2Ny8zOTAyMzIxOTQtZWRhYjM3MjgtY2NlZi00MDk5LWIwYzItZDg3MDc4ZTU3ZDhjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTI3VDAyMzc0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc3ODM1OWQxMjVmZDFlMzYxYjAyNjhhZWVlOTBhMTU0ODAxMzVlNTVlMGQzMDBjZWFhMTI2ZjcxMDA4ZGJjMjAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ysPdIiU9agr5oAcwmaruu4TiPiliGUMU-5uiFlsR7mU)

### Architectural Highlights:
- **API Orchestration**: Built using **Node.js** and **Postman** to manage complex inference requests.
- **Model Integration**: Implemented seamless connections to the **Hugging Face Inference API** for real-time NLP processing.
- **Performance Optimization**: Tuned request payloads to minimize latency and improve responsiveness.

This project demonstrates proficiency in **backend integration**, **API lifecycle management**, and **AI model deployment**.
        `,
		repoUrl: 'https://github.com/akshay0611/AI-Text-Summarizer',
		viewUrl: 'https://replit.com/@AkshayKumar189/AI-Text-Summarizer-App',
		techStack: ['skill_nodejs', 'skill_postmantoolusage'],
	},

	portfolioWebsite: {
		fromDate: 'Nov 2024',
		toDate: 'Nov 2024',
		projectName: 'Personal Portfolio Website',
		orgName: 'Personal Project',
		imageURL: portfolioImg,
		featured: true,
		description: `
Architected a high-performance personal brand platform using Next.js and Static Site Generation (SSG). Implemented advanced SEO strategies including dynamic metadata generation and semantic HTML structure, resulting in perfect Lighthouse performance scores.

![](https://raw.githubusercontent.com/akshay0611/personal-portfolio/refs/heads/main/public/images/banner.png) 

### Architectural Highlights:
- **Performance Engineering**: Leveraged **Next.js** SSG for sub-second page loads and optimal Core Web Vitals.
- **Type Safety**: Enforced strict **TypeScript** typing to prevent runtime errors and ensure codebase scalability.
- **Component Design**: modularized UI elements using **TailwindCSS** for maintainable, utility-first styling.
- **Infrastructure**: Automated CI/CD pipelines via **Netlify** for atomic deployments and instant cache invalidation.

This project represents a standard for **modern web architecture**, emphasizing performance, accessibility, and clean code principles.
		`,
		repoUrl: 'https://github.com/akshay0611/personal-portfolio',
		viewUrl: 'https://connectwithakshay.netlify.app',
		techStack: ['skill_nextjs', 'skill_tailwindcss', 'skill_typescript'],
	},

	finPulse: {
		fromDate: 'Dec 2024',
		toDate: 'Dec 2024',
		projectName: 'FinPulse',
		orgName: 'Personal Project',
		imageURL: finPulseImg,
		featured: true,
		description: `
Developed a centralized financial intelligence platform aggregating real-time data from disparate sources via a resilient MongoDB Atlas backend. Designed complex aggregation pipelines to deliver instant insights on government schemes and market trends.

![](https://raw.githubusercontent.com/akshay0611/FinPulse/main/frontend/src/assets/Finpulsebanner.png) 

### Architectural Highlights:
- **Data Aggregation**: Built robust pipelines in **MongoDB Atlas** to ingest and serve high-volume financial data.
- **Full-Stack Performance**: Optimized **React** and **Node.js** interaction to ensure smooth data hydration and rendering.
- **Localization**: Implemented dynamic content localization to support multi-language accessibility.
- **Interactive Logic**: Encapsulated complex financial calculations in reusable logic hooks for consistency.

This project showcases expertise in **data-intensive applications**, **backend architecture**, and **user-centric system design**.
		`,
		repoUrl: 'https://github.com/akshay0611/FinPulse',
		viewUrl: 'https://fin-pulse.vercel.app/',
		techStack: ['skill_reactjs', 'skill_typescript', 'skill_tailwindcss', 'skill_nodejs', 'skill_expressjs', 'skill_mongodb'],
	},


	imprintWords: {
		fromDate: 'Jan 2025',
		toDate: 'Jan 2025',
		projectName: 'ImprintWords',
		orgName: 'Personal Project',
		imageURL: imprintwordsImg,
		featured: true,
		description: `
Built an interactive design tool enabling real-time text visualization on the browser. Leveraged React's state management to handle complex user inputs for font rendering and layout adjustments instantaneously.

![](https://raw.githubusercontent.com/akshay0611/ImprintWords/main/src/assets/Imprintwords.png) 

### Architectural Highlights:
- **State Management**: Optimized React state updates to handle real-time canvas-style manipulation without render lag.
- **Asset Optimization**: Configured **Vite** build pipelines to serve assets efficiently, ensuring instant interactive capabilities.
- **Component Abstraction**: Created highly reusable design components to facilitate rapid template expansion.

This project demonstrates core competencies in **interactive frontend engineering** and **client-side performance optimization**.
	`,
		repoUrl: 'https://github.com/akshay0611/ImprintWords',
		viewUrl: 'https://imprint-words.vercel.app/',
		techStack: ['skill_reactjs', 'skill_tailwindcss', 'skill_vite', 'skill_vercel'],
	},

	healWell: {
		fromDate: 'Jan 2025',
		toDate: 'Jan 2025',
		projectName: 'HealWell',
		orgName: 'Personal Project',
		imageURL: healwellImg,
		featured: true,
		description: `
Designed a scalable hospital management ecosystem with a focus on data privacy and role-based access control (RBAC). Architected RESTful API routes in Next.js to decouple frontend logic from backend data services, ensuring secure handling of sensitive patient records.

![](https://raw.githubusercontent.com/akshay0611/HealWell/main/public/images/Healwell.png) 

### Architectural Highlights:
- **Role-Based Security**: Implemented secure access patterns for Admin vs. Patient data visibility.
- **API Architecture**: Developed modular **Next.js API routes** to handle appointments and volunteer management securely.
- **Integration**: Orchestrated **OAuth2** flows for secure email automation and communication.
- **Scalable Data Model**: Designed a flexible **MongoDB** schema to accommodate evolving healthcare service requirements.

This project exemplifies expertise in **secure systems architecture**, **REST API design**, and **full-stack application lifecycle**.
	`,
		repoUrl: 'https://github.com/akshay0611/HealWell',
		viewUrl: 'https://heal-well-brown.vercel.app/',
		techStack: ['skill_nextjs', 'skill_tailwindcss', 'skill_shadcn', 'skill_nodejs', 'skill_mongodb', 'skill_vercel'],
	},

	tanjoreDegreeCoffee: {
		fromDate: 'Mar 2025',
		toDate: 'Mar 2025',
		projectName: 'Tanjore Degree Coffee',
		orgName: 'Personal Project',
		imageURL: tanjoreCoffeeImg,
		featured: true,
		description: `
Architected a full-stack e-commerce solution with a focus on transactional integrity and session management using Supabase. Implemented row-level security (RLS) policies to protect user data and designed a normalized database schema to handle order history and inventory tracking efficiently.

![](https://raw.githubusercontent.com/akshay0611/Tanjore-Degree-Coffee/main/public/images/tanjore-coffee.png)  

### Architectural Highlights:
- **Database Security**: Enforced **Supabase RLS policies** to isolate user data and ensure privacy compliance.
- **Transactional Logic**: Designed robust order processing flows ensuring data consistency across inventory and sales.
- **Frontend-Backend Sync**: Utilized **Next.js** for seamless server-side rendering of product catalogs.
- **Modern Styling Architecture**: Implemented **ShadCN** with **Tailwind** for a standardized, accessible design system.

This project showcases expertise in **secure e-commerce architecture**, **database normalization**, and **reliable state management**.
	`,
		repoUrl: 'https://github.com/akshay0611/tanjore-degree-coffee',
		viewUrl: 'https://tanjore-degree-coffee.vercel.app/',
		techStack: ['skill_nextjs', 'skill_typescript', 'skill_supabase', 'skill_tailwindcss', 'skill_shadcn', 'skill_vercel'],
	},

	finTrack: {
		fromDate: 'Mar 2025',
		toDate: 'Mar 2025',
		projectName: 'FinTrack',
		orgName: 'Personal Project',
		imageURL: finTrackImg,
		featured: true,
		description: `
Engineered a comprehensive financial analytics dashboard featuring real-time data visualization. Utilized Supabase for secure, real-time state synchronization across devices. Implemented optimized re-rendering strategies in React to handle large datasets within interactive charts without UI lag.

![](https://raw.githubusercontent.com/akshay0611/fintrack/main/fintrack.png)  

### Architectural Highlights:
- **Real-Time Sync**: Levarging **Supabase** subscriptions for instant data propagation across client sessions.
- **Visualization Performance**: Integrated **Framer Motion** and optimized charting libraries for fluid, 60fps data interactions.
- **Scalable Component Pattern**: Built a library of decoupled UI components in **Next.js** to accelerate feature development.
- **Data Integrity**: Enforced strict validation rules at the database level to ensure reliable financial calculations.

This project showcases ability to build **high-fidelity analytics dashboards**, handling **complex state** and **real-time data streams** effectively.
	`,
		repoUrl: 'https://github.com/akshay0611/fintrack',
		viewUrl: 'https://fintrack-9kbj.vercel.app/',
		techStack: ['skill_nextjs', 'skill_tailwindcss', 'skill_shadcn', 'skill_typescript', 'skill_supabase', 'skill_framer_motion', 'skill_vercel'],
	},


};
