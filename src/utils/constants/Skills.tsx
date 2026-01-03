import { ReactNode } from 'react';
import {
	FaCss3,
	FaDocker,
	FaGitAlt,
	FaGithub,
	FaJs,
	FaNodeJs,
	FaReact,
	FaSass,
	FaBrain,
	FaRobot,
	FaNetworkWired,
	FaProjectDiagram,
	FaCloud,
	FaCloudversify,
	FaSitemap,
	FaPlug,
	FaExchangeAlt,
	FaDatabase,
} from 'react-icons/fa';
import {
	SiExpress,
	SiMongodb,
	SiTailwindcss,
	SiTypescript,
	SiPostgresql,
	SiSupabase,
	SiFirebase,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export interface skillInterface {
	name: string;
	icon: ReactNode;
	bgcolor: string;
	id: string;
	link: string;
	color?: string;
}

export const curatedSkills = {
	core: {
		title: 'Core Stack',
		items: [
			{
				name: 'JavaScript / TypeScript',
				icon: (
					<div className='flex gap-1'>
						<FaJs /> <SiTypescript />
					</div>
				),
				bgcolor: '#f7df1e',
				color: 'black',
				id: 'skill_js_ts',
				link: 'https://www.typescriptlang.org/',
			},
			{
				name: 'React & Next.js',
				icon: (
					<div className='flex gap-1'>
						<FaReact /> <TbBrandNextjs />
					</div>
				),
				bgcolor: '#61dafb',
				color: 'black',
				id: 'skill_react_next',
				link: 'https://nextjs.org/',
			},
			{
				name: 'Node.js & Express',
				icon: (
					<div className='flex gap-1'>
						<FaNodeJs /> <SiExpress />
					</div>
				),
				bgcolor: '#339933',
				id: 'skill_node_express',
				link: 'https://expressjs.com/',
			},
			{
				name: 'MongoDB',
				icon: <SiMongodb />,
				bgcolor: '#47a248',
				id: 'skill_mongodb',
				link: 'https://www.mongodb.com/',
			},
		],
	},
	ai: {
		title: 'AI & Automation',
		items: [
			{
				name: 'AI/ML integrations',
				icon: <FaRobot />,
				bgcolor: '#6a1b9a',
				id: 'skill_ai_ml',
				link: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
			},
			{
				name: 'API-driven automation',
				icon: <FaNetworkWired />,
				bgcolor: '#0288d1',
				id: 'skill_api_automation',
				link: 'https://en.wikipedia.org/wiki/Automation',
			},
			{
				name: 'Background jobs & workflows',
				icon: <FaProjectDiagram />,
				bgcolor: '#ff9800',
				id: 'skill_workflows',
				link: 'https://en.wikipedia.org/wiki/Workflow',
			},
		],
	},
	cloud: {
		title: 'Cloud & Architecture',
		items: [
			{
				name: 'Google Cloud Platform',
				icon: <FaCloud />,
				bgcolor: '#4285F4',
				id: 'skill_gcp',
				link: 'https://cloud.google.com/',
			},
			{
				name: 'Cloud-native deployment',
				icon: <FaCloudversify />,
				bgcolor: '#34A853',
				id: 'skill_cloud_native',
				link: 'https://en.wikipedia.org/wiki/Cloud_native_computing',
			},
			{
				name: 'Scalable backend architectures',
				icon: <FaSitemap />,
				bgcolor: '#673ab7',
				id: 'skill_scalable_arch',
				link: 'https://en.wikipedia.org/wiki/Scalability',
			},
		],
	},
};

export const secondarySkills: skillInterface[] = [
	{
		name: 'Tailwind CSS',
		icon: <SiTailwindcss />,
		bgcolor: '#38bdf8',
		id: 'skill_tailwind',
		link: 'https://tailwindcss.com/',
	},
	{
		name: 'Sass',
		icon: <FaSass />,
		bgcolor: '#cd6799',
		id: 'skill_sass',
		link: 'https://sass-lang.com/',
	},
	{
		name: 'PostgreSQL / Supabase / Firebase',
		icon: (
			<div className='flex gap-1'>
				<SiPostgresql /> <SiSupabase /> <SiFirebase />
			</div>
		),
		bgcolor: '#336791',
		id: 'skill_db_platforms',
		link: 'https://www.postgresql.org/',
	},
	{
		name: 'Git & GitHub',
		icon: (
			<div className='flex gap-1'>
				<FaGitAlt /> <FaGithub />
			</div>
		),
		bgcolor: '#f05032',
		id: 'skill_git_github',
		link: 'https://github.com/',
	},
	{
		name: 'Docker',
		icon: <FaDocker />,
		bgcolor: '#2496ed',
		id: 'skill_docker',
		link: 'https://www.docker.com/',
	},
	{
		name: 'REST APIs',
		icon: <FaPlug />,
		bgcolor: '#00bcd4',
		id: 'skill_rest_api',
		link: 'https://en.wikipedia.org/wiki/Representational_state_transfer',
	},
];

// Fallback for any other components that still expect allSkills
export const allSkills = [
	...curatedSkills.core.items,
	...curatedSkills.ai.items,
	...curatedSkills.cloud.items,
	...secondarySkills,
];
