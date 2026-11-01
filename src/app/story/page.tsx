import type { Metadata } from 'next';
import Story from 'components/Story';

export const metadata: Metadata = {
	title: 'Developer Story - 3+ Years of Building Production Systems',
	description:
		'Follow my journey as Lead Developer at EduLinkUp and Web Development Lead at Codeunia. 3+ years building production systems, ranked #2 of 25,000+ globally in GSSoC, and recognized by Google for Developers.',
	keywords: [
		'Akshay Kumar Lead Developer',
		'EduLinkUp Lead Developer',
		'Codeunia Web Dev Lead',
		'Akshay Kumar experience',
		'developer story',
		'Full Stack Developer journey',
		'ReactJs developer',
		'NodeJs developer',
		'open source contributor',
	],
	alternates: {
		canonical: '/story',
	},
	openGraph: {
		type: 'website',
		title: 'Akshay Kumar Developer Story | 3+ Years Building Production Systems',
		description:
			'Follow my journey as Lead Developer at EduLinkUp and Web Development Lead at Codeunia. 3+ years building production systems.',
		url: 'https://connectwithakshay.netlify.app/story',
		images: [
			{
				url: '/images/banner.webp',
				width: 1200,
				height: 630,
				alt: 'Akshay Kumar Developer Story',
				type: 'image/webp',
			},
		],
	},
};

const profileSchema = {
	'@context': 'https://schema.org',
	'@type': 'ProfilePage',
	name: 'Developer Story — Akshay Kumar',
	url: 'https://connectwithakshay.netlify.app/story',
	mainEntity: {
		'@id': 'https://connectwithakshay.netlify.app/#person',
	},
};

export default function StoryPage() {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
			/>
			<Story />
		</>
	);
}
