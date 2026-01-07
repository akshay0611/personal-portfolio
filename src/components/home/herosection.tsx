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
			className='home-section relative flex-center min-h-[100dvh] py-20'
			id='herosection'
		>
			<div className='max-section-width flex flex-col-reverse sm:flex-row gap-8 sm:gap-1 items-center justify-center'>
				{/* Left */}
				<div>
					<div className='text-center sm:text-left'>
						<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-5'>
							Akshay Kumar
							<br />
							<span className='text-2xl md:text-3xl lg:text-4xl font-semibold opacity-90'>
								Full-Stack Developer building AI & cloud-driven products
							</span>
						</h1>
						<h2 className='text-sm md:text-lg lg:text-xl font-light mb-3 sm:mb-4 md:mb-6 max-w-2xl'>
							I design and ship scalable, production-grade web applications with a focus on performance, maintainability, and long-term impact.
						</h2>
						<div className='text-xs md:text-sm tracking-widest text-white/50 uppercase mb-3'>
							MERN · Next.js · AI integrations · Google Cloud
						</div>
						<div className='flex items-center gap-2 mb-5 sm:mb-6 justify-center sm:justify-start'>
							<div className='group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full text-xs border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'>
								<div className='relative'>
									<Image 
										src={googleImg} 
										alt="Google" 
										width={18} 
										height={18} 
										className="rounded-sm group-hover:scale-110 transition-transform duration-300" 
										loader={({ src }) => src}
										unoptimized={true}
									/>
									<div className='absolute inset-0 bg-gradient-to-br from-transparent to-black/10 rounded-sm'></div>
								</div>
								<span className='text-white/90 font-medium tracking-wide group-hover:text-white transition-colors duration-300'>
									Featured by Google for Developers
								</span>
								<div className='w-1 h-1 bg-green-400 rounded-full animate-pulse'></div>
							</div>
						</div>
					</div>
					<div className='flex gap-1 md:gap-2 mb-4 text-xl md:text-2xl justify-center sm:justify-start'>
						<Link passHref href={SocialUrls.github} legacyBehavior>
							<a
								target='_blank'
								rel='noopener noreferrer'
								onClick={() => trackSocialClick('GitHub')}
								className='p-2 text-white hover:bg-white/10 hover:scale-125 rounded-full transition-all duration-150'
							>
								<FaGithub />
							</a>
						</Link>
						<Link passHref href={SocialUrls.linkedin} legacyBehavior>
							<a
								target='_blank'
								rel='noopener noreferrer'
								onClick={() => trackSocialClick('LinkedIn')}
								className='p-2 text-[#0077b5] hover:bg-[#0077b5]/10 hover:scale-125 rounded-full transition-all duration-150'
							>
								<FaLinkedinIn />
							</a>
						</Link>
						<Link passHref href={SocialUrls.email} legacyBehavior>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='p-2 text-[#ea4335] hover:bg-[#ea4335]/10 hover:scale-125 rounded-full transition-all duration-150'
							>
								<FaEnvelope />
							</a>
						</Link>
						<Link passHref href={SocialUrls.hackerrank} legacyBehavior>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='p-2 text-[#2ec866] hover:bg-[#2ec866]/10 hover:scale-125 rounded-full transition-all duration-150'
							>
								<FaHackerrank />
							</a>
						</Link>
					</div>
					<div className='flex gap-2 item-center justify-center sm:justify-start text-sm sm:text-base'>
						{/* <Button variant='primary' className='whitespace-nowrap'>
							<Link href=''>
								View Resume
							</Link>
						</Button> */}
						<Button variant='primary' className='whitespace-nowrap'>
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
				<div className='relative w-3/4 max-w-lg aspect-square sm:w-fit'>
					<Image
						className='rounded-full'
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
					<div className='absolute rounded-full h-full w-full left-0 top-0 bg-gradient-to-b from-transparent via-[#00000020] to-black'></div>
				</div>
				<LinkScroll
					className='absolute bottom-4 text-3xl md:text-4xl opacity-40 animate-bounce'
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
