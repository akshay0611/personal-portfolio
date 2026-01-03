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
	SiVite,
	SiVercel,
	SiFramer,
	SiPostman,
	SiNeo4J,
	SiOracle,
	SiGooglecloud,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaSearch, FaChartLine, FaUsers, FaLightbulb, FaShieldAlt, FaCogs, FaCode } from 'react-icons/fa';

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

const projectSkills: skillInterface[] = [
	{ name: 'Node.js', icon: <FaNodeJs />, bgcolor: '#339933', id: 'skill_nodejs', link: 'https://nodejs.org' },
	{ name: 'Postman', icon: <SiPostman />, bgcolor: '#FF6C37', id: 'skill_postmantoolusage', link: 'https://postman.com' },
	{ name: 'Next.js', icon: <TbBrandNextjs />, bgcolor: '#FFFFFF', id: 'skill_nextjs', link: 'https://nextjs.org' },
	{ name: 'TypeScript', icon: <SiTypescript />, bgcolor: '#3178C6', id: 'skill_typescript', link: 'https://typescriptlang.org' },
	{ name: 'React', icon: <FaReact />, bgcolor: '#61DAFB', id: 'skill_reactjs', link: 'https://react.dev' },
	{ name: 'Express', icon: <SiExpress />, bgcolor: '#FFFFFF', id: 'skill_expressjs', link: 'https://expressjs.com' },
	{ name: 'Vite', icon: <SiVite />, bgcolor: '#646CFF', id: 'skill_vite', link: 'https://vitejs.dev' },
	{ name: 'Vercel', icon: <SiVercel />, bgcolor: '#FFFFFF', id: 'skill_vercel', link: 'https://vercel.com' },
	{ name: 'ShadCN', icon: <FaCode />, bgcolor: '#FFFFFF', id: 'skill_shadcn', link: 'https://ui.shadcn.com' },
	{ name: 'Framer Motion', icon: <SiFramer />, bgcolor: '#0055FF', id: 'skill_framer_motion', link: 'https://www.framer.com/motion/' },
	{ name: 'Supabase', icon: <SiSupabase />, bgcolor: '#3ECF8E', id: 'skill_supabase', link: 'https://supabase.com' },
];

const certificateSkills: skillInterface[] = [
	// Digital Marketing
	{ name: 'SEO', icon: <FaSearch />, bgcolor: '#4285F4', id: 'skill_seo', link: '#' },
	{ name: 'SMM', icon: <FaUsers />, bgcolor: '#4267B2', id: 'skill_smm', link: '#' },
	{ name: 'Content Marketing', icon: <FaLightbulb />, bgcolor: '#F4B400', id: 'skill_contentmarketing', link: '#' },
	{ name: 'Email Marketing', icon: <FaCogs />, bgcolor: '#EA4335', id: 'skill_emailmarketing', link: '#' },
	{ name: 'Web Analytics', icon: <FaChartLine />, bgcolor: '#F4B400', id: 'skill_webanalytics', link: '#' },

	// Start Advertising
	{ name: 'Search Ads', icon: <FaSearch />, bgcolor: '#00A4EF', id: 'skill_searchadvertising', link: '#' },
	{ name: 'Campaign Opt', icon: <FaChartLine />, bgcolor: '#00A4EF', id: 'skill_campaignoptimization', link: '#' },
	{ name: 'Performance Analysis', icon: <FaChartLine />, bgcolor: '#00A4EF', id: 'skill_performanceanalysis', link: '#' },
	{ name: 'Targeting', icon: <FaUsers />, bgcolor: '#00A4EF', id: 'skill_targetingstrategies', link: '#' },

	// SQL
	{ name: 'SQL', icon: <FaDatabase />, bgcolor: '#003B57', id: 'skill_sql', link: '#' },
	{ name: 'Data Retrieval', icon: <FaDatabase />, bgcolor: '#003B57', id: 'skill_dataretrieval', link: '#' },
	{ name: 'Data Aggregation', icon: <FaChartLine />, bgcolor: '#003B57', id: 'skill_dataaggregation', link: '#' },
	{ name: 'Joins', icon: <FaProjectDiagram />, bgcolor: '#003B57', id: 'skill_joins', link: '#' },
	{ name: 'Data Manipulation', icon: <FaDatabase />, bgcolor: '#003B57', id: 'skill_datamanipulation', link: '#' },
	{ name: 'Advanced Joins', icon: <FaProjectDiagram />, bgcolor: '#003B57', id: 'skill_advancedjoins', link: '#' },
	{ name: 'Subqueries', icon: <FaCode />, bgcolor: '#003B57', id: 'skill_subqueries', link: '#' },
	{ name: 'Window Functions', icon: <FaCode />, bgcolor: '#003B57', id: 'skill_windowfunctions', link: '#' },
	{ name: 'Query Optimization', icon: <FaCogs />, bgcolor: '#003B57', id: 'skill_queryoptimization', link: '#' },
	{ name: 'Data Transformation', icon: <FaExchangeAlt />, bgcolor: '#003B57', id: 'skill_datatransformation', link: '#' },

	// Design Thinking (Generic -> White)
	{ name: 'Design Thinking', icon: <FaLightbulb />, bgcolor: '#FFFFFF', id: 'skill_designthinking', link: '#' },
	{ name: 'Collab Problem Solving', icon: <FaUsers />, bgcolor: '#FFFFFF', id: 'skill_collaborativeproblem-solving', link: '#' },
	{ name: 'User-Centered Design', icon: <FaUsers />, bgcolor: '#FFFFFF', id: 'skill_user-centereddesign', link: '#' },
	{ name: 'Prototyping', icon: <FaCode />, bgcolor: '#FFFFFF', id: 'skill_prototyping', link: '#' },
	{ name: 'Innovation', icon: <FaLightbulb />, bgcolor: '#FFFFFF', id: 'skill_innovation', link: '#' },
	{ name: 'Enterprise Integration', icon: <FaProjectDiagram />, bgcolor: '#FFFFFF', id: 'skill_enterpriseintegration', link: '#' },
	{ name: 'Enterprise Innovation', icon: <FaLightbulb />, bgcolor: '#FFFFFF', id: 'skill_enterpriseinnovation', link: '#' },
	{ name: 'Collaboration', icon: <FaUsers />, bgcolor: '#FFFFFF', id: 'skill_collaboration', link: '#' },
	{ name: 'Facilitation', icon: <FaUsers />, bgcolor: '#FFFFFF', id: 'skill_facilitation', link: '#' },
	{ name: 'Scalable Solutions', icon: <FaChartLine />, bgcolor: '#FFFFFF', id: 'skill_scalablesolutions', link: '#' },

	// AI (Purple theme)
	{ name: 'Responsible AI', icon: <FaShieldAlt />, bgcolor: '#A78BFA', id: 'skill_responsibleAI', link: '#' },
	{ name: 'Team Alignment', icon: <FaUsers />, bgcolor: '#FFFFFF', id: 'skill_teamalignment', link: '#' },
	{ name: 'Data Integrity', icon: <FaDatabase />, bgcolor: '#FFFFFF', id: 'skill_dataintegrity', link: '#' },
	{ name: 'AI Design', icon: <FaRobot />, bgcolor: '#A78BFA', id: 'skill_aidesign', link: '#' },
	{ name: 'AI', icon: <FaRobot />, bgcolor: '#A78BFA', id: 'skill_ai', link: '#' },
	{ name: 'Machine Learning', icon: <FaBrain />, bgcolor: '#A78BFA', id: 'skill_machinelearning', link: '#' },
	{ name: 'Data Science', icon: <FaChartLine />, bgcolor: '#A78BFA', id: 'skill_datascience', link: '#' },
	{ name: 'Neural Networks', icon: <FaProjectDiagram />, bgcolor: '#A78BFA', id: 'skill_neuralnetworks', link: '#' },
	{ name: 'Generative AI', icon: <FaRobot />, bgcolor: '#A78BFA', id: 'skill_generativeAI', link: '#' },
	{ name: 'AI Integration', icon: <FaPlug />, bgcolor: '#A78BFA', id: 'skill_aiIntegration', link: '#' },
	{ name: 'Productivity Tools', icon: <FaCogs />, bgcolor: '#FFFFFF', id: 'skill_productivityTools', link: '#' },
	{ name: 'AI Applications', icon: <FaRobot />, bgcolor: '#A78BFA', id: 'skill_aiApplications', link: '#' },
	{ name: 'AI Prompting', icon: <FaCode />, bgcolor: '#A78BFA', id: 'skill_aiPrompting', link: '#' },
	{ name: 'Resource Creation', icon: <FaLightbulb />, bgcolor: '#FFFFFF', id: 'skill_classroomResourceCreation', link: '#' },


	// Security (Red theme)
	{ name: 'Cybersecurity', icon: <FaShieldAlt />, bgcolor: '#EF4444', id: 'skill_cybersecurity', link: '#' },
	{ name: 'Risk Management', icon: <FaShieldAlt />, bgcolor: '#EF4444', id: 'skill_riskmanagement', link: '#' },
	{ name: 'Encryption', icon: <FaCode />, bgcolor: '#EF4444', id: 'skill_encryption', link: '#' },
	{ name: 'Authentication', icon: <FaShieldAlt />, bgcolor: '#EF4444', id: 'skill_authentication', link: '#' },
	{ name: 'Network Security', icon: <FaNetworkWired />, bgcolor: '#EF4444', id: 'skill_networksecurity', link: '#' },
	{ name: 'Password Security', icon: <FaShieldAlt />, bgcolor: '#EF4444', id: 'skill_passwordsecurity', link: '#' },
	{ name: 'Software Engineering', icon: <FaCode />, bgcolor: '#3B82F6', id: 'skill_softwareengineering', link: '#' },
	{ name: 'Critical Thinking', icon: <FaBrain />, bgcolor: '#FFFFFF', id: 'skill_criticalthinking', link: '#' },
	{ name: 'Time Management', icon: <FaCogs />, bgcolor: '#FFFFFF', id: 'skill_timemanagement', link: '#' },

	// API
	{ name: 'API Basics', icon: <FaPlug />, bgcolor: '#FF6C37', id: 'skill_apibasics', link: '#' },
	{ name: 'API Dev/Test', icon: <FaCogs />, bgcolor: '#FF6C37', id: 'skill_apidevelopmenttesting', link: '#' },
	{ name: 'Automation', icon: <FaCogs />, bgcolor: '#FF6C37', id: 'skill_automationintegration', link: '#' },

	// Database / Cloud
	{ name: 'Graph DB', icon: <FaProjectDiagram />, bgcolor: '#008CC1', id: 'skill_graphDatabases', link: '#' },
	{ name: 'Neo4j', icon: <SiNeo4J />, bgcolor: '#008CC1', id: 'skill_Neo4j', link: '#' },
	{ name: 'Data Modeling', icon: <FaProjectDiagram />, bgcolor: '#008CC1', id: 'skill_dataModeling', link: '#' },
	{ name: 'Graph Tech', icon: <FaProjectDiagram />, bgcolor: '#008CC1', id: 'skill_GraphTechnology', link: '#' },
	{ name: 'Google Cloud', icon: <SiGooglecloud />, bgcolor: '#4285F4', id: 'skill_GoogleCloud', link: '#' },
	{ name: 'Cloud Arch', icon: <FaCloud />, bgcolor: '#4285F4', id: 'skill_cloudArchitecture', link: '#' },
	{ name: 'Cloud Security', icon: <FaShieldAlt />, bgcolor: '#4285F4', id: 'skill_cloudSecurity', link: '#' },
	{ name: 'Cloud Computing', icon: <FaCloud />, bgcolor: '#4285F4', id: 'skill_cloudComputing', link: '#' },
	{ name: 'Oracle', icon: <SiOracle />, bgcolor: '#F80000', id: 'skill_oracle', link: '#' },
	{ name: 'Data Platform', icon: <FaDatabase />, bgcolor: '#F80000', id: 'skill_dataPlatform', link: '#' },
	{ name: 'Cloud', icon: <FaCloud />, bgcolor: '#F80000', id: 'skill_cloud', link: '#' },
	{ name: 'Foundations', icon: <FaLightbulb />, bgcolor: '#F80000', id: 'skill_foundations', link: '#' },

];

// Fallback for any other components that still expect allSkills
export const allSkills = [
	...curatedSkills.core.items,
	...curatedSkills.ai.items,
	...curatedSkills.cloud.items,
	...secondarySkills,
	...projectSkills,
	...certificateSkills,
];
