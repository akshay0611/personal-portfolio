import Story from 'components/Story';
import Head from 'next/head';
import React from 'react';

export default function story() {
	return (
		<>
			<Head>
				<title>Akshay Kumar | Developer Story</title>
				<meta
					name='description'
					content='From "Hello World" to deploying production code, the developer journey is a never-ending quest for knowledge, efficiency, and innovation.'
				/>
				<meta
					name='keywords'
					content='developer story, developer journey, developer story Akshay Kumar, Akshay Kumar developer story, Akshay Kumar dev'
				/>
				<meta
					name='author'
					content='Akshay Kumar | https://nimish-jain.com'
				/>
			</Head>
			<Story />
		</>
	);
}
