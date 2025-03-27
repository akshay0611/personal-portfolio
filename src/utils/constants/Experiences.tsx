import { ExperienceProps } from 'utils/developerStory';
import prodigyinfotechImg from '/public/images/experience/prodigyinfotech.jpeg';
import octanetImg from '/public/images/experience/octanet.jpeg';
import shadowfoxImg from '/public/images/experience/shadowfox.png';

export const allExperiences: { [key: string]: ExperienceProps } = {
	octanet: {
		fromDate: 'Dec 2024',
		toDate: 'Jan 2025',
		positionHeld: 'Web Development Intern',
		orgName: 'Techoctanet Services Pvt Ltd',
		orgLocation: 'Remote (Work From Home)',
		url: 'https://octanet.in/',
		imageURL: octanetImg,
		description: `
My internship with Techoctanet Services Pvt Ltd was a comprehensive program focusing on Web Development. This experience provided me with the opportunity to gain hands-on training and practical exposure to development projects.

- Learned and applied foundational concepts of web development during a structured training program guided by industry experts.
- Developed and enhanced web applications, focusing on responsive design and optimized performance.
- Worked on real-world projects, implementing key development techniques to deliver scalable and user-friendly solutions.
- Collaborated remotely with a team, honing my skills in effective communication and project management in a virtual environment.
- Enhanced my understanding of web technologies, preparing me for future challenges in the field of development.

This internship reinforced my expertise in web development and provided a valuable platform for applying theoretical knowledge to practical scenarios.


`,
		featured: true,
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
My first internship was with Prodigy InfoTech, where I gained valuable experience in Data Science and Machine Learning. This opportunity provided me with hands-on exposure to real-world datasets and cutting-edge technologies.

- **Exploratory Data Analysis (EDA):** Conducted detailed EDA to identify patterns, trends, and insights from structured and unstructured datasets.
- **Data Preprocessing:** Cleaned, transformed, and prepared data pipelines to ensure high-quality input for machine learning models.
- **Data Visualization:** Created intuitive and insightful visualizations using tools like Matplotlib, Seaborn, and Tableau to present findings effectively to stakeholders.
- **BI Tools:** Worked with Business Intelligence tools to develop interactive dashboards, enabling data-driven decision-making.
- **Collaboration:** Partnered with team members to document processes and enhance data science workflows, contributing to the organization's AI/ML initiatives.

This internship strengthened my foundation in data science techniques and equipped me with practical skills essential for developing scalable and impactful data-driven solutions.


`,
		featured: true,
	},

	shadowFox: {
		fromDate: 'Feb 2025',
		toDate: 'Feb 2025',
		positionHeld: 'Web Development Intern',
		orgName: 'ShadowFox',
		orgLocation: 'Remote (Work From Home)',
		url: 'https://www.shadowfox.in/', 
		imageURL: shadowfoxImg,  
		description: `
During my internship at ShadowFox, I worked on multiple web development projects that enhanced my technical proficiency in front-end and full-stack development.

- **Personal Portfolio Development:** Built a fully responsive and visually appealing portfolio website, showcasing my skills, projects, and experiences.
- **Team-based Web Application:** Developed an interactive website with dynamic components, ensuring smooth navigation and user engagement.
- **Tech Stack Utilization:** Worked with **Next.js, Tailwind CSS, ShadCN**, and modern web technologies to build optimized and scalable applications.
- **Performance Optimization:** Implemented **Server-Side Rendering (SSR)** and **Incremental Static Regeneration (ISR)** to enhance performance and improve load times.
- **User Experience Enhancement:** Focused on creating **modern UI/UX** designs with **smooth animations, structured layouts, and intuitive interactions**.
- **Collaboration & Code Review:** Engaged in team discussions, code reviews, and followed best practices to maintain clean and maintainable code.

This internship allowed me to strengthen my web development skills, gain hands-on experience with **Next.js**, and understand the best practices for building scalable and high-performance web applications.
`,
		featured: true,
	},

};
