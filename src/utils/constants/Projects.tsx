import { ProjectProps } from 'utils/developerStory';
import postmanImg from '/public/images/project/postman.png';
import portfolioImg from '/public/images/project/portfolio-logo.jpg';
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
	
};
