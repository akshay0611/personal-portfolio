'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTimes, FaExpand, FaCompress, FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaDiscord } from 'react-icons/fa';
import { SocialUrls } from 'utils/constants/urls';
import { allProjects } from 'utils/constants/Projects';
import { allExperiences } from 'utils/constants/Experiences';
import { curatedSkills, secondarySkills } from 'utils/constants/Skills';
import { Achievements } from 'utils/constants/Achievements';
import { allCertificates } from 'utils/constants/Certificate';
import { impactMetrics } from 'utils/constants/Metrics';

type TerminalTheme = 'oled' | 'matrix' | 'cyberpunk' | 'dracula';

interface OutputLine {
	id: string;
	type: 'input' | 'output' | 'error' | 'success' | 'system' | 'custom';
	content: React.ReactNode;
}

const THEMES: Record<TerminalTheme, { name: string; bg: string; text: string; prompt: string; accent: string; border: string }> = {
	oled: {
		name: 'OLED Dark',
		bg: 'bg-black/95',
		text: 'text-zinc-200',
		prompt: 'text-emerald-400',
		accent: 'text-blue-400',
		border: 'border-white/15',
	},
	matrix: {
		name: 'Matrix Green',
		bg: 'bg-zinc-950/95',
		text: 'text-green-400',
		prompt: 'text-green-300',
		accent: 'text-lime-300',
		border: 'border-green-500/30',
	},
	cyberpunk: {
		name: 'Cyberpunk Neon',
		bg: 'bg-purple-950/90',
		text: 'text-cyan-300',
		prompt: 'text-pink-400',
		accent: 'text-yellow-300',
		border: 'border-pink-500/30',
	},
	dracula: {
		name: 'Dracula',
		bg: 'bg-[#282a36]/95',
		text: 'text-[#f8f8f2]',
		prompt: 'text-[#50fa7b]',
		accent: 'text-[#bd93f9]',
		border: 'border-[#6272a4]/40',
	},
};

const COMMANDS_LIST = [
	'help',
	'whoami',
	'bio',
	'skills',
	'projects',
	'experience',
	'achievements',
	'certifications',
	'metrics',
	'contact',
	'socials',
	'resume',
	'theme',
	'quote',
	'matrix',
	'sudo',
	'clear',
	'cls',
	'date',
	'exit',
];

const DEV_QUOTES = [
	'"First, solve the problem. Then, write the code." — John Johnson',
	'"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra',
	'"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler',
	'"Make it work, make it right, make it fast." — Kent Beck',
	'"Talk is cheap. Show me the code." — Linus Torvalds',
];

export default function TerminalModal() {
	const [isOpen, setIsOpen] = useState(false);
	const [isMaximized, setIsMaximized] = useState(false);
	const [theme, setTheme] = useState<TerminalTheme>('oled');
	const [inputVal, setInputVal] = useState('');
	const [history, setHistory] = useState<OutputLine[]>([]);
	const [commandHistory, setCommandHistory] = useState<string[]>([]);
	const [historyIndex, setHistoryIndex] = useState<number>(-1);

	const bottomRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	// Welcome banner
	const getWelcomeMessage = (): OutputLine[] => [
		{
			id: 'banner',
			type: 'system',
			content: (
				<div className='font-mono text-xs md:text-sm leading-tight text-white/70 mb-3 select-none'>
					<pre className='text-emerald-400 font-bold hidden sm:block'>
{`
    ___    __ __ _____ __  __ ___ __  __   ____  _______   __
   /   |  / // // ___// / / //   |\\ \\/ /  / __ \\/ ____/ | / /
  / /| | / // / \\__ \\/ /_/ // /| | \\  /  / / / / __/ /  |/ / 
 / ___ |/ // / ___/ / __  // ___ | / /  / /_/ / /___/ /|  /  
/_/  |_/_//_//____//_/ /_//_/  |_|/_/  /_____/_____/_/ |_/   
`}
					</pre>
					<p className='text-white font-semibold'>
						Welcome to Akshay Kumar&apos;s Interactive Developer Shell [v2.4.0-release]
					</p>
					<p className='text-zinc-400 mt-1'>
						Type <span className='text-emerald-400 font-bold'>&quot;help&quot;</span> to explore available commands or press <kbd className='px-1 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-xs text-white'>Tab</kbd> for autocompletion.
					</p>
				</div>
			),
		},
	];

	// Initialize terminal output
	useEffect(() => {
		setHistory(getWelcomeMessage());
	}, []);

	// Auto scroll to bottom
	useEffect(() => {
		if (isOpen) {
			bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
			inputRef.current?.focus();
		}
	}, [history, isOpen]);

	// Global Keyboard Shortcut: Toggle on backtick (`) or Ctrl+~, or custom event
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
				e.preventDefault();
				setIsOpen((prev) => !prev);
			} else if (e.key === 'Escape' && isOpen) {
				setIsOpen(false);
			}
		};

		const handleCustomToggle = () => setIsOpen((prev) => !prev);
		const handleCustomOpen = () => setIsOpen(true);

		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('toggle-terminal', handleCustomToggle);
		window.addEventListener('open-terminal', handleCustomOpen);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('toggle-terminal', handleCustomToggle);
			window.removeEventListener('open-terminal', handleCustomOpen);
		};
	}, [isOpen]);

	// Command Executor
	const executeCommand = useCallback((cmdRaw: string) => {
		const cmdClean = cmdRaw.trim();
		if (!cmdClean) return;

		const [cmdName, ...args] = cmdClean.split(' ');
		const lowerCmd = cmdName.toLowerCase();

		// Add input to history
		const newLines: OutputLine[] = [
			{
				id: Math.random().toString(),
				type: 'input',
				content: (
					<div className='flex items-center gap-2'>
						<span className={`${THEMES[theme].prompt} font-bold`}>akshay@portfolio:~$</span>
						<span className='text-white'>{cmdClean}</span>
					</div>
				),
			},
		];

		// Save to up/down command history
		setCommandHistory((prev) => [...prev, cmdClean]);
		setHistoryIndex(-1);

		switch (lowerCmd) {
			case 'help':
			case '?':
				newLines.push({
					id: Math.random().toString(),
					type: 'output',
					content: (
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-xs md:text-sm my-1'>
							<div><span className='text-emerald-400 font-bold font-mono'>whoami / bio</span> - Overview & roles</div>
							<div><span className='text-emerald-400 font-bold font-mono'>skills</span> - Core tech stack & tools</div>
							<div><span className='text-emerald-400 font-bold font-mono'>projects</span> - Flagship products & demos</div>
							<div><span className='text-emerald-400 font-bold font-mono'>experience</span> - Career history & leadership</div>
							<div><span className='text-emerald-400 font-bold font-mono'>achievements</span> - Global rankings & honors</div>
							<div><span className='text-emerald-400 font-bold font-mono'>metrics</span> - Engineering impact statistics</div>
							<div><span className='text-emerald-400 font-bold font-mono'>certifications</span> - Verified industry credentials</div>
							<div><span className='text-emerald-400 font-bold font-mono'>contact / socials</span> - Connect links</div>
							<div><span className='text-emerald-400 font-bold font-mono'>theme [name]</span> - oled, matrix, cyberpunk, dracula</div>
							<div><span className='text-emerald-400 font-bold font-mono'>matrix</span> - Run digital phosphor rain</div>
							<div><span className='text-emerald-400 font-bold font-mono'>quote</span> - Random tech wisdom</div>
							<div><span className='text-emerald-400 font-bold font-mono'>clear / cls</span> - Clear terminal output</div>
							<div><span className='text-emerald-400 font-bold font-mono'>exit</span> - Close terminal window</div>
						</div>
					),
				});
				break;

			case 'whoami':
			case 'bio':
				newLines.push({
					id: Math.random().toString(),
					type: 'output',
					content: (
						<div className='space-y-2 text-xs md:text-sm my-1 leading-relaxed'>
							<p className='text-white font-bold text-base'>Akshay Kumar — Full Stack Developer</p>
							<p className='text-zinc-300'>
								• <span className='text-emerald-400 font-semibold'>Lead Developer</span> at EduLinkUp
							</p>
							<p className='text-zinc-300'>
								• <span className='text-blue-400 font-semibold'>Web Development Lead</span> at Codeunia
							</p>
							<p className='text-zinc-300'>
								• Ranked <span className='text-yellow-400 font-semibold'>#2 out of 3,424</span> worldwide contributors in GirlScript Summer of Code 2025.
							</p>
							<p className='text-zinc-300'>
								• Recognized by <span className='text-rose-400 font-semibold'>Google for Developers</span> for engineering excellence.
							</p>
							<p className='text-zinc-400 text-xs italic'>
								&quot;I engineer scalable, production-ready web platforms with an obsession for high performance, cloud resilience, and sub-second user experience.&quot;
							</p>
						</div>
					),
				});
				break;

			case 'skills':
			case 'tech':
				newLines.push({
					id: Math.random().toString(),
					type: 'output',
					content: (
						<div className='space-y-3 text-xs md:text-sm my-1'>
							{Object.entries(curatedSkills).map(([catKey, cat]) => (
								<div key={catKey}>
									<div className='text-emerald-400 font-bold uppercase tracking-wider text-xs mb-1'>{cat.title}:</div>
									<div className='flex flex-wrap gap-1.5'>
										{cat.items.map((s) => (
											<span key={s.name} className='px-2 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-zinc-200 text-xs'>
												{s.name}
											</span>
										))}
									</div>
								</div>
							))}
							<div>
								<div className='text-blue-400 font-bold uppercase tracking-wider text-xs mb-1'>Tools & Secondary Stack:</div>
								<div className='flex flex-wrap gap-1.5'>
									{secondarySkills.map((s) => (
										<span key={s.name} className='px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-zinc-400 text-xs'>
											{s.name}
										</span>
									))}
								</div>
							</div>
						</div>
					),
				});
				break;

			case 'projects':
				const showAll = args.includes('--all') || args.includes('-a');
				const projectList = Object.values(allProjects).filter((p) => showAll || p.featured);
				newLines.push({
					id: Math.random().toString(),
					type: 'output',
					content: (
						<div className='space-y-3 text-xs md:text-sm my-1'>
							<p className='text-zinc-400 text-xs'>
								Showing {showAll ? 'all' : 'featured'} projects ({projectList.length}). {(!showAll && 'Use "projects --all" for complete list.')}
							</p>
							<div className='space-y-2'>
								{projectList.map((proj) => (
									<div key={proj.projectName} className='p-2.5 bg-zinc-900/80 border border-zinc-800 rounded-lg'>
										<div className='flex flex-wrap items-center justify-between gap-2'>
											<span className='text-white font-bold'>{proj.projectName}</span>
											<span className='text-xs text-zinc-500'>{proj.fromDate} - {proj.toDate}</span>
										</div>
									<p className='text-zinc-400 text-xs my-1 line-clamp-3'>
										{proj.description.replace(/[#*`_!\[\]()]/g, '')}
									</p>
										<div className='flex items-center gap-3 mt-1.5 text-xs'>
											{proj.viewUrl && (
												<a href={proj.viewUrl} target='_blank' rel='noreferrer' className='text-emerald-400 hover:underline'>
													Live Demo ↗
												</a>
											)}
											{proj.repoUrl && (
												<a href={proj.repoUrl} target='_blank' rel='noreferrer' className='text-blue-400 hover:underline'>
													GitHub Repo ↗
												</a>
											)}
										</div>
									</div>
								))}
							</div>
						</div>
					),
				});
				break;

			case 'experience':
			case 'history':
				newLines.push({
					id: Math.random().toString(),
					type: 'output',
					content: (
						<div className='space-y-2.5 text-xs md:text-sm my-1'>
							{Object.values(allExperiences).map((exp, idx) => (
								<div key={idx} className='border-l-2 border-emerald-500/50 pl-3 py-0.5'>
									<div className='flex flex-wrap items-center justify-between gap-1'>
										<span className='text-white font-bold'>{exp.positionHeld}</span>
										<span className='text-zinc-500 text-xs'>{exp.fromDate} – {exp.toDate}</span>
									</div>
									<div className='text-emerald-400 text-xs font-semibold'>{exp.orgName}</div>
									<p className='text-zinc-400 text-xs mt-1 line-clamp-3'>
										{exp.description.replace(/[#*`_!\[\]()]/g, '')}
									</p>
								</div>
							))}
						</div>
					),
				});
				break;

			case 'achievements':
			case 'awards':
				newLines.push({
					id: Math.random().toString(),
					type: 'output',
					content: (
						<div className='space-y-2 text-xs md:text-sm my-1'>
							<div className='p-2 bg-yellow-500/10 border border-yellow-500/30 rounded'>
								<p className='text-yellow-400 font-bold'>🏆 Rank #2 Globally / 3,424 Developers</p>
								<p className='text-zinc-300 text-xs mt-0.5'>GirlScript Summer of Code 2025 Leaderboard</p>
							</div>
							<div className='p-2 bg-blue-500/10 border border-blue-500/30 rounded'>
								<p className='text-blue-400 font-bold'>⭐ Google for Developers Recognition</p>
								<p className='text-zinc-300 text-xs mt-0.5'>Selected for Google Cloud & Developer advocacy spotlights</p>
							</div>
							<div className='p-2 bg-emerald-500/10 border border-emerald-500/30 rounded'>
								<p className='text-emerald-400 font-bold'>🎓 15+ Industry Certifications</p>
								<p className='text-zinc-300 text-xs mt-0.5'>Google, Microsoft, IBM, Postman, Goldman Sachs, Neo4j, Oracle</p>
							</div>
						</div>
					),
				});
				break;

			case 'certifications':
			case 'certs':
				const certList = Object.values(allCertificates);
				newLines.push({
					id: Math.random().toString(),
					type: 'output',
					content: (
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs my-1'>
							{certList.map((c, i) => (
								<div key={i} className='p-1.5 bg-zinc-900 border border-zinc-800 rounded flex justify-between items-center'>
									<span className='text-white font-medium'>{c.title}</span>
									<span className='text-emerald-400 font-mono text-2xs'>{c.orgName}</span>
								</div>
							))}
						</div>
					),
				});
				break;

			case 'metrics':
			case 'stats':
				newLines.push({
					id: Math.random().toString(),
					type: 'output',
					content: (
						<div className='grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs my-1'>
							{impactMetrics.map((m, i) => (
								<div key={i} className='p-2 bg-zinc-900 border border-zinc-800 rounded text-center'>
									<div className='text-lg md:text-xl font-bold text-emerald-400'>{m.value}{m.suffix}</div>
									<div className='text-2xs text-zinc-400 uppercase tracking-wider mt-0.5'>{m.label}</div>
								</div>
							))}
						</div>
					),
				});
				break;

			case 'contact':
			case 'socials':
				newLines.push({
					id: Math.random().toString(),
					type: 'output',
					content: (
						<div className='space-y-1.5 text-xs md:text-sm my-1 min-w-0'>
							<div className='flex items-center gap-2 min-w-0'>
								<FaEnvelope className='text-rose-400 shrink-0' />
								<span className='text-zinc-400 shrink-0'>Email:</span>
								<a href={SocialUrls.email} className='text-white hover:underline break-all min-w-0'>{SocialUrls.email.replace('mailto:', '')}</a>
							</div>
							<div className='flex items-center gap-2 min-w-0'>
								<FaLinkedin className='text-blue-400 shrink-0' />
								<span className='text-zinc-400 shrink-0'>LinkedIn:</span>
								<a href={SocialUrls.linkedin} target='_blank' rel='noreferrer' className='text-white hover:underline break-all min-w-0'>{SocialUrls.linkedin}</a>
							</div>
							<div className='flex items-center gap-2 min-w-0'>
								<FaGithub className='text-zinc-200 shrink-0' />
								<span className='text-zinc-400 shrink-0'>GitHub:</span>
								<a href={SocialUrls.github} target='_blank' rel='noreferrer' className='text-white hover:underline break-all min-w-0'>{SocialUrls.github}</a>
							</div>
							<div className='flex items-center gap-2 min-w-0'>
								<FaTwitter className='text-cyan-400 shrink-0' />
								<span className='text-zinc-400 shrink-0'>Twitter / X:</span>
								<a href={SocialUrls.twitter} target='_blank' rel='noreferrer' className='text-white hover:underline break-all min-w-0'>{SocialUrls.twitter}</a>
							</div>
							<div className='flex items-center gap-2 min-w-0'>
								<FaDiscord className='text-indigo-400 shrink-0' />
								<span className='text-zinc-400 shrink-0'>Discord:</span>
								<a href={SocialUrls.discord} target='_blank' rel='noreferrer' className='text-white hover:underline break-all min-w-0'>Join Discord</a>
							</div>
						</div>
					),
				});
				break;

			case 'theme':
				const chosenTheme = args[0] as TerminalTheme;
				if (chosenTheme && THEMES[chosenTheme]) {
					setTheme(chosenTheme);
					newLines.push({
						id: Math.random().toString(),
						type: 'success',
						content: <span>Terminal theme updated to <strong className='text-white'>{THEMES[chosenTheme].name}</strong>.</span>,
					});
				} else {
					newLines.push({
						id: Math.random().toString(),
						type: 'error',
						content: (
							<span>
								Usage: <code className='text-white'>theme [oled | matrix | cyberpunk | dracula]</code>
							</span>
						),
					});
				}
				break;

			case 'resume':
			case 'download-resume':
				window.open('/resume.pdf', '_blank');
				newLines.push({
					id: Math.random().toString(),
					type: 'success',
					content: <span>Opening Akshay Kumar&apos;s Resume...</span>,
				});
				break;

			case 'quote':
				const randQuote = DEV_QUOTES[Math.floor(Math.random() * DEV_QUOTES.length)];
				newLines.push({
					id: Math.random().toString(),
					type: 'output',
					content: <p className='text-amber-300 italic my-1 font-serif text-sm'>{randQuote}</p>,
				});
				break;

			case 'matrix':
				newLines.push({
					id: Math.random().toString(),
					type: 'system',
					content: (
						<div className='text-green-500 font-mono text-xs animate-pulse my-1 leading-none overflow-hidden break-all'>
							{Array.from({ length: 8 }).map((_, i) => (
								<div key={i} className='whitespace-pre-wrap'>
									{Array.from({ length: 40 })
										.map(() => String.fromCharCode(33 + Math.floor(Math.random() * 90)))
										.join(' ')}
								</div>
							))}
							<p className='text-white font-bold mt-2'>&quot;Wake up, Neo... The Matrix has you.&quot;</p>
						</div>
					),
				});
				break;

			case 'sudo':
				newLines.push({
					id: Math.random().toString(),
					type: 'error',
					content: (
						<div className='text-rose-400 my-1'>
							Permission denied: Root access is strictly protected inside Akshay&apos;s neural network 🧠
						</div>
					),
				});
				break;

			case 'clear':
			case 'cls':
				setHistory([]);
				return;

			case 'date':
				newLines.push({
					id: Math.random().toString(),
					type: 'output',
					content: <span>{new Date().toString()}</span>,
				});
				break;

			case 'echo':
				newLines.push({
					id: Math.random().toString(),
					type: 'output',
					content: <span>{args.join(' ')}</span>,
				});
				break;

			case 'exit':
			case 'quit':
				setIsOpen(false);
				return;

			default:
				newLines.push({
					id: Math.random().toString(),
					type: 'error',
					content: (
						<div>
							zsh: command not found: <span className='text-rose-400 font-bold'>{cmdClean}</span>. Type <span className='text-emerald-400 underline cursor-pointer' onClick={() => executeCommand('help')}>help</span> for available commands.
						</div>
					),
				});
		}

		setHistory((prev) => [...prev, ...newLines]);
	}, [theme]);

	// Handle KeyDown for Autocomplete & History Navigation
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			executeCommand(inputVal);
			setInputVal('');
		} else if (e.key === 'Tab') {
			e.preventDefault();
			const trimmed = inputVal.trim();
			if (!trimmed) return;
			const match = COMMANDS_LIST.find((c) => c.startsWith(trimmed.toLowerCase()));
			if (match) {
				setInputVal(match);
			}
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			if (commandHistory.length === 0) return;
			const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
			setHistoryIndex(nextIdx);
			setInputVal(commandHistory[nextIdx]);
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			if (commandHistory.length === 0 || historyIndex === -1) return;
			const nextIdx = historyIndex + 1;
			if (nextIdx >= commandHistory.length) {
				setHistoryIndex(-1);
				setInputVal('');
			} else {
				setHistoryIndex(nextIdx);
				setInputVal(commandHistory[nextIdx]);
			}
		}
	};

	const currentTheme = THEMES[theme];

	return (
		<>
			{/* Floating Quick Access Pill */}
			<motion.button
				onClick={() => setIsOpen(true)}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className='fixed bottom-5 left-5 z-[90] flex items-center gap-2.5 px-3.5 py-2 bg-zinc-950/90 backdrop-blur-md border border-white/15 text-white rounded-full shadow-2xl hover:border-emerald-400/50 transition-colors group cursor-pointer'
				aria-label='Open Terminal'
			>
				<span className='relative flex h-2 w-2'>
					<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
					<span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
				</span>
				<FaTerminal className='text-emerald-400 text-xs' />
				<span className='text-xs font-mono font-medium tracking-wide'>&gt;_ CLI</span>
				<kbd className='hidden sm:inline-block px-1.5 py-0.2 bg-zinc-800/80 border border-zinc-700/60 rounded text-[10px] text-zinc-400 font-mono'>
					`
				</kbd>
			</motion.button>

			{/* Modal Terminal Window */}
			<AnimatePresence>
				{isOpen && (
					<div className='fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm'>
						<motion.div
							initial={{ opacity: 0, scale: 0.92, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.92, y: 20 }}
							transition={{ type: 'spring', damping: 25, stiffness: 300 }}
							onClick={(e) => {
								e.stopPropagation();
								inputRef.current?.focus();
							}}
							className={`relative flex flex-col w-full shadow-2xl rounded-xl overflow-hidden border backdrop-blur-xl ${currentTheme.bg} ${currentTheme.border} ${
								isMaximized ? 'h-[95vh] max-w-[96vw]' : 'h-[540px] max-h-[85vh] max-w-3xl'
							} transition-all duration-200`}
						>
							{/* macOS Style Title Bar */}
							<div className='flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-white/10 select-none'>
								{/* Traffic Lights */}
								<div className='flex items-center gap-2'>
									<button
										onClick={() => setIsOpen(false)}
										className='w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center group'
										title='Close (Esc)'
									>
										<FaTimes className='text-red-900 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity' />
									</button>
									<button
										onClick={() => setIsOpen(false)}
										className='w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors'
										title='Minimize'
									/>
									<button
										onClick={() => setIsMaximized((prev) => !prev)}
										className='w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors flex items-center justify-center group'
										title='Toggle Fullscreen'
									>
										{isMaximized ? (
											<FaCompress className='text-green-900 text-[7px] opacity-0 group-hover:opacity-100' />
										) : (
											<FaExpand className='text-green-900 text-[7px] opacity-0 group-hover:opacity-100' />
										)}
									</button>
								</div>

								{/* Center Title */}
								<div className='flex items-center gap-2 text-xs font-mono text-zinc-400'>
									<FaTerminal className='text-emerald-400 text-2xs' />
									<span>akshay@portfolio: ~ (zsh)</span>
								</div>

								{/* Theme Badges */}
								<div className='flex items-center gap-1.5'>
									{(['oled', 'matrix', 'cyberpunk', 'dracula'] as TerminalTheme[]).map((t) => (
										<button
											key={t}
											onClick={() => setTheme(t)}
											className={`w-2.5 h-2.5 rounded-full border ${
												theme === t ? 'scale-125 border-white' : 'opacity-40 border-transparent'
											} ${
												t === 'oled'
													? 'bg-zinc-700'
													: t === 'matrix'
													? 'bg-green-500'
													: t === 'cyberpunk'
													? 'bg-pink-500'
													: 'bg-purple-500'
											}`}
											title={`Theme: ${t}`}
										/>
									))}
								</div>
							</div>

						{/* Terminal Output Body */}
						<div className={`flex-1 p-4 overflow-y-auto overflow-x-hidden font-mono text-xs md:text-sm space-y-2 ${currentTheme.text} scrollbar-thin`}>
							{history.map((line) => (
								<div key={line.id} className='leading-relaxed break-words min-w-0'>
									{line.content}
								</div>
							))}

								{/* Active Prompt Line */}
								<div className='flex items-center gap-2 pt-1 min-w-0'>
									<span className={`${currentTheme.prompt} font-bold select-none shrink-0`}>akshay@portfolio:~$</span>
									<input
										ref={inputRef}
										type='text'
										value={inputVal}
										onChange={(e) => setInputVal(e.target.value)}
										onKeyDown={handleKeyDown}
										autoFocus
										spellCheck={false}
										autoComplete='off'
										className={`flex-1 bg-transparent outline-none border-none p-0 m-0 min-w-0 ${currentTheme.text} caret-emerald-400`}
									/>
								</div>
								<div className='text-zinc-500 text-[10px] mt-0.5 select-none'>
									Type <span className='text-emerald-400/70 font-semibold'>help</span> for commands · <span className='text-emerald-400/70 font-semibold'>Tab</span> to autocomplete
								</div>

								<div ref={bottomRef} />
							</div>

							{/* Terminal Footer Quick Links */}
							<div className='flex flex-wrap items-center justify-between px-4 py-2 bg-zinc-950/80 border-t border-white/5 text-[11px] font-mono text-zinc-500 overflow-hidden min-w-0'>
								<div className='flex items-center gap-3 overflow-x-auto min-w-0 shrink'>
									<span className='hidden sm:inline shrink-0'>Quick actions:</span>
									<button onClick={() => executeCommand('skills')} className='hover:text-emerald-400 hover:underline whitespace-nowrap'>
										skills
									</button>
									<button onClick={() => executeCommand('projects')} className='hover:text-emerald-400 hover:underline whitespace-nowrap'>
										projects
									</button>
									<button onClick={() => executeCommand('whoami')} className='hover:text-emerald-400 hover:underline whitespace-nowrap'>
										whoami
									</button>
									<button onClick={() => executeCommand('contact')} className='hover:text-emerald-400 hover:underline whitespace-nowrap'>
										contact
									</button>
								</div>
								<div className='hidden sm:block text-zinc-600 shrink-0'>
									Press <kbd className='px-1 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-[9px]'>Tab</kbd> to autocomplete · <kbd className='px-1 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-[9px]'>Esc</kbd> to exit
								</div>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</>
	);
}
