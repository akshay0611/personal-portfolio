import type { Metadata } from 'next';
import Story from 'components/Story';

export const metadata: Metadata = {
	title: 'Developer Story - 3+ Years of Building Production Systems',
	description:
		'Follow my journey as Lead Developer at EduLinkUp and Web Development Lead at Codeunia. 3+ years building production systems, ranked #2/3424 globally in GSSoC, and recognized by Google for Developers.',
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
		title: 'Akshay Kumar Developer Story | 3+ Years Building Production Systems',
		description:
			'Follow my journey as Lead Developer at EduLinkUp and Web Development Lead at Codeunia. 3+ years building production systems.',
		url: 'https://connectwithakshay.netlify.app/story',
	},
};

export default function StoryPage() {
	return <Story />;
}
