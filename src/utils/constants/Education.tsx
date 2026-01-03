import { EducationProps } from 'utils/developerStory';
import asianImg from '../../../public/images/education/asian-logo.png';
import dpsrkpImg from '../../../public/images/education/dpsrkp-logo.jpeg';
import vitImg from '../../../public/images/education/vit-logo.jpeg';
import selftaughtImg from '../../../public/images/education/selftaught.jpg';

export const allEducation: { [key: string]: EducationProps } = {
	asianSchool: {
		fromDate: '2006',
		toDate: '2018',
		orgName: "Asian School",
		orgLocation: 'Muzaffarpur, India',
		imageURL: asianImg,
		url: 'https://asianschool.in/',
		description: `
I completed my primary and secondary education at Asian School, Muzaffarpur, until the 10th standard.

### Key Highlights:
- Developed a strong academic foundation in subjects such as Mathematics, Science, and Computer Science.
- Actively participated in extracurricular activities that contributed to my overall development.
<br> 
During this time, I developed a keen interest in technology, particularly in software development and problem-solving. This passion led me to pursue further studies in the field of Information Technology.
`,
	},
	holyfaith: {
		fromDate: '2018',
		toDate: '2020',
		orgName: 'Holy Faith Senior Secondary School',
		orgLocation: 'Muzaffarpur, India',

		url: '',
		description: `
I completed my Intermediate education (11th and 12th grades) at Holy Faith Senior Secondary School, Muzaffarpur. During this time, I gained a strong foundation in subjects crucial for further academic and professional pursuits.
		
### Key Highlights:
- Focused on **Science** stream with subjects such as Physics, Chemistry and Computer Science.
- Developed critical thinking and problem-solving skills through hands-on projects and academic challenges.
- Actively participated in extracurricular activities, including events and competitions, which helped me develop leadership and teamwork skills.
		
This period also sparked my interest in technology and programming, motivating me to explore software development and related fields further.
			`,
	},


	selfTaught: {
		fromDate: '2020',
		toDate: 'Present',
		orgName: 'Self-Taught Developer',
		orgLocation: 'Remote / Self-paced',
		imageURL: selftaughtImg,
		url: '',
		description: `
I am a developer passionate about technology, programming, and solving real-world problems. My journey began in 2020 when I took the initiative to independently explore and learn various fields of Information Technology, building a strong foundation through hands-on projects and continuous learning.

### Technical Competencies
- Completed multiple online courses, including certifications in **Web Development**, **Machine Learning**, and **API Integration**.
- Developed technical expertise in **Data Structures**, **Algorithms**, and **Software Development** through practical applications.
		
### Core Engineering Foundations
- Data Structures and Algorithms
- Object-Oriented Programming
- Database Management Systems
- Web Development (MERN Stack)
- Information Security and Network Management
- Software Testing and Quality Assurance
- Statistics and Probability
- Operating Systems
- Human-Computer Interaction
		
### Achievements
- Built projects like the **AI Text Summarizer App**, showcasing advanced API integration and user-focused design.
- Earned certifications from **IBM**, **Postman**, and **Google**, solidifying my technical expertise.
- Contributed to open-source projects and collaborated with developer communities globally.
		
I continue to expand my skillset through self-paced learning, project-based experiences, and active participation in tech communities, demonstrating a commitment to lifelong learning and innovation.
`,
	},
};
