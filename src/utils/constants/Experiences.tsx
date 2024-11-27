import { ExperienceProps } from 'utils/developerStory';
import prodigyinfotechImg from '/public/images/experience/prodigyinfotech.jpeg';
import octanetImg from '/public/images/experience/octanet.jpeg';

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
};
