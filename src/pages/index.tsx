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
				<title>Akshay Kumar | Full Stack Developer | AI & Cloud-Driven Products</title>
				<meta
					name='description'
					content='Full Stack Developer focused on building scalable AI & Cloud-driven products. Recognition by Google for Developers for clean, maintainable, and high-performance code.'
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
