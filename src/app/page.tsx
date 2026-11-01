import dynamic from 'next/dynamic';
import HeroSection from 'components/home/herosection';
import Navbar from 'components/home/navbar';
import StructuredData from 'components/common/StructuredData';
import BackToTop from 'components/common/BackToTop';

const ImpactMetrics = dynamic(() => import('components/home/ImpactMetrics'));
const CertificationBar = dynamic(() => import('components/home/CertificationBar'));
const About = dynamic(() => import('components/home/about'));
const Experiences = dynamic(() => import('components/home/experiences'));
const GitHubActivity = dynamic(() => import('components/home/GitHubActivity'));
const Skills = dynamic(() => import('components/Skills'));
const BlogFeed = dynamic(() => import('components/home/BlogFeed'));
const Testimonials = dynamic(() => import('components/home/testimonials'));
const Footer = dynamic(() => import('components/footer'));

export default function HomePage() {
	return (
		<>
			<StructuredData />
			<main className='min-h-screen min-w-full bg-black'>
				<HeroSection />
				<ImpactMetrics />
				<CertificationBar />
				<Navbar />
				<About />
				<Experiences />
				<GitHubActivity />
				<Skills />
				<BlogFeed />
				<Testimonials />
			</main>
			<BackToTop />
			<Footer />
		</>
	);
}
