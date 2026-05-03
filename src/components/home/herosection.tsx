import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import React from 'react';
import Image from 'next/image';
import Button from 'components/common/Button';
import {
	FaEnvelope,
	FaGithub,
	FaHackerrank,
	FaLinkedinIn,
} from 'react-icons/fa';
import { BsChevronCompactDown } from 'react-icons/bs';
import { SocialUrls } from 'utils/constants/urls';
import akshay from '../../../public/images/akshay1.png';
import googleImg from '../../../public/images/experience/google.png';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { trackSocialClick } from 'utils/analytics';

export default function HeroSection() {
	return (
		<section
			className='home-section relative flex-center min-h-[100dvh] py-16 md:py-20'
			id='herosection'
		>
			<div className='max-section-width flex flex-col-reverse md:flex-row gap-10 md:gap-8 items-center justify-between w-full'>
				{/* Left */}
				<div className='w-full md:w-[52%]'>
					<div className='text-center md:text-left'>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4'>
							Akshay Kumar
						</h1>
						<h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 leading-tight max-w-2xl'>
								Full-Stack Developer building AI & cloud-driven products
						</h2>
						<p className='text-base md:text-lg text-white/70 leading-relaxed mt-6 mb-6 max-w-2xl'>
							I design and ship scalable, production-grade web applications with a focus on performance, maintainability, and long-term impact.
						</p>
						<div className='text-xs md:text-sm tracking-[0.18em] text-white/45 uppercase mb-5'>
							MERN · Next.js · AI integrations · Google Cloud
						</div>
						<div className='flex items-center gap-2 mb-7 justify-center md:justify-start'>
							<div className='flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs border border-white/15 bg-white/[0.03]'>
								<div className='relative shrink-0'>
									<Image 
										src={googleImg} 
										alt="Google" 
										width={16} 
										height={16} 
										className="rounded-sm" 
										loader={({ src }) => src}
										unoptimized={true}
									/>
								</div>
								<span className='text-white/85 tracking-wide'>
									Featured by Google for Developers
								</span>
							</div>
						</div>
					</div>
					<div className='flex gap-2 mb-6 text-xl justify-center md:justify-start'>
						<Link passHref href={SocialUrls.github} legacyBehavior>
							<a
								target='_blank'
								rel='noopener noreferrer'
								onClick={() => trackSocialClick('GitHub')}
								className='p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200'
							>
								<FaGithub />
							</a>
						</Link>
						<Link passHref href={SocialUrls.linkedin} legacyBehavior>
							<a
								target='_blank'
								rel='noopener noreferrer'
								onClick={() => trackSocialClick('LinkedIn')}
								className='p-2 text-[#0077b5] hover:bg-[#0077b5]/10 rounded-full transition-all duration-200'
							>
								<FaLinkedinIn />
							</a>
						</Link>
						<Link passHref href={SocialUrls.email} legacyBehavior>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='p-2 text-[#ea4335] hover:bg-[#ea4335]/10 rounded-full transition-all duration-200'
							>
								<FaEnvelope />
							</a>
						</Link>
						<Link passHref href={SocialUrls.hackerrank} legacyBehavior>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='p-2 text-[#2ec866] hover:bg-[#2ec866]/10 rounded-full transition-all duration-200'
							>
								<FaHackerrank />
							</a>
						</Link>
					</div>
					<div className='flex gap-2 item-center justify-center md:justify-start text-sm sm:text-base'>
						<Button variant='primary' className='whitespace-nowrap px-6 py-2.5'>
							<LinkScroll
								spy={true}
								smooth={true}
								offset={-32}
								duration={200}
								to='contact'
							>
								Hire me
							</LinkScroll>
						</Button>
					</div>
				</div>
				{/* Right */}
				<div className='relative w-[78%] max-w-[460px] aspect-square md:w-[42%]'>
					<div className='absolute -inset-4 bg-[radial-gradient(circle,_rgba(255,255,255,0.14)_0%,_rgba(255,255,255,0)_70%)] blur-xl'></div>
					<Image
						className='rounded-full relative'
						height={1000}
						width={1000}
						src={akshay}
						alt='Akshay Kumar | Full Stack Developer | AI & Cloud-Driven Products | Google Cloud Innovator'
						loading='eager'
						priority={true}
						unoptimized={true}
						placeholder='blur'
						loader={({ src }) => src}
					/>
					<div className='absolute rounded-full h-full w-full left-0 top-0 bg-gradient-to-b from-transparent via-transparent to-black/25'></div>
				</div>
				<LinkScroll
					className='absolute bottom-4 text-3xl md:text-4xl opacity-30 animate-bounce cursor-pointer'
					spy={true}
					smooth={true}
					offset={-32}
					duration={200}
					to='about'
				>
					<AiOutlineDoubleLeft className='-rotate-90' />
				</LinkScroll>
			</div>
		</section>
	);
}
