import Head from 'next/head';

const StructuredData = () => {
	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		'@id': 'https://connectwithakshay.netlify.app/#person',
		name: 'Akshay Kumar',
		jobTitle: 'Full Stack Developer',
		description:
			'Lead Developer at EduLinkUp and Web Development Lead at Codeunia. Full Stack Developer recognized by Google for Developers, specializing in building scalable AI and production-ready systems.',
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
			'MERN Stack',
			'Next.js',
			'AI-driven products',
			'Cloud-native development',
			'Google Cloud',
			'ReactJs',
			'NodeJs',
			'Python',
			'MongoDB',
			'Cybersecurity',
			'Artificial Intelligence',
			'Machine Learning',
		],
		worksFor: [
			{
				'@type': 'Organization',
				name: 'EduLinkUp',
				url: 'https://edulinkup.dev',
			},
			{
				'@type': 'Organization',
				name: 'Codeunia',
				url: 'https://codeunia.com',
			},
		],
		award: [
			'Ranked #2 out of 3,424 global contributors in GSSoC 2025',
			'Google Cloud Fundamentals Recognition',
		],
	};

	const websiteSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Akshay Kumar | Full Stack Developer',
		url: 'https://connectwithakshay.netlify.app',
		description:
			"Explore the professional portfolio of Akshay Kumar, a Full Stack Developer specializing in building scalable systems and AI-driven products.",
		author: {
			'@type': 'Person',
			name: 'Akshay Kumar',
		},
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
		</Head>
	);
};

export default StructuredData;
