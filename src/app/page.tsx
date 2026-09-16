import HeroSection from 'components/home/herosection';
import ImpactMetrics from 'components/home/ImpactMetrics';
import CertificationBar from 'components/home/CertificationBar';
import Navbar from 'components/home/navbar';
import About from 'components/home/about';
import Experiences from 'components/home/experiences';
import GitHubActivity from 'components/home/GitHubActivity';
import Skills from 'components/Skills';
import BlogFeed from 'components/home/BlogFeed';
import Testimonials from 'components/home/testimonials';
import Footer from 'components/footer';
import StructuredData from 'components/common/StructuredData';
import BackToTop from 'components/common/BackToTop';

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
