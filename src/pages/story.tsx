import Story from 'components/Story';
import Head from 'next/head';
import React from 'react';

export default function story() {
	return (
		<>
			<Head>
				<title>Akshay Kumar Full Stack Developer - 3+ Years of Building Production Systems</title>
				<meta
					name='description'
					content='Follow my journey as Lead Developer at EduLinkUp and Web Development Lead at Codeunia. 3+ years building production systems, ranked #2/3424 globally in GSSoC, and recognized by Google for Developers.'
				/>
				<meta
					name='keywords'
					content='Akshay Kumar Lead Developer, EduLinkUp Lead Developer, Codeunia Web Dev Lead, Akshay Kumar experience, developer story, Full Stack Developer journey, ReactJs developer, NodeJs developer, open source contributor'
				/>
				<meta
					name='author'
					content='Akshay Kumar'
				/>
				<link rel='canonical' href='https://connectwithakshay.netlify.app/story' />
			</Head>
			<Story />
		</>
	);
}
