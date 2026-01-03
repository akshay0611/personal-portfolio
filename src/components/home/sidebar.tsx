import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
	FaEnvelope,
	FaGithub,
	FaHackerrank,
	FaLinkedinIn,
	FaTimes,
} from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link as LinkScroll } from 'react-scroll';
import { SocialUrls } from 'utils/constants/urls';
import { navbarData } from './navbar';
import akshay from '/public/images/akshay1.png';

export default function NavbarDropdown(props: JSX.IntrinsicAttributes) {
	const [display, setDisplay] = useState(false);

	const onOpen = () => {
		setDisplay(true);
	};

	const onClose = () => {
		setDisplay(false);
	};

	const onBackdropClose = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if ((e.target as HTMLInputElement).id === 'sidebar-backdrop') {
			setDisplay(false);
		}
	};

	useEffect(() => {
		if (display) {
			document.body.classList.add('sidebar-open');
		} else {
			document.body.classList.remove('sidebar-open');
		}
		return () => {
			document.body.classList.remove('sidebar-open');
		};
	}, [display]);

	return (
		<>
			<GiHamburgerMenu
				onClick={onOpen}
				className='text-xl cursor-pointer'
			/>
			<Transition
				show={display}
				enter='transition duration-300'
				enterFrom='translate-x-full'
				enterTo='translate-x-0'
				leave='transition duration-200'
				leaveFrom='translate-x-0'
				leaveTo='translate-x-full'
				unmount={false}
				className='fixed inline-block top-0 right-0 h-screen bottom-0 w-full z-20'
				id='sidebar-backdrop'
				onClick={onBackdropClose}
			>
				<div className='ml-auto w-72 h-full flex flex-col bg-dark-gray border-l border-white/10 shadow-2xl overflow-y-auto px-6 py-8'>
					{/* Close Icon on top-right */}
					<div className='flex justify-end mb-6'>
						<FaTimes
							className='transition text-2xl cursor-pointer text-white/60 hover:text-white hover:rotate-90 duration-300'
							onClick={onClose}
						/>
					</div>

					{/* Profile Section */}
					<div className='flex flex-col items-center mb-10'>
						<div className='w-28 h-28 mb-4 relative rounded-full p-1 border-2 border-white/10'>
							<Image
								className='rounded-full'
								height={500}
								width={500}
								src={akshay}
								alt='Akshay Kumar'
								unoptimized={true}
								placeholder='blur'
							/>
						</div>
						<LinkScroll
							spy={true}
							smooth={true}
							offset={-32}
							duration={200}
							to='herosection'
							onSetActive={onClose}
							className='cursor-pointer group'
						>
							<h1 className='text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors uppercase tracking-tight'>
								Akshay Kumar
							</h1>
							<div className='h-0.5 w-0 group-hover:w-full bg-yellow-300 transition-all duration-300 mt-1'></div>
						</LinkScroll>
					</div>

					{/* Navbar Links */}
					<nav className='flex flex-col gap-2 mb-10'>
						{navbarData.map((e, i) => {
							const commonClasses =
								'text-xs tracking-[0.2em] font-medium py-3 px-4 rounded-lg flex items-center transition-all duration-200 uppercase hover:bg-white/5';
							if (e.route || e.external) {
								return (
									<Link
										key={i}
										href={e.to}
										passHref
										legacyBehavior
									>
										<a
											target={
												e.external ? '_blank' : '_self'
											}
											rel='noopener noreferrer'
											className={`${commonClasses} text-white/70 hover:text-white`}
										>
											{e.title}
										</a>
									</Link>
								);
							}
							return (
								<LinkScroll
									activeClass='!text-yellow-300 bg-white/5 border-l-2 border-yellow-300'
									className={`${commonClasses} cursor-pointer text-white/70 hover:text-white`}
									spy={true}
									smooth={true}
									offset={-32}
									duration={200}
									to={e.to}
									key={i}
									onClick={onClose}
								>
									<span>{e.title}</span>
								</LinkScroll>
							);
						})}
					</nav>

					{/* Social Links Footer */}
					<div className='mt-auto pt-8 border-t border-white/10'>
						<p className='text-[10px] uppercase tracking-widest text-white/40 mb-4 text-center'>
							Connect with me
						</p>
						<div className='flex gap-4 justify-center text-xl'>
							<Link
								passHref
								legacyBehavior
								href={SocialUrls.github}
							>
								<a
									target='_blank'
									rel='noopener noreferrer'
									className='text-white hover:scale-125 transition-all duration-200'
								>
									<FaGithub />
								</a>
							</Link>
							<Link
								passHref
								legacyBehavior
								href={SocialUrls.linkedin}
							>
								<a
									target='_blank'
									rel='noopener noreferrer'
									className='text-[#0077b5] hover:scale-125 transition-all duration-200'
								>
									<FaLinkedinIn />
								</a>
							</Link>
							<Link
								passHref
								legacyBehavior
								href={SocialUrls.email}
							>
								<a
									target='_blank'
									rel='noopener noreferrer'
									className='text-[#ea4335] hover:scale-125 transition-all duration-200'
								>
									<FaEnvelope />
								</a>
							</Link>
							<Link
								passHref
								legacyBehavior
								href={SocialUrls.hackerrank}
							>
								<a
									target='_blank'
									rel='noopener noreferrer'
									className='text-[#2ec866] hover:scale-125 transition-all duration-200'
								>
									<FaHackerrank />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</Transition>
		</>
	);
}
