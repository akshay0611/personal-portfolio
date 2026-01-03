import type { NextPage } from 'next';
import Head from 'next/head';

import HeroSection from 'components/home/herosection';
import Navbar from 'components/home/navbar';
import About from 'components/home/about';
import Skills from 'components/Skills';
import Projects from 'components/home/projects';
import Footer from 'components/footer';
import Testimonials from 'components/home/testimonials';
import StructuredData from 'components/common/StructuredData';
import BackToTop from 'components/common/BackToTop';

const Home: NextPage = () => {
	if (typeof window !== 'undefined') {
		window.addEventListener('resize', () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});
	}
	return (
		<>
			<Head>
				<title>Akshay Kumar | Full Stack Developer | Scalable Web Solutions</title>
				<meta
					name='description'
					content='Akshay Kumar is a Full Stack Developer specializing in ReactJs, NodeJs, Python, and MongoDB. This is the central hub for his professional identity across Codeunia, EduLinkUp, and more.'
				/>
				<link rel='canonical' href='https://connectwithakshay.netlify.app' />
			</Head>
			<StructuredData />
			<main className='min-h-screen min-w-full'>
				<HeroSection />
				<Navbar />
				<About />
				<Skills />
				<Projects />
				<Testimonials />
			</main>
			<BackToTop />
			<Footer />
		</>
	);
};

export default Home;
