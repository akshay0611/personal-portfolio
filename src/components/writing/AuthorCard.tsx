import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { SocialUrls } from 'utils/constants/urls';

const links = [
	{ label: 'GitHub', href: SocialUrls.github, icon: FiGithub },
	{ label: 'LinkedIn', href: SocialUrls.linkedin, icon: FiLinkedin },
	{ label: 'X', href: SocialUrls.twitter, icon: FiTwitter },
	{ label: 'Email', href: SocialUrls.email, icon: FiMail },
];

export default function AuthorCard() {
	return (
		<section
			aria-label='About the author'
			className='mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-[#0b0b0b] p-6 md:p-8'
		>
			<div className='flex flex-col gap-5 sm:flex-row sm:items-start'>
				<Image
					src='/images/akshay1.png'
					alt='Akshay Kumar'
					width={56}
					height={56}
					className='h-14 w-14 shrink-0 rounded-full object-cover ring-1 ring-white/15'
				/>
				<div className='flex flex-col gap-3'>
					<div>
						<p className='text-2xs uppercase tracking-[0.2em] text-blue-400'>
							Written by
						</p>
						<p className='mt-1 text-lg font-semibold text-white'>
							Akshay Kumar
						</p>
						<p className='text-xs text-gray-500'>
							Full-Stack Developer · Building production systems
						</p>
					</div>
					<p className='max-w-xl text-sm font-light leading-relaxed text-gray-400'>
						I write about the architecture decisions, trade-offs, and failures
						behind the systems I ship. If a post helped, the code and the case
						studies go deeper.
					</p>
					<div className='flex flex-wrap items-center gap-2'>
						{links.map(({ label, href, icon: Icon }) => (
							<a
								key={label}
								href={href}
								target={href.startsWith('http') ? '_blank' : undefined}
								rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
								className='inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition-colors hover:border-blue-500/40 hover:text-white'
							>
								<Icon className='h-3.5 w-3.5' aria-hidden='true' />
								{label}
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
