import Image from 'next/image';
import Link from 'next/link';
import SkillBadge from 'components/common/SkillBadge';
import { CaseStudy } from 'data/caseStudies';
import { findSkill } from 'utils/findSkill';

const renderText = (text: string) =>
	text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
		part.startsWith('**') && part.endsWith('**') ? (
			<strong key={index} className='font-semibold text-white'>
				{part.slice(2, -2)}
			</strong>
		) : (
			<span key={index}>{part}</span>
		),
	);

interface CaseStudyViewProps {
	study: CaseStudy;
}

export default function CaseStudyView({ study }: CaseStudyViewProps) {
	return (
		<article className='home-section bg-dark-gray'>
			<div className='max-section-width flex flex-col gap-8'>
				<nav
					aria-label='Breadcrumb'
					className='text-xs md:text-sm text-gray-400 flex items-center gap-1.5 flex-wrap'
				>
					<Link href='/' className='hover:text-white transition'>
						Home
					</Link>
					<span aria-hidden='true'>/</span>
					<Link href='/case-studies' className='hover:text-white transition'>
						Case Studies
					</Link>
					<span aria-hidden='true'>/</span>
					<span className='text-gray-200'>{study.org}</span>
				</nav>

				<header className='flex flex-col gap-4'>
					<div className='flex items-start gap-3 md:gap-4'>
						{study.logo && (
							<div className='w-16 h-16 md:w-20 md:h-20 shrink-0 flex items-center justify-center p-2 rounded-[14px] bg-white border border-black/10 overflow-hidden'>
								<Image
									src={study.logo}
									alt={`${study.org} logo`}
									height={200}
									width={200}
									className={`w-full h-full ${
										study.logoFit === 'contain' ? 'object-contain' : 'object-cover'
									}`}
									priority
								/>
							</div>
						)}
						<div className='flex flex-col'>
							<h1 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>
								{study.projectName}
							</h1>
							<p className='text-sm md:text-base text-gray-400 mt-1'>
								{study.tagline}
							</p>
						</div>
					</div>

					<dl className='flex flex-wrap gap-x-8 gap-y-3 text-xs md:text-sm'>
						<div className='flex flex-col'>
							<dt className='text-gray-500 uppercase tracking-wide text-[10px] md:text-xs'>
								Role
							</dt>
							<dd className='text-gray-200 font-medium'>{study.role}</dd>
						</div>
						<div className='flex flex-col'>
							<dt className='text-gray-500 uppercase tracking-wide text-[10px] md:text-xs'>
								Timeline
							</dt>
							<dd className='text-gray-200 font-medium'>{study.timeline}</dd>
						</div>
						<div className='flex flex-col'>
							<dt className='text-gray-500 uppercase tracking-wide text-[10px] md:text-xs'>
								Industry
							</dt>
							<dd className='text-gray-200 font-medium'>{study.industry}</dd>
						</div>
					</dl>

					<div className='flex flex-wrap gap-2'>
						{study.liveUrl && (
							<a
								href={study.liveUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='text-sm bg-white uppercase hover:bg-blue-900 hover:text-white border-1 transition text-black px-3 py-1 rounded-sm flex-center'
							>
								{study.liveUrl.includes('play.google.com') ? 'View on Play Store' : 'View Live'}
							</a>
						)}
						<Link
							href='/story?filter=project'
							className='text-sm bg-transparent uppercase hover:bg-blue-900 hover:text-white border-1 border-white/30 transition text-white px-3 py-1 rounded-sm flex-center'
						>
							All Projects
						</Link>
					</div>
				</header>

				<section
					aria-label='Summary'
					className='border-l-2 border-blue-500 bg-zinc-900/70 p-4 md:p-5 rounded-r-md'
				>
					<div className='text-[10px] md:text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2'>
						TL;DR
					</div>
					<p className='text-sm md:text-base font-light leading-relaxed text-gray-200'>
						{study.tldr}
					</p>
				</section>

				<section aria-label='Key metrics'>
					<h2 className='h2'>By the numbers</h2>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4'>
						{study.metrics.map((metric) => (
							<div
								key={metric.label}
								className='bg-zinc-900 border border-white/5 rounded-md p-3 md:p-4 flex flex-col gap-1'
							>
								<span className='text-xl md:text-2xl font-bold text-blue-400'>
									{metric.value}
								</span>
								<span className='text-[11px] md:text-xs text-gray-400 leading-snug'>
									{metric.label}
								</span>
							</div>
						))}
					</div>
				</section>

				{study.sections.map((section) => (
					<section key={section.id} aria-label={section.heading}>
						<h2 id={section.id} className='h2'>
							{section.heading}
						</h2>
						{section.body?.map((paragraph, index) => (
							<p
								key={index}
								className='text-sm md:text-base font-light leading-relaxed text-gray-300 mb-3'
							>
								{renderText(paragraph)}
							</p>
						))}
						{section.bullets && (
							<ul className='flex flex-col gap-2.5 mt-1'>
								{section.bullets.map((bullet, index) => (
									<li
										key={index}
										className='flex gap-2.5 text-sm md:text-base font-light leading-relaxed text-gray-300'
									>
										<span
											aria-hidden='true'
											className='text-blue-500 leading-relaxed select-none'
										>
											▸
										</span>
										<span>{renderText(bullet)}</span>
									</li>
								))}
							</ul>
						)}
					</section>
				))}

				{study.techStack.length > 0 && (
					<section aria-label='Tech stack'>
						<h2 className='h2'>Tech stack</h2>
						<ul className='flex flex-wrap items-center gap-2'>
							{study.techStack.map((tech, index) => {
								const skill = findSkill(tech);
								return skill ? <SkillBadge skill={skill} key={index} /> : null;
							})}
						</ul>
					</section>
				)}

				<section aria-label='Frequently asked questions'>
					<h2 className='h2'>Frequently asked questions</h2>
					<div className='flex flex-col gap-3'>
						{study.faqs.map((faq) => (
							<details
								key={faq.question}
								className='group bg-zinc-900 border border-white/5 rounded-md p-3 md:p-4'
							>
								<summary className='cursor-pointer text-sm md:text-base font-semibold text-gray-100 list-none flex justify-between items-center gap-3'>
									{faq.question}
									<span
										aria-hidden='true'
										className='text-blue-400 transition-transform group-open:rotate-45 text-lg leading-none'
									>
										+
									</span>
								</summary>
								<p className='text-sm md:text-base font-light leading-relaxed text-gray-300 mt-3'>
									{faq.answer}
								</p>
							</details>
						))}
					</div>
				</section>

				<footer className='border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4'>
					<p className='text-sm text-gray-400 font-light'>
						Want the full story behind this build?
					</p>
					<div className='flex flex-wrap gap-2'>
						<Link
							href='/story?filter=project'
							className='text-sm bg-white uppercase hover:bg-blue-900 hover:text-white border-1 transition text-black px-3 py-1 rounded-sm flex-center'
						>
							See all projects
						</Link>
						<Link
							href='/case-studies'
							className='text-sm bg-transparent uppercase hover:bg-blue-900 hover:text-white border-1 border-white/30 transition text-white px-3 py-1 rounded-sm flex-center'
						>
							All case studies
						</Link>
					</div>
				</footer>
			</div>
		</article>
	);
}
