import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

import HeroSection from 'components/home/herosection';
import ImpactMetrics from 'components/home/ImpactMetrics';
import CertificationBar from 'components/home/CertificationBar';
import Navbar from 'components/home/navbar';
import About from 'components/home/about';
import Skills from 'components/Skills';
import Projects from 'components/home/projects';
import BlogFeed from 'components/home/BlogFeed';
import Footer from 'components/footer';
import Testimonials from 'components/home/testimonials';
import StructuredData from 'components/common/StructuredData';
import BackToTop from 'components/common/BackToTop';

const Home: NextPage = () => {
	useEffect(() => {
		const handleResize = () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<Head>
				<title>Akshay Kumar | Full Stack Developer | AI & Cloud-Driven Products</title>
				<meta
					name='description'
					content='Lead Developer at EduLinkUp & Web Development Lead at Codeunia. Full Stack Developer focused on building scalable AI & Cloud-driven products. Recognition by Google for Developers for engineering excellence.'
				/>
				<link rel='canonical' href='https://connectwithakshay.netlify.app' />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://connectwithakshay.netlify.app/" />
				<meta property="og:title" content="Akshay Kumar | Full Stack Developer | AI & Cloud-Driven Products" />
				<meta property="og:description" content="Lead Developer at EduLinkUp & Web Development Lead at Codeunia. Building scalable AI & Cloud-driven products." />
				<meta property="og:image" content="https://connectwithakshay.netlify.app/images/banner.png" />

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://connectwithakshay.netlify.app/" />
				<meta property="twitter:title" content="Akshay Kumar | Full Stack Developer | AI & Cloud-Driven Products" />
				<meta property="twitter:description" content="Lead Developer at EduLinkUp & Web Development Lead at Codeunia. Building scalable AI & Cloud-driven products." />
				<meta property="twitter:image" content="https://connectwithakshay.netlify.app/images/banner.png" />
			</Head>
			<StructuredData />
			<main className='min-h-screen min-w-full bg-black'>
				<HeroSection />
				<ImpactMetrics />
				<CertificationBar />
				<Navbar />
				<About />
				<Skills />
				<Projects />
				<BlogFeed />
				<Testimonials />
			</main>
			<BackToTop />
			<Footer />
		</>
	);
};

export default Home;
