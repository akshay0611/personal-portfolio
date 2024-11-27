import { CertificateProps } from 'utils/developerStory';
import googleImg from '/public/images/certificates/google.png';
import microsoftImg from '/public/images/certificates/Microsoft.png';
import hackerrankImg from '/public/images/certificates/hackerrank.png';
import ibmImg from '/public/images/certificates/ibm.png';
import postmanImg from '/public/images/certificates/postman.png';
import goldmansachsImg from '/public/images/certificates/Goldmansachs.png';


export const allCertificates: { [key: string]: CertificateProps } = {
	digitalMarketingFundamentalsCert: {
		fromDate: 'May 2020',
		toDate: 'May 2020',
		title: 'The fundamentals of Digital Marketing',
		url: '',
		imageURL: googleImg,
		description: `
![](https://raw.githubusercontent.com/akshay0611/My-Certificates/refs/heads/main/Google-Digital%20Marketing.jpg)

Before embarking on my journey as a developer, I laid the foundation for my technical and strategic skills by completing Google's *Fundamentals of Digital Marketing* certification. This course served as my first step into the digital world, providing a strong base of knowledge in essential marketing principles.

During the program, I explored key aspects of digital marketing, including:

- **Search Engine Optimization (SEO):** Understanding the basics of making web pages more discoverable through search engines.  
- **Social Media Marketing:** Learning how to create engaging campaigns to connect with audiences across social platforms.  
- **Content Marketing:** Developing skills to craft meaningful and impactful content for online visibility.  
- **Email Marketing:** Discovering how to use email campaigns to nurture relationships with potential customers.  
- **Web Analytics:** Gaining insight into user behavior and how to improve online strategies through data.

This certification helped me understand the broader context in which websites and applications operate, emphasizing how digital presence and marketing influence user engagement and business outcomes. 

Although this course marked the very beginning of my professional journey, the knowledge I gained continues to inform my approach to creating impactful digital solutions. It laid the groundwork for my transition into web development and provided a strategic perspective that complements my technical expertise.
		`,
		skills: ['skill_seo', 'skill_smm', 'skill_contentmarketing', 'skill_emailmarketing', 'skill_webanalytics'],
		orgName: 'Google',
	},
	microsoftAdvertisingCert: {
		fromDate: 'Oct 2020',
		toDate: 'Oct 2020',
		title: 'Microsoft Advertising Certified Professional',
		url: '',
		imageURL: microsoftImg,
		description: `
![](https://raw.githubusercontent.com/akshay0611/My-Certificates/refs/heads/main/Microsoft-Advertising%20Certified%20Professional.jpg)

Earning the **Microsoft Advertising Certified Professional** credential marked a significant milestone in my understanding of online advertising and marketing strategies. This certification provided in-depth knowledge of the Microsoft Advertising platform and advanced concepts in digital marketing.

Through this program, I gained expertise in the following areas:
- **Campaign Optimization:** Leveraging data-driven insights to create effective ad campaigns that maximize ROI.
- **Targeting Strategies:** Utilizing advanced audience segmentation tools to connect with the right users at the right time.
- **Search Advertising:** Learning how to create compelling ads and manage bids to drive traffic and conversions.
- **Performance Analysis:** Interpreting key performance metrics to fine-tune campaigns and improve results over time.

This certification deepened my ability to integrate advertising strategies with web development, allowing me to create websites and applications that are optimized for both user engagement and marketing success.

It was an essential step in complementing my technical skillset with a business-oriented perspective, helping me better understand how technology and marketing converge to create impactful digital experiences.
`,
        skills: ['skill_searchadvertising', 'skill_campaignoptimization', 'skill_performanceanalysis', 'skill_targetingstrategies'],
		orgName: 'Microsoft',
	},
	sqlBasicCert: {
		fromDate: 'Oct 2024',
		toDate: 'Oct 2024',
		title: 'SQL Basic',
		url: 'https://www.hackerrank.com/certificates/ca327376b925',
		imageURL: hackerrankImg,
		description: `
![](https://raw.githubusercontent.com/akshay0611/My-Certificates/refs/heads/main/Hacker%20Rank-%20SQL%20Basic%20.jpg)

The **SQL Basic** certification from HackerRank solidified my understanding of essential SQL concepts and query-writing skills. This certification validated my ability to work with relational databases and extract meaningful insights from structured data.

### Key Learning Objectives:
- **Data Retrieval:** Writing queries to retrieve specific information from databases using SELECT statements, filtering with WHERE, and sorting with ORDER BY.
- **Data Aggregation:** Utilizing aggregate functions like COUNT, AVG, and SUM to summarize data effectively.
- **Joins:** Understanding the principles of INNER JOIN, LEFT JOIN, and RIGHT JOIN to combine data across multiple tables.
- **Data Manipulation:** Gaining hands-on experience with INSERT, UPDATE, and DELETE statements to manage database records.

This certification equipped me with the foundational skills required to handle database operations efficiently, ensuring data accuracy and integrity. These abilities are integral to backend development, analytics, and any data-driven application development.

Completing this certification is a crucial step in strengthening my technical expertise in database management and integrating SQL capabilities into my full-stack development projects.
`,
		skills: [
	'skill_sql',
    'skill_dataretrieval',
    'skill_dataaggregation',
    'skill_joins',
    'skill_datamanipulation'
		],
		orgName: 'Hacker Rank',
	},
	enterpriseDesignThinkingCert: {
		fromDate: 'Oct 2024',
		toDate: 'Oct 2024',
		title: 'Enterprise Design Thinking Practitioner',
		url: 'https://www.credly.com/go/fJXiH9qv',
		imageURL: ibmImg,
		description: `
![](https://raw.githubusercontent.com/akshay0611/My-Certificates/refs/heads/main/IBM-%20Enterprise%20Design%20Thinking-Practitioner.jpg)

The **Enterprise Design Thinking Practitioner** certification from IBM introduced me to a user-centered, collaborative, and iterative approach to problem-solving and innovation, specifically tailored for enterprise environments.

### Key Objectives and Learning Outcomes:
- **Design Thinking Principles:** Understanding the framework's core principles—empathy, ideation, and prototyping—to develop user-centric solutions.
- **Collaborative Problem Solving:** Learning how to facilitate effective teamwork across multidisciplinary groups to address complex challenges.
- **Value Creation:** Leveraging design thinking to create innovative solutions that align with both user needs and business goals.
- **Enterprise Integration:** Applying design thinking principles within large organizations to improve processes, services, and products at scale.

This certification enhanced my ability to:
- Think critically and empathetically about user problems.
- Prototype and test solutions efficiently.
- Drive innovative projects within an enterprise setting.

By integrating these skills into my development and business projects, I ensure a holistic approach to creating impactful and sustainable solutions. This certification has been a cornerstone in aligning my technical expertise with human-centered design principles, fostering innovation and success in my professional endeavors.
`,
        skills: ['skill_designthinking', 'skill_collaborativeproblem-solving', 'skill_user-centereddesign', 'skill_prototyping', 'skill_innovation', 'skill_enterpriseintegration'],
		orgName: 'IBM',
	},
	cybersecurityfoundationCert: {
		fromDate: 'Oct 2024',
		toDate: 'Oct 2024',
		title: 'Cybersecurity Foundation Course',
		url: 'https://skills.yourlearning.ibm.com/certificate/share/25107ba45fewogICJvYmplY3RJZCIgOiAiUExBTi00MEZEOTlFRjNBMzQiLAogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgImxlYXJuZXJDTlVNIiA6ICIzNDAzMjc0UkVHIgp9bbe1b33d4c-10',
		imageURL: ibmImg,
		description: `
![](https://raw.githubusercontent.com/akshay0611/My-Certificates/refs/heads/main/IBM-Cyber%20Security%20Foundation%20Course.jpg)
The **Cybersecurity Foundation Course** by IBM introduced me to essential cybersecurity concepts and practices, focusing on protecting systems, networks, and data from cyber threats. This certification provided foundational knowledge about the modern cybersecurity landscape and its importance in today's digital world.

### Key Learning Objectives:
- **Cybersecurity Fundamentals:** Understanding core concepts such as confidentiality, integrity, and availability (CIA Triad) and their relevance to information security.
- **Threats and Vulnerabilities:** Identifying common cyber threats, vulnerabilities, and attack vectors, along with methods to mitigate them.
- **Security Measures:** Learning about authentication, encryption, firewalls, and endpoint security to safeguard digital assets.
- **Risk Management:** Exploring techniques to assess and manage risks associated with cybersecurity incidents.
- **Cybersecurity Frameworks:** Gaining insights into established frameworks like NIST and ISO for implementing robust security strategies.

### Impact:
This course strengthened my ability to integrate cybersecurity best practices into software development, ensuring the applications I develop are secure and resilient. It also enhanced my understanding of proactive risk management and defensive strategies, crucial for maintaining data integrity and user trust in any technical project.

This certification complements my expertise in full-stack development by enabling me to deliver not just functional but also secure digital solutions.
`,
        skills: ['skill_cybersecurity', 'skill_riskmanagement', 'skill_encryption', 'skill_authentication', 'skill_networksecurity'],
		orgName: 'IBM',
	},
	artificialIntelligenceFundamentalsCert: {
		fromDate: 'Oct 2024',
		toDate: 'Oct 2024',
		title: 'Artificial Intelligence Fundamentals',
		url: 'https://www.credly.com/badges/27cb35ab-987b-4a58-8cb9-5f05e19b2f97/linked_in_profile',
		imageURL: ibmImg,
		description: `
![](https://raw.githubusercontent.com/akshay0611/My-Certificates/refs/heads/main/IBM-%20Artificial%20Intelligence%20Fundamentals.jpg)

The **Artificial Intelligence Fundamentals** course from IBM introduced me to the basics of AI and machine learning, providing a strong foundation for further exploring AI technologies. 

### Key Learning Objectives:
- **Introduction to AI:** Gaining an understanding of AI's impact on businesses and society, as well as its core concepts.
- **Machine Learning:** Exploring the fundamentals of machine learning algorithms and their practical applications.
- **Data Science & AI:** Learning how AI is used in data science to analyze data and make predictions.
- **AI Tools & Techniques:** Understanding the tools and techniques commonly used in AI, including supervised and unsupervised learning, neural networks, and deep learning.

This certification expanded my knowledge of AI, making me capable of integrating intelligent solutions into the software I develop, ensuring more efficient and innovative outcomes. 

### Impact:
By completing this course, I strengthened my ability to develop smarter applications using AI technologies, complementing my full-stack development skills.
`,
skills: ['skill_ai', 'skill_machinelearning', 'skill_datascience', 'skill_neuralnetworks'],
		orgName: 'IBM',
	},
	postmanAPIFundamentalsCert: {
		fromDate: 'Nov 2024',
		toDate: 'Nov 2024',
		title: 'Postman API Fundamentals Student Expert',
		url: 'https://api.badgr.io/public/assertions/sRmUi0GpTsCjJfNhtmQG3g',
		imageURL: postmanImg,
		description: `
![](https://raw.githubusercontent.com/akshay0611/My-Certificates/refs/heads/main/Postman%20API%20Fundamentals%20Student%20Expert.png)

The **Postman API Fundamentals Student Expert** certification has equipped me with a thorough understanding of API concepts and their practical applications, especially focusing on the Postman tool.

### Key Learning Objectives:
- **API Basics:** Understanding what APIs are, how they work, and why they are essential for modern web development.
- **Postman Tool Usage:** Mastering Postman’s interface and learning how to efficiently use it for testing, documenting, and monitoring APIs.
- **API Development & Testing:** Learning how to create, test, and debug APIs using Postman, including managing environments and creating reusable collections.
- **Automation & Integration:** Leveraging Postman’s automation features for testing and integrating APIs into CI/CD pipelines.

By completing this certification, I’ve enhanced my API skills, ensuring I can develop, test, and manage APIs effectively, which is crucial for building robust back-end systems in my full-stack development projects.
`,
		skills: ['skill_apibasics', 'skill_postmantoolusage', 'skill_apidevelopmenttesting' , 'skill_automationintegration'],
		orgName: 'Postman',
	},
	goldmanSachsJobSimulationCert: {
		fromDate: 'Nov 2024',
		toDate: 'Nov 2024',
		title: 'Goldman Sachs Software Engineering Job Simulation',
		url: '',
		imageURL: goldmansachsImg,
		description: `
![](https://raw.githubusercontent.com/akshay0611/My-Certificates/refs/heads/main/Goldman%20Sachs.jpg)

The **Goldman Sachs Software Engineering Job Simulation** certification was awarded upon successfully completing the job simulation via Forage. This program involved a series of real-world tasks focused on IT security, software engineering, and the application of best practices.

### Key Learning Objectives:
- **Governance & Cybersecurity:** Assessing IT security measures and identifying vulnerabilities in systems, particularly in password hashing algorithms.
- **Security Analysis:** Proposing actionable improvements to enhance cybersecurity practices, focusing on best practices for password security and safeguarding digital assets.
- **Software Engineering Skills:** Applying software engineering principles to solve real-world problems, with an emphasis on secure coding practices and efficient problem-solving.
- **Critical Thinking & Problem-Solving:** Analyzing complex security scenarios and providing solutions to strengthen security protocols within an organization.
- **Collaboration & Time Management:** Working efficiently within time constraints while delivering quality results, simulating real-world project conditions at Goldman Sachs.

This certification demonstrates proficiency in governance analysis, password security, and the application of cybersecurity best practices, equipping me with skills essential for tackling challenges in the cybersecurity and software engineering fields.
`,
		skills: [
	'skill_cybersecurity',
    'skill_passwordsecurity',
    'skill_softwareengineering',
    'skill_criticalthinking',
    'skill_collaboration',
    'skill_timemanagement'
		],
		orgName: 'Goldman Sachs',
	},
};