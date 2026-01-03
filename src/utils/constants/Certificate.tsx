import { CertificateProps } from 'utils/developerStory';
import googleImg from '/public/images/certificates/google.png';
import microsoftImg from '/public/images/certificates/Microsoft.png';
import hackerrankImg from '/public/images/certificates/hackerrank.png';
import ibmImg from '/public/images/certificates/ibm.png';
import postmanImg from '/public/images/certificates/postman.png';
import goldmansachsImg from '/public/images/certificates/GoldmanSachs.png';
import piecesImg from '/public/images/certificates/Pieces.jpeg';
import neo4jImg from '/public/images/certificates/neo4j.png';
import oracleImg from '/public/images/certificates/oracle.png';

export const allCertificates: { [key: string]: CertificateProps } = {
	digitalMarketingFundamentalsCert: {
		fromDate: 'May 2020',
		toDate: 'May 2020',
		title: 'The fundamentals of Digital Marketing',
		url: '',
		imageURL: googleImg,
		description: `
![](https://raw.githubusercontent.com/akshay0611/My-Certificates/refs/heads/main/Google-Digital%20Marketing.jpg)

Validated expertise in **digital ecosystem optimization** and **user acquisition strategies**, ensuring technical solutions align with business growth metrics.

### Competency Validation:
- **SEO & Search Architecture**: Optimizing technical structures for search engine visibility and crawler efficiency.
- **Data-Driven Strategy**: Leveraging web analytics to inform product development and user experience decisions.
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

Certified professional in **search advertising ecosystems** and **programmatic targeting**. Demonstrated ability to integrate marketing technologies with web applications for enhanced user targeting and revenue optimization.

### Competency Validation:
- **Campaign Architecture**: Designing scalable data structures for tracking and managing ad performance.
- **Conversion Optimization**: Implementing technical strategies to maximize ROI through data-driven performance analysis.
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

Validated foundational proficiency in **relational database management** and **SQL query construction**.

### Competency Validation:
- **Data Integrity**: Enforcing schema constraints and data accuracy through reliable DML operations.
- **Query Logic**: Constructing efficient SELECT statements with aggregations and joins for reporting modules.
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

	sqlIntermediateCert: {
		fromDate: 'Oct 2024',
		toDate: 'Oct 2024',
		title: 'SQL Intermediate',
		url: 'https://www.hackerrank.com/certificates/56f79e273415',
		imageURL: hackerrankImg,
		description: `
![](https://raw.githubusercontent.com/akshay0611/My-Certificates/refs/heads/main/Hacker%20Rank-%20SQL%20Intermediate.png)
	
Demonstrated proficiency in **complex data modeling**, **relationship analytics**, and **query optimization** for scalable backend architectures.

### Competency Validation:
- **Performance Tuning**: optimizing slow queries using execution plans, indexing strategies, and advanced window functions.
- **Complex Analytics**: Deriving business intelligence from multi-dimensional datasets using nested subqueries and CTEs.
	`,
		skills: [
			'skill_sql',
			'skill_advancedjoins',
			'skill_subqueries',
			'skill_windowfunctions',
			'skill_queryoptimization',
			'skill_datatransformation'
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

Mastered **enterprise-scale innovation frameworks**, enabling cross-functional collaboration and **user-centric solution architecture** in complex environments.

### Competency Validation:
- **Strategic Innovation**: Applying iterative design principles to align technical deliverables with user needs.
- **Enterprise Agility**: Driving product value in large-scale organizations through empathetic problem-solving.
`,
		skills: ['skill_designthinking', 'skill_collaborativeproblem-solving', 'skill_user-centereddesign', 'skill_prototyping', 'skill_innovation', 'skill_enterpriseintegration'],
		orgName: 'IBM',
	},

	enterpriseDesignThinkingCoCreatorCert: {
		fromDate: 'Oct 2024',
		toDate: 'Oct 2024',
		title: 'Enterprise Design Thinking Co-Creator',
		url: 'https://www.credly.com/go/RT9XBoVB',
		imageURL: ibmImg,
		description: `
![](https://raw.githubusercontent.com/akshay0611/My-Certificates/refs/heads/main/IBM-%20Enterprise%20Design%20Thinking-Co%20Creator%20Badge.jpg)

Certified facilitator of **co-creation workshops** and **collaborative design sprints**. Proven ability to lead diverse stakeholders through the product discovery lifecycle to define high-impact technical roadmaps.

### Competency Validation:
- **Stakeholder Management**: Aligning Engineering, Product, and Design teams on shared strategic vision.
- **Rapid Prototyping**: Accelerating feedback loops through iterative testing of enterprise-grade concepts.
`,
		skills: ['skill_designthinking', 'skill_collaboration', 'skill_prototyping', 'skill_enterpriseinnovation', 'skill_facilitation', 'skill_scalablesolutions'],
		orgName: 'IBM',
	},


	enterpriseDesignThinkingTeamEssentialsForAICert: {
		fromDate: 'Oct 2024',
		toDate: 'Oct 2024',
		title: 'Enterprise Design Thinking - Team Essentials for AI',
		url: 'https://www.credly.com/go/oHfQNS8l',
		imageURL: ibmImg,
		description: `
![](https://raw.githubusercontent.com/akshay0611/My-Certificates/refs/heads/main/IBM-Enterprise%20Design%20Thinking%20-%20Team%20Essentials%20for%20AI.jpg)

Specialized in **Responsible AI frameworks** and **ethical system design**.

### Competency Validation:
- **AI Ethics Governance**: Designing AI solutions that prioritize transparency, fairness, and user safety.
- **Cross-Functional AI Strategy**: Bridging the gap between data science capabilities and human-centric product requirements.
`,
		skills: ['skill_responsibleAI', 'skill_teamalignment', 'skill_dataintegrity', 'skill_prototyping', 'skill_aidesign', 'skill_collaboration'],
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

Validated core competencies in **threat mitigation**, **secure infrastructure design**, and **compliance standards** (NIST/ISO) for enterprise applications.

### Competency Validation:
- **Secure Architecture**: Designing systems resilient to common attack vectors (OWASP Top 10).
- **Risk Management**: Implementing defense-in-depth strategies to safeguard data integrity and availability.
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

Certified competence in **AI/ML architectural patterns** and **intelligent system integration**.

### Competency Validation:
- **Model Deployment**: Understanding the lifecycle of deploying machine learning models into production environments.
- **Data Science Integration**: Leveraging deep learning and neural network concepts to build smarter, data-adaptive applications.
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

Certified competence in **API lifecycle management**, **automated testing strategies**, and **collaborative API design**.

### Competency Validation:
- **API Architecture**: Designing RESTful interfaces that are scalable, documented, and developer-friendly.
- **CI/CD Integration**: Automating API testing suites within deployment pipelines to ensure contract reliability.
`,
		skills: ['skill_apibasics', 'skill_postmantoolusage', 'skill_apidevelopmenttesting', 'skill_automationintegration'],
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

Validated expertise in **enterprise security audits** and **password cryptography**.

### Competency Validation:
- **Governance Analysis**: assessing and fortifying institutional software against industry-standard vulnerabilities.
- **Secure Engineering**: Implementing best practices for password hashing and sensitive data protection in financial software contexts.
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

	generativeAIEducatorsCert: {
		fromDate: 'Dec 2024',
		toDate: 'Dec 2024',
		title: 'Generative AI for Educators',
		url: 'https://skillshop.exceedlms.com/student/award/oHHarUaCrBp8BQirvXqba7GV',
		imageURL: googleImg,
		description: `
![](https://raw.githubusercontent.com/akshay0611/My-Certificates/refs/heads/main/Generative%20AI%20for%20Educators%20Certificate%20_%20Google.jpg)

Certified proficiency in **Generative AI prompting strategies** and **workflow automation**. Demonstrated ability to leverage LLMs (Gemini, ChatGPT) to accelerate content generation and administrative efficiency.

### Competency Validation:
- **Prompt Engineering**: Crafting high-fidelity contexts for precise AI output generation.
- **AI Integration**: embedding AI-driven tools into existing operational workflows to enhance productivity.
    `,
		skills: ['skill_aiApplications', 'skill_aiPrompting', 'skill_classroomResourceCreation'],
		orgName: 'Google',
	},

	genAI101PiecesCert: {
		fromDate: 'Dec 2024',
		toDate: 'Dec 2024',
		title: 'GenAI 101 with Pieces',
		url: 'https://api.badgr.io/public/assertions/MFEkMPPaTYGOc3di-LsWnA',
		imageURL: piecesImg,
		description: `
![](https://raw.githubusercontent.com/akshay0611/My-Certificates-Badges/refs/heads/main/GenAI%20101%20with%20Pieces%20Certificate.png)

Validated skills in **AI-assisted development** and **context-aware code management** using Pieces for Developers.

### Competency Validation:
- **DevFlow Optimization**: Integrating extensive LLM capabilities directly into the IDE to reduce context switching.
- **Knowledge Management**: Curating and managing code snippets with AI for faster retrieval and documentation.
    `,
		skills: ['skill_generativeAI', 'skill_aiIntegration', 'skill_productivityTools'],
		orgName: 'Pieces for Developers',
	},

	neo4jCertification: {
		fromDate: 'Jan 2025',
		toDate: 'Jan 2025',
		title: 'Neo4j Certified Professional',
		url: 'https://graphacademy.neo4j.com/c/09fedcdf-2948-40b4-9842-ca37f14477da/',
		imageURL: neo4jImg,
		description: `
![](https://raw.githubusercontent.com/akshay0611/My-Certificates-Badges/982c16dfcaa97b0c256f50e5b70f55479b38be7f/Neo4j%20Certified%20Professional.png)

Expertise in **Graph Database Architecture** and **Cypher Query Language**. Demonstrated ability to model complex, highly-connected data structures that outperform traditional relational databases in specific use cases.

### Competency Validation:
- **Graph Modeling**: Designing schema-free graph structures to represent complex real-world relationships.
- **Cypher Optimization**: Writing high-performance queries to traverse nodes and relationships efficiently.
    `,
		skills: ['skill_graphDatabases', 'skill_Neo4j', 'skill_dataModeling', 'skill_GraphTechnology'],
		orgName: 'Neo4j'
	},

	googleCloudFundamentalsBadge: {
		fromDate: 'Jan 2025',
		toDate: 'Jan 2025',
		title: 'Google Cloud Fundamentals: Core Infrastructure',
		url: 'https://www.cloudskillsboost.google/public_profiles/1ff52521-128f-4b6a-9d95-37b45edc35cf/badges/13473351',
		imageURL: googleImg,
		description: `
![](https://raw.githubusercontent.com/akshay0611/My-Certificates-Badges/refs/heads/main/Google%20Cloud-%20Fundamentals.png)

Certified competence in **cloud-native infrastructure** (GCP) and **scalable system design**.

### Competency Validation:
- **Cloud Architecture**: Orchestrating Compute Engine, Kubernetes Engine, and Cloud Storage for resilient applications.
- **IAM & Security**: Configuring robust identity management and security barriers for cloud resources.
    `,
		skills: ['skill_GoogleCloud', 'skill_cloudArchitecture', 'skill_cloudSecurity', 'skill_cloudComputing'],
		orgName: 'Google Cloud'
	},

	oracleCertifiedFoundationsAssociate: {
		fromDate: 'July 2025',
		toDate: 'July 2025',
		title: 'Oracle Certified Foundations Associate',
		url: '',
		imageURL: oracleImg,
		description: `
![](https://github.com/akshay0611/My-Certificates-Badges/blob/main/Oracle%20-%20Foundations%20Associate.png?raw=true)

Validated foundations in **enterprise data platforms** and **cloud infrastructure convergence**.

### Competency Validation:
- **Hybrid Cloud Integration**: Understanding architectures that bridge on-premises legacy data with modern cloud flexibility.
- **Enterprise Data Management**: Applying best practices for security, availability, and governance in Oracle environments.
    `,
		skills: ['skill_oracle', 'skill_dataPlatform', 'skill_cloud', 'skill_foundations'],
		orgName: 'Oracle University',
	},
};