import { ProjectProps } from 'utils/developerStory';
import postmanImg from '/public/images/project/postman.png';
import portfolioImg from '/public/images/project/portfolio-logo.jpg';
import  finPulseImg from '/public/images/project/finpulse.png';
import  healwellImg from '/public/images/project/healwell.png';
import  imprintwordsImg from '/public/images/project/imprintwords.png';
import  tanjoreCoffeeImg from '/public/images/project/tanjorecoffee.png';
import  finTrackImg from '/public/images/project/fintrack.png';
export const allProjects: { [key: string]: ProjectProps } = {
	

	aiTextSummarizer: {
		fromDate: 'Nov 2024',
		toDate: 'Nov 2024',
		projectName: 'AI Text Summarizer App',
		orgName: 'Personal Project',
		imageURL: postmanImg,
		featured: true,
		description: `
An AI-powered web application that simplifies lengthy text by generating concise summaries.

![](https://private-user-images.githubusercontent.com/82256067/390232194-edab3728-ccef-4099-b0c2-d87078e57d8c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzI2NzUzNjgsIm5iZiI6MTczMjY3NTA2OCwicGF0aCI6Ii84MjI1NjA2Ny8zOTAyMzIxOTQtZWRhYjM3MjgtY2NlZi00MDk5LWIwYzItZDg3MDc4ZTU3ZDhjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTI3VDAyMzc0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc3ODM1OWQxMjVmZDFlMzYxYjAyNjhhZWVlOTBhMTU0ODAxMzVlNTVlMGQzMDBjZWFhMTI2ZjcxMDA4ZGJjMjAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ysPdIiU9agr5oAcwmaruu4TiPiliGUMU-5uiFlsR7mU)

### Features and Highlights:
- Built using **Node.js**, **Replit**, the **Hugging Face Inference API**, and **Postman**.
- Developed as part of Postman’s **Project-Based Learning module**.
- Explored advanced **API integration** to connect the application with Hugging Face's text summarization models.
- Customized the app’s functionality to improve **user experience** and usability.
- Demonstrated the efficiency of **API-driven applications** for processing and summarizing complex information.

### Tools & Technologies:
- **Postman**: Utilized to generate and test API calls during development.
- **Hugging Face Inference API**: Enabled seamless integration with pre-trained AI models for text summarization.
- **Replit**: Used as the development environment for coding and deployment.

This project showcases my skills in working with APIs and delivering user-friendly applications, making complex data accessible to a broader audience.
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
A dynamic, responsive, and visually appealing portfolio website to showcase my skills, projects, and achievements.

![](https://raw.githubusercontent.com/akshay0611/personal-portfolio/refs/heads/main/public/images/banner.png) 

### Features and Highlights:
- Fully responsive design optimized for both desktop and mobile views.  
- Sections for **Projects**, **Skills**, **Certifications**, **Experience**, and **Testimonials**.  
- Integrated **Netlify Forms** for seamless handling of contact form submissions.  
- Dynamic **SEO optimization** to enhance visibility on search engines and social platforms.  
- Hosted on **Netlify** with fast performance and effortless deployment.

### Tools & Technologies:
- **Next.js**: Used for building a fast and scalable React-based website.
- **TypeScript**: Ensured type safety and maintainability in the codebase.
- **TailwindCSS**: Provided a sleek and responsive design with minimal effort.
- **Netlify**: Managed hosting, deployment, and form submissions.
- **React Markdown**: Allowed dynamic rendering of markdown content for developer stories.

This project represents my ability to design and develop modern, user-centric websites while ensuring optimal performance and maintainability.
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
FinPulse is a MERN-stack web application delivering the latest financial news, government schemes, investment ideas, blogs, and interactive tools.

![](https://raw.githubusercontent.com/akshay0611/FinPulse/main/frontend/src/assets/Finpulsebanner.png) 

### Features and Highlights:
- Fetches real-time news, blogs, and government schemes via MongoDB Atlas.
- Includes financial calculators (SIP, SWP, EMI) and quizzes to enhance financial literacy.
- Offers courses and investment ideas tailored to users' needs.
- Responsive, user-friendly design with multi-language support via Google Translate.

### Tools & Technologies:
- **Frontend:** React, TypeScript, Tailwind CSS, Vite.
- **Backend:** Node.js, Express.
- **Database:** MongoDB Atlas.
- **Routing:** React Router.
- **API Integration:** Fetch API.

This project showcases my full-stack development expertise and commitment to building user-centric, scalable web applications.
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
ImprintWords is a user-friendly web application for creating customized text designs on visually appealing backgrounds. It's perfect for crafting social media posts, personalized messages, or inspirational posters. 💬🎨

![](https://raw.githubusercontent.com/akshay0611/ImprintWords/main/src/assets/Imprintwords.png) 

### Features and Highlights:
- **Customizable Text:** Edit text content, font style, size, color, and alignment.
- **Predefined Background Templates:** Choose from a variety of options or upload your own images.
- **Live Preview:** See real-time changes as you design.
- **Export Designs:** Download your creations in high quality for sharing or printing.

### Tools & Technologies:
- **Frontend:** React ⚛️, Tailwind CSS 🎨
- **Build Tool:** Vite ⚡
- **Hosting:** Vercel 🚀

This project demonstrates my expertise in building interactive and user-friendly web applications that prioritize creativity and customization.
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
HealWell 🏥 is a hospital management platform designed to enhance healthcare services, providing an efficient user experience for patients and staff alike. Tailored for hospitals in New Delhi, it streamlines processes such as appointment management, blog creation, and staff scheduling.

![](https://raw.githubusercontent.com/akshay0611/HealWell/main/public/images/Healwell.png) 

### Features and Highlights:
- **User-Friendly Interface:** Simplified navigation with dedicated pages for About, Careers, Doctors, Partners, Services, Testimonials, and Volunteers.
- **Admin Panel:** Manage hospital data like appointments, blogs, and doctor schedules with an intuitive admin interface.
- **Responsive Design:** Optimized for desktops, tablets, and smartphones, with a modern look powered by Tailwind CSS.
- **API Endpoints:** Easily integrate and manage core features such as appointments, blogs, partners, and volunteers.
- **Dynamic Content:** Customizable blog pages with unique styles for each post.
- **Email Integration:** Automated email notifications for appointment confirmations via Gmail’s secure OAuth2 authentication.

### Tools & Technologies:
- **Frontend & Backend Framework:** Next.js ⚛️
- **Styling:** Tailwind CSS 🌈, ShadCN 🎨
- **UI Components:** Lucide React Icons & custom UI components 🖼️
- **Backend:** Node.js 🖥️ (via Next.js API routes)
- **Database:** MongoDB 🗄️
- **Deployment:** Vercel 🚀
- **Email Service:** Gmail integration using OAuth2 📧

This project exemplifies my expertise in building full-stack applications with a focus on healthcare solutions and efficient user interfaces.
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
Tanjore Degree Coffee ☕ is a modern **e-commerce platform** that brings the authentic taste of **South Indian coffee** and snacks to customers worldwide. With a legacy dating back to 1942, this project focuses on providing a seamless browsing and ordering experience.

![](https://raw.githubusercontent.com/akshay0611/Tanjore-Degree-Coffee/main/public/images/tanjore-coffee.png)  

### Features and Highlights:
- **Menu Browsing:** Explore traditional South Indian coffee varieties and snacks. 🍵  
- **User Authentication:** Secure login for a personalized user experience. 🔒  
- **Dashboard:** View recent orders, loyalty points, saved addresses, and favorites. 📊  
- **Seamless Ordering:** Easy checkout flow for quick and hassle-free purchases. 🛒  
- **Responsive Design:** Fully optimized for both desktop and mobile users. 📱💻  
- **WhatsApp Support:** Integrated customer support via WhatsApp. 📞  
- **Email Notifications:** Order confirmations and updates via Resend email service. ✉️  

### Tools & Technologies:
- **Frontend Framework:** Next.js ⚛️  
- **Language:** TypeScript 📜  
- **Database & Authentication:** Supabase 🗄️  
- **Styling:** Tailwind CSS 🎨  
- **UI Components:** ShadCN 🧩  
- **Icons:** Lucide React 🖼️  
- **Linting & Code Quality:** ESLint ✅  
- **Deployment:** Vercel 🚀  

This project showcases my expertise in **full-stack e-commerce solutions**, focusing on performance, scalability, and modern UI/UX principles.
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
FinTrack 📊💰 is a modern and feature-rich personal finance dashboard designed to help users track and manage their financial health efficiently. Built with **Next.js, Tailwind CSS, and TypeScript**, it provides an intuitive interface for monitoring income, expenses, investments, and subscriptions in one place.

![](https://raw.githubusercontent.com/akshay0611/fintrack/main/fintrack.png)  

### Features and Highlights:
- **Dynamic Dashboard:** Get real-time insights into financial health with interactive charts and key performance metrics.
- **Income & Expense Tracking:** Easily log and categorize transactions to understand cash flow trends.
- **Investment & Subscription Monitoring:** Keep track of assets, stock holdings, and recurring bills.
- **Responsive & Modern UI:** Built with **Tailwind CSS**, ensuring a sleek, mobile-friendly experience.
- **Supabase Integration:** Secure and real-time data management for seamless finance tracking.
- **Smooth Animations:** Enhanced user experience with **Framer Motion** for intuitive transitions and interactions.

### Tools & Technologies:
- **Frontend:** Next.js ⚛️, TypeScript 📜
- **Styling:** Tailwind CSS 🎨, ShadCN 🧑‍🎨
- **Database & Backend:** Supabase 🗄️
- **Animations:** Framer Motion 🎥
- **Deployment:** Vercel 🚀

This project showcases my ability to build intuitive and scalable full-stack applications with a focus on **financial technology solutions**.
	`,
	repoUrl: 'https://github.com/akshay0611/fintrack',
	viewUrl: 'https://fintrack-9kbj.vercel.app/',
	techStack: ['skill_nextjs', 'skill_tailwindcss', 'skill_shadcn', 'skill_typescript', 'skill_supabase', 'skill_framer_motion', 'skill_vercel'],
},


};
