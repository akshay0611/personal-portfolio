import Head from 'next/head';

const StructuredData = () => {
	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		'@id': 'https://connectwithakshay.netlify.app/#person',
		name: 'Akshay Kumar',
		jobTitle: 'Full Stack Developer',
		description:
			'Full Stack Developer with 3+ years of experience specializing in ReactJs, NodeJs, Python, MongoDB, Cybersecurity, and AI',
		url: 'https://connectwithakshay.netlify.app',
		sameAs: [
			'https://codeunia.com/blog/author/akshay-kumar',
			'https://edulinkup.dev/blog/author/akshay-kumar',
			'https://www.linkedin.com/in/akshaykumar0611/',
			'https://github.com/akshay0611',
			'https://x.com/Aksh0605',
		],
		knowsAbout: [
			'Full Stack Development',
			'ReactJs',
			'NodeJs',
			'Python',
			'MongoDB',
			'JavaScript',
			'TypeScript',
			'Web Development',
			'Cybersecurity',
			'Artificial Intelligence',
			'Machine Learning',
			'Data Analytics',
		],
		worksFor: [
			{
				'@type': 'Organization',
				name: 'Codeunia',
				url: 'https://codeunia.com',
			},
			{
				'@type': 'Organization',
				name: 'EduLinkUp',
				url: 'https://edulinkup.dev',
			},
		],
	};

	const websiteSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Akshay Kumar - Full Stack Developer Portfolio',
		url: 'https://connectwithakshay.netlify.app',
		description:
			'Portfolio website of Akshay Kumar, a Full Stack Developer specializing in ReactJs, NodeJs, Python, and MongoDB',
		author: {
			'@type': 'Person',
			name: 'Akshay Kumar',
		},
	};

	const professionalServiceSchema = {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		name: 'Akshay Kumar - Full Stack Development Services',
		description:
			'Professional full stack development services including web application development, API development, database design, and consulting',
		provider: {
			'@type': 'Person',
			name: 'Akshay Kumar',
			jobTitle: 'Full Stack Developer',
		},
		areaServed: 'Worldwide',
		serviceType: [
			'Full Stack Development',
			'Web Application Development',
			'API Development',
			'Database Design',
			'Frontend Development',
			'Backend Development',
		],
	};

	return (
		<Head>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
			/>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
			/>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(professionalServiceSchema),
				}}
			/>
		</Head>
	);
};

export default StructuredData;
