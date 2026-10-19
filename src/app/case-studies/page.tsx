import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from 'components/footer';
import { caseStudies } from 'data/caseStudies';

const BASE_URL =
	process.env.BASE_URL || 'https://connectwithakshay.netlify.app';

export const metadata: Metadata = {
	title: 'Case Studies — Production Systems I Architected & Shipped',
	description:
		'In-depth case studies of production systems I designed and shipped as Lead Developer at EduLinkUp and on client work — covering architecture decisions, constraints, and measurable results.',
	keywords: [
		'Akshay Kumar case studies',
		'full stack developer case study',
		'edtech platform architecture',
		'scalable system design portfolio',
		'production system case study',
	],
	alternates: {
		canonical: '/case-studies',
	},
	openGraph: {
		title: 'Case Studies — Production Systems I Architected & Shipped',
		description:
			'In-depth case studies covering architecture decisions, constraints, and measurable results.',
		url: `${BASE_URL}/case-studies`,
	},
};

export default function CaseStudiesPage() {
	return (
		<>
			<section className='home-section bg-dark-gray'>
				<div className='max-section-width flex flex-col gap-8'>
					<nav
						aria-label='Breadcrumb'
						className='text-xs md:text-sm text-gray-400 flex items-center gap-1.5'
					>
						<Link href='/' className='hover:text-white transition'>
							Home
						</Link>
						<span aria-hidden='true'>/</span>
						<span className='text-gray-200'>Case Studies</span>
					</nav>

					<header className='flex flex-col gap-2'>
						<h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
							Case Studies
						</h1>
						<p className='text-sm md:text-base text-gray-400 font-light max-w-3xl leading-relaxed'>
							Long-form write-ups of production systems I have architected and
							shipped — the problems, the constraints that shaped the design, the
							engineering decisions, and the measurable outcomes.
						</p>
					</header>

					<div className='grid gap-4 md:grid-cols-2'>
						{caseStudies.map((study) => (
							<Link
								key={study.slug}
								href={`/case-studies/${study.slug}`}
								className='group bg-zinc-900 border border-white/5 hover:border-blue-500/60 transition rounded-md p-4 md:p-5 flex flex-col gap-4'
							>
								<div className='flex items-start gap-3'>
									<div className='w-16 h-16 shrink-0 flex items-center justify-center p-2 rounded-[14px] bg-white border border-black/10 overflow-hidden'>
										<Image
											src={study.logo}
											alt={`${study.org} logo`}
											height={200}
											width={200}
											className={`w-full h-full ${
												study.logoFit === 'contain'
													? 'object-contain'
													: 'object-cover'
											}`}
										/>
									</div>
									<div className='flex flex-col'>
										<h2 className='text-base md:text-lg font-semibold leading-snug group-hover:text-blue-400 transition'>
											{study.projectName}
										</h2>
										<span className='text-xs md:text-sm text-gray-500'>
											{study.org}
										</span>
									</div>
								</div>
								<p className='text-sm font-light text-gray-300 leading-relaxed line-clamp-4'>
									{study.tldr}
								</p>
								<div className='flex flex-wrap gap-x-6 gap-y-2 mt-auto'>
									{study.metrics.slice(0, 3).map((metric) => (
										<div key={metric.label} className='flex flex-col'>
											<span className='text-sm font-bold text-blue-400'>
												{metric.value}
											</span>
											<span className='text-[11px] text-gray-500 leading-snug'>
												{metric.label}
											</span>
										</div>
									))}
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
