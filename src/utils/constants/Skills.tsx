import { ReactNode } from 'react';
import {
	FaAngular,
	FaApple,
	FaCss3,
	FaDiscord,
	FaDocker,
	FaFigma,
	FaGitAlt,
	FaGithub,
	FaHtml5,
	FaJava,
	FaJs,
	FaNodeJs,
	FaPython,
	FaReact,
	FaSass,
	FaUbuntu,
	FaWindows,
	FaSearch,
	FaFacebook,
	FaEnvelope,
	FaChartLine,
	FaPen,
	FaSearchDollar,
	FaBullseye,
	FaChartBar,
	FaCrosshairs,
	FaBrain,
	FaRobot,
	FaNetworkWired,
	FaShieldAlt,
	FaExclamationTriangle,
	FaLock,
	FaKey,
	FaWifi,
	FaHandsHelping,
	FaUserAlt,
	FaCogs,
	FaLightbulb,
	FaBuilding,
	FaDatabase,
	FaLink,
	FaPencilAlt,
	FaLaptopCode, 
	FaUsers,
	FaClock,
	FaPlug,
	FaPaperPlane,
	FaProjectDiagram,
    FaSearchPlus,
    FaWindowRestore,
    FaExchangeAlt,
	FaHandshake,
	FaBalanceScale,
	FaKeyboard,
	FaChalkboardTeacher,
	FaTools   



} from 'react-icons/fa';
import {
	SiAntdesign,
	SiChakraui,
	SiExpress,
	SiHeroku,
	SiIntellijidea,
	SiJquery,
	SiManjaro,
	SiMaterialui,
	SiMongodb,
	SiMysql,
	SiNetlify,
	SiRedux,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiVisualstudiocode,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import CIcon from '../../assets/icons/c-original.svg';
import CppIcon from '../../assets/icons/cplusplus-original.svg';
import Matlab from '../../assets/icons/matlab.svg';
import PrimeReactLogo from '../../assets/icons/primereact-logo.svg';
import NivoLogo from '../../assets/icons/nivo-logo.svg';
import { BsBootstrap, BsPieChart } from 'react-icons/bs';

export const Categories = [
	{ id: 'ai_data_science', name: 'AI and Data Science Skills' }, 
	{ id: 'cybersecurity', name: 'Cybersecurity Skills' },
	{ id: 'frontend', name: 'Frontend Development' },
	{ id: 'backend', name: 'Backend Development' },
	{ id: 'language', name: 'Programming Language' },
	{ id: 'framework', name: 'Framework' },
	{ id: 'database', name: 'Database System' }, 
	{ id: 'digital_marketing', name: 'Digital Marketing Skills' },
	{ id: 'hosting', name: 'Hosting Platform' },
	{ id: 'software', name: 'Software' },
	{ id: 'editor', name: 'Code Editor' },
	{ id: 'library', name: 'Software Library' },
	{ id: 'scripting', name: 'Scripting Language' },
	{ id: 'os', name: 'Operating System' },
	{ id: 'design thinking', name: 'Design Thinking' }
];
  

const CategoriesId = Categories.map((e) => e.id);

export type CategoriesType = (typeof CategoriesId)[number];

export interface skillInterface {
	name: string;
	icon: ReactNode;
	bgcolor: string;
	id: string;
	link: string;
	color?: string;
	category?: CategoriesType[];
}

export const allSkills: skillInterface[] = [
	// {
	// 	name: 'C',
	// 	icon: <CIcon height='1em' />,
	// 	bgcolor: 'rgb(4, 99, 172)',
	// 	link: 'https://devdocs.io/c/',
	// 	id: 'skill_c',
	// 	category: ['language'],
	// },
	{
		name: 'C++',
		icon: <CppIcon height='1em' />,
		bgcolor: '#af0443',
		link: 'https://devdocs.io/cpp/',
		id: 'skill_cpp',
		category: ['language'],
	},
	// {
	// 	name: 'Java',
	// 	icon: <FaJava />,
	// 	bgcolor: '#f89820',
	// 	link: 'https://docs.oracle.com/en/java/',
	// 	color: 'black',
	// 	id: 'skill_java',
	// 	category: ['language'],
	// },
	{
		name: 'Python',
		icon: <FaPython />,
		bgcolor: '#306998',
		link: 'https://docs.python.org/3/',
		id: 'skill_python',
		category: ['language'],
	},
	{
		name: 'HTML',
		icon: <FaHtml5 />,
		bgcolor: '#E34F26',
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		id: 'skill_html',
		category: ['language', 'frontend'],
	},
	{
		name: 'CSS',
		icon: <FaCss3 />,
		bgcolor: '#264de4',
		link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		id: 'skill_css',
		category: ['language', 'frontend'],
	},
	{
		name: 'JavaScript',
		icon: <FaJs />,
		bgcolor: '#F0DB4F',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		color: '#323330',
		id: 'skill_javascript',
		category: ['language', 'frontend'],
	},
	{
		name: 'TypeScript',
		icon: <SiTypescript />,
		bgcolor: '#007acc',
		link: 'https://www.typescriptlang.org/',
		id: 'skill_typescript',
		category: ['language', 'frontend'],
	},
	{
		name: 'Next.js',
		icon: <TbBrandNextjs />,
		bgcolor: 'white',
		link: 'https://nextjs.org/',
		color: 'black',
		id: 'skill_nextjs',
		category: ['framework', 'frontend'],
	},
	{
		name: 'React.js',
		icon: <FaReact />,
		bgcolor: '#61DBFB',
		link: 'https://reactjs.org/docs/getting-started.html',
		color: 'black',
		id: 'skill_reactjs',
		category: ['framework', 'frontend'],
	},
	// {
	// 	name: 'Angular.js',
	// 	icon: <FaAngular />,
	// 	bgcolor: '#a6120d',
	// 	link: 'https://angularjs.org/',
	// 	id: 'skill_angularjs',
	// 	category: ['framework', 'frontend'],
	// },
	{
		name: 'Node.js',
		icon: <FaNodeJs />,
		bgcolor: '#3c873a',
		link: 'https://nodejs.org/en/',
		id: 'skill_nodejs',
		category: ['framework', 'backend'],
	},
	{
		name: 'Express.js',
		icon: <SiExpress />,
		bgcolor: '#fff',
		link: 'https://expressjs.com/',
		color: 'black',
		id: 'skill_expressjs',
		category: ['framework', 'backend'],
	},
	// {
	// 	name: 'Redux',
	// 	icon: <SiRedux />,
	// 	bgcolor: '#BA8FFF',
	// 	link: 'https://redux-toolkit.js.org/',
	// 	id: 'skill_redux',
	// 	category: ['framework', 'library', 'frontend'],
	// },
	{
		name: 'MongoDB',
		icon: <SiMongodb />,
		bgcolor: '#4DB33D',
		link: 'https://www.mongodb.com/docs/',
		color: '#3F3E42',
		id: 'skill_mongodb',
		category: ['database', 'backend'],
	},
	// {
	// 	name: 'Discord.js',
	// 	icon: <FaDiscord />,
	// 	bgcolor: 'rgb(88 101 242)',
	// 	link: 'https://discord.js.org/',
	// 	id: 'skill_discordjs',
	// 	category: ['framework'],
	// },
	// {
	// 	name: 'Matlab',
	// 	icon: <Matlab height='1em' />,
	// 	bgcolor: '#f51300',
	// 	link: 'https://mathworks.com/help/matlab/',
	// 	id: 'skill_matlab',
	// 	category: ['language', 'software'],
	// },
	{
		name: 'Sass',
		icon: <FaSass />,
		bgcolor: '#CD6799',
		link: 'https://sass-lang.com/',
		id: 'skill_sass',
		category: ['language', 'scripting', 'frontend'],
	},
	{
		name: 'Tailwind CSS',
		icon: <SiTailwindcss />,
		bgcolor: '#38bdf8',
		link: 'https://tailwindcss.com/',
		color: 'black',
		id: 'skill_tailwindcss',
		category: ['framework', 'frontend'],
	},
	// {
	// 	name: 'Ant designs',
	// 	icon: <SiAntdesign />,
	// 	bgcolor: '#1677FF',
	// 	link: 'https://ant.design/',
	// 	id: 'skill_antd',
	// 	category: ['framework', 'library', 'frontend'],
	// },
	{
		name: 'Material UI',
		icon: <SiMaterialui />,
		bgcolor: '#007FFF',
		link: 'https://mui.com/',
		id: 'skill_materialui',
		category: ['framework', 'library', 'frontend'],
	},
	// {
	// 	name: 'Chakra UI',
	// 	icon: <SiChakraui />,
	// 	bgcolor: '#4FD1C5',
	// 	link: 'https://chakra-ui.com/',
	// 	id: 'skill_chakraui',
	// 	category: ['framework', 'library', 'frontend'],
	// },
	// {
	// 	name: 'Prime React',
	// 	icon: <PrimeReactLogo />,
	// 	bgcolor: '#06c4e8',
	// 	link: 'https://primereact.org/',
	// 	id: 'skill_primereact',
	// 	category: ['framework', 'library', 'frontend'],
	// },
	// {
	// 	name: 'Nivo.rocks',
	// 	icon: <NivoLogo />,
	// 	bgcolor: '#e1cf2c',
	// 	link: 'https://nivo.rocks/',
	// 	id: 'skill_nivorocks',
	// 	category: ['framework', 'library', 'frontend'],
	// },
	{
		name: 'Bootstrap',
		icon: <BsBootstrap />,
		bgcolor: '#8012f4',
		link: 'https://getbootstrap.com/',
		id: 'skill_bootstrap',
		category: ['framework', 'library', 'frontend'],
	},
	{
		name: 'JQuery',
		icon: <SiJquery />,
		bgcolor: '#0769AD',
		link: 'https://jquery.com/',
		id: 'skill_jquery',
		category: ['framework', 'frontend'],
	},
	// {
	// 	name: 'JavaFx',
	// 	icon: <FaJava />,
	// 	bgcolor: '#f89820',
	// 	link: 'https://openjfx.io/',
	// 	color: 'black',
	// 	id: 'skill_javafx',
	// 	category: ['framework', 'backend'],
	// },
	{
		name: 'MySQL',
		icon: <SiMysql />,
		bgcolor: '#f29111',
		link: 'https://www.mysql.com/',
		color: '#2c2c2c',
		id: 'skill_mysql',
		category: ['database', 'backend'],
	},
	{
		name: 'Git',
		icon: <FaGitAlt />,
		bgcolor: '#F1502F',
		link: 'https://git-scm.com/doc',
		id: 'skill_git',
		category: ['software'],
	},
	{
		name: 'GitHub',
		icon: <FaGithub />,
		bgcolor: 'white',
		link: 'https://github.com',
		color: '#171515',
		id: 'skill_github',
		category: ['software'],
	},
	// {
	// 	name: 'Docker',
	// 	icon: <FaDocker />,
	// 	bgcolor: '#0db7ed',
	// 	link: 'https://www.docker.com/',
	// 	color: '#0db7ed',
	// 	id: 'skill_docker',
	// 	category: ['software'],
	// },
	{
		name: 'VS Code',
		icon: <SiVisualstudiocode />,
		bgcolor: '#0065A9',
		link: 'https://code.visualstudio.com/',
		id: 'skill_vscode',
		category: ['software', 'editor'],
	},
	// {
	// 	name: 'IntelliJ',
	// 	icon: <SiIntellijidea />,
	// 	bgcolor: '#ff318c',
	// 	link: 'https://www.jetbrains.com/idea/',
	// 	id: 'skill_intellij',
	// 	category: ['software', 'ide', 'editor'],
	// },
	// {
	// 	name: 'Figma',
	// 	icon: <FaFigma />,
	// 	bgcolor: '#a159ff',
	// 	link: 'https://www.figma.com/',
	// 	id: 'skill_figma',
	// 	category: ['software', 'design'],
	// },
	{
		name: 'Vercel',
		icon: <SiVercel />,
		bgcolor: '#ffffff',
		link: 'https://vercel.com/',
		id: 'skill_vercel',
		category: ['software', 'hosting'],
	},
	{
		name: 'Heroku',
		icon: <SiHeroku />,
		bgcolor: '#6762A6',
		link: 'https://heroku.com/',
		id: 'skill_heroku',
		category: ['software', 'hosting'],
	},
	{
		name: 'Netlify',
		icon: <SiNetlify />,
		bgcolor: '#00C7B7',
		link: 'https://netlify.com/',
		id: 'skill_netlify',
		category: ['software', 'hosting'],
	},
	// {
	// 	name: 'Ubuntu (Debian)',
	// 	icon: <FaUbuntu />,
	// 	bgcolor: '#E95420',
	// 	link: 'https://ubuntu.com/',
	// 	id: 'skill_ubuntu',
	// 	category: ['os'],
	// },
	// {
	// 	name: 'Manjaro (Arch)',
	// 	icon: <SiManjaro />,
	// 	bgcolor: '#34BE5B',
	// 	link: 'https://manjaro.org/',
	// 	color: 'black',
	// 	id: 'skill_manjaro',
	// 	category: ['os'],
	// },
	{
		name: 'Mac OS',
		icon: <FaApple />,
		bgcolor: 'white',
		link: 'https://apple.com',
		color: 'black',
		id: 'skill_macos',
		category: ['os'],
	},
	{
		name: 'Windows OS',
		icon: <FaWindows />,
		bgcolor: '#00a4ef',
		link: 'https://www.microsoft.com/en-in/windows',
		id: 'skill_windowsos',
		category: ['os'],
	},

	// Digital Marketing 
	{
		name: 'SEO',
		icon: <FaSearch height='1em' />,
		bgcolor: '#4CAF50',
		link: 'https://www.google.com/search?q=SEO+guide',
		id: 'skill_seo',
		category: ['digital_marketing'],
	},

	{
		name: 'Social Media Marketing',
		icon: <FaFacebook height='1em' />,
		bgcolor: '#1877F2',
		link: 'https://www.facebook.com/business/learn/social-media-marketing',
		id: 'skill_smm',
		category: ['digital_marketing'],
	},

	{
		name: 'Content Marketing',
		icon: <FaPen height='1em' />,
		bgcolor: '#FF7F50',
		link: 'https://blog.hubspot.com/marketing/content-marketing',
		id: 'skill_contentmarketing',
		category: ['digital_marketing'],
	},

	{
		name: 'Email Marketing',
		icon: <FaEnvelope height='1em' />,
		bgcolor: '#1E90FF',
		link: 'https://mailchimp.com/email-marketing/',
		id: 'skill_emailmarketing',
		category: ['digital_marketing'],
	},

	{
		name: 'Web Analytics',
		icon: <FaChartLine height='1em' />,
		bgcolor: '#FFB400',
		link: 'https://analytics.google.com/analytics/web/',
		id: 'skill_webanalytics',
		category: ['digital_marketing'],
	},
	{
		name: 'Search Advertising',
		icon: <FaSearchDollar height='1em' />,
		bgcolor: '#0052CC', // Blue - Trusted and professional advertising
		link: 'https://www.microsoft.com/en-us/advertising/',
		id: 'skill_searchadvertising',
		category: ['digital_marketing'],
},
{
	name: 'Campaign Optimization',
	icon: <FaBullseye height='1em' />,
	bgcolor: '#FF5722', // Vibrant Orange - Targeted success
	link: 'https://www.microsoft.com/en-us/advertising/',
	id: 'skill_campaignoptimization',
	category: ['digital_marketing'],
},

{
	name: 'Performance Analysis',
	icon: <FaChartBar height='1em' />,
	bgcolor: '#FFC107', // Yellow - Insights and growth
	link: 'https://www.microsoft.com/en-us/advertising/',
	id: 'skill_performanceanalysis',
	category: ['digital_marketing'],
},

{
	name: 'Targeting Strategies',
	icon: <FaCrosshairs height='1em' />,
	bgcolor: '#8BC34A', // Green - Precision and targeting
	link: 'https://www.microsoft.com/en-us/advertising/',
	id: 'skill_targetingstrategies',
	category: ['digital_marketing'],
},

// AI and Data Science Skills
{
	name: 'Artificial Intelligence',
	icon: <FaBrain height='1em' />,
	bgcolor: '#6a1b9a',
	link: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
	id: 'skill_ai',
	category: ['ai_data_science'],
},

{
	name: 'Machine Learning',
	icon: <FaRobot height='1em' />,
	bgcolor: '#0288d1',
	link: 'https://en.wikipedia.org/wiki/Machine_learning',
	id: 'skill_machinelearning',
	category: ['ai_data_science'],
},

{
	name: 'Data Science',
	icon: <FaChartBar height='1em' />,
	bgcolor: '#ff9800',
	link: 'https://en.wikipedia.org/wiki/Data_science',
	id: 'skill_datascience',
	category: ['ai_data_science'],
},

{
	name: 'Neural Networks',
	icon: <FaNetworkWired height='1em' />,
	bgcolor: '#4caf50',
	link: 'https://en.wikipedia.org/wiki/Artificial_neural_network',
	id: 'skill_neuralnetworks',
	category: ['ai_data_science'],
},

// Cybersecurity
{
	name: 'Cybersecurity',
	icon: <FaShieldAlt height='1em' />,
	bgcolor: '#d32f2f',
	link: 'https://en.wikipedia.org/wiki/Cybersecurity',
	id: 'skill_cybersecurity',
	category: ['cybersecurity'],
},

{
	name: 'Risk Management',
	icon: <FaExclamationTriangle height='1em' />,
	bgcolor: '#f57c00',
	link: 'https://en.wikipedia.org/wiki/Risk_management',
	id: 'skill_riskmanagement',
	category: ['cybersecurity'],
},

{
	name: 'Encryption',
	icon: <FaLock height='1em' />,
	bgcolor: '#1976d2',
	link: 'https://en.wikipedia.org/wiki/Encryption',
	id: 'skill_encryption',
	category: ['cybersecurity'],
},

{
	name: 'Authentication',
	icon: <FaKey height='1em' />,
	bgcolor: '#388e3c',
	link: 'https://en.wikipedia.org/wiki/Authentication',
	id: 'skill_authentication',
	category: ['cybersecurity'],
},

{
	name: 'Network Security',
	icon: <FaWifi height='1em' />,
	bgcolor: '#512da8',
	link: 'https://en.wikipedia.org/wiki/Network_security',
	id: 'skill_networksecurity',
	category: ['cybersecurity'],
},

// Design Thinking
{
	name: 'Design Thinking',
	icon: <FaPen height='1em' />,
	bgcolor: '#0288d1',
	link: 'https://en.wikipedia.org/wiki/Design_thinking',
	id: 'skill_designthinking',
	category: ['design thinking'],
  },
  
  {
	name: 'Collaborative Problem Solving',
	icon: <FaHandsHelping height='1em' />,
	bgcolor: '#ff9800',
	link: 'https://en.wikipedia.org/wiki/Problem_solving',
	id: 'skill_collaborativeproblem-solving',
	category: ['design thinking'],
  },
  
  {
	name: 'User-Centered Design',
	icon: <FaUserAlt height='1em' />,
	bgcolor: '#4caf50',
	link: 'https://en.wikipedia.org/wiki/User-centered_design',
	id: 'skill_user-centereddesign',
	category: ['design thinking'],
  },
  
  {
	name: 'Prototyping',
	icon: <FaCogs height='1em' />,
	bgcolor: '#9c27b0',
	link: 'https://en.wikipedia.org/wiki/Prototyping',
	id: 'skill_prototyping',
	category: ['design thinking'],
  },
  
  {
	name: 'Innovation',
	icon: <FaLightbulb height='1em' />,
	bgcolor: '#ffeb3b',
	link: 'https://en.wikipedia.org/wiki/Innovation',
	id: 'skill_innovation',
	category: ['design thinking'],
  },
  
  {
	name: 'Enterprise Integration',
	icon: <FaBuilding height='1em' />,
	bgcolor: '#388e3c',
	link: 'https://en.wikipedia.org/wiki/Enterprise_software_integration',
	id: 'skill_enterpriseintegration',
	category: ['design thinking'],
  },

  {
	name: 'Enterprise Innovation',
	icon: <FaLightbulb height='1em' />,
	bgcolor: '#4caf50',
	link: 'https://en.wikipedia.org/wiki/Innovation',
	id: 'skill_enterpriseinnovation',
	category: ['design thinking'],
},
{
	name: 'Facilitation',
	icon: <FaHandshake height='1em' />,
	bgcolor: '#ff9800',
	link: 'https://en.wikipedia.org/wiki/Facilitation_(business)',
	id: 'skill_facilitation',
	category: ['design thinking'],
},
{
	name: 'Scalable Solutions',
	icon: <FaProjectDiagram height='1em' />,
	bgcolor: '#673ab7',
	link: 'https://en.wikipedia.org/wiki/Scalability',
	id: 'skill_scalablesolutions',
	category: ['design thinking'],
},
{
	name: 'Responsible AI',
	icon: <FaBalanceScale height='1em' />,
	bgcolor: '#ff5722',
	link: 'https://en.wikipedia.org/wiki/Artificial_intelligence_ethics',
	id: 'skill_responsibleAI',
	category: ['design thinking'],
},
{
	name: 'Team Alignment',
	icon: <FaUsers height='1em' />,
	bgcolor: '#009688',
	link: 'https://en.wikipedia.org/wiki/Teamwork',
	id: 'skill_teamalignment',
	category: ['design thinking'],
},
{
	name: 'Data Integrity',
	icon: <FaDatabase height='1em' />,
	bgcolor: '#3f51b5',
	link: 'https://en.wikipedia.org/wiki/Data_integrity',
	id: 'skill_dataintegrity',
	category: ['design thinking'],
},
{
	name: 'AI Design',
	icon: <FaRobot height='1em' />,
	bgcolor: '#4caf50',
	link: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
	id: 'skill_aidesign',
	category: ['design thinking'],
},

  
  // SQL
{
	name: 'SQL',
	icon: <FaDatabase height='1em' />,
	bgcolor: '#2196f3',
	link: 'https://en.wikipedia.org/wiki/SQL',
	id: 'skill_sql',
	category: ['sql'],
  },
  
  {
	name: 'Data Retrieval',
	icon: <FaSearch height='1em' />,
	bgcolor: '#ff9800',
	link: 'https://en.wikipedia.org/wiki/SQL#SELECT_statement',
	id: 'skill_dataretrieval',
	category: ['sql'],
  },
  
  {
	name: 'Data Aggregation',
	icon: <FaChartLine height='1em' />,
	bgcolor: '#4caf50',
	link: 'https://en.wikipedia.org/wiki/SQL#Aggregate_functions',
	id: 'skill_dataaggregation',
	category: ['sql'],
  },
  
  {
	name: 'Joins',
	icon: <FaLink height='1em' />,
	bgcolor: '#f57c00',
	link: 'https://en.wikipedia.org/wiki/SQL#Joins',
	id: 'skill_joins',
	category: ['sql'],
  },
  
  {
	name: 'Data Manipulation',
	icon: <FaPencilAlt height='1em' />,
	bgcolor: '#9c27b0',
	link: 'https://en.wikipedia.org/wiki/SQL#Data_manipulation_language',
	id: 'skill_datamanipulation',
	category: ['sql'],
  },

  {
	name: 'Advanced Joins',
	icon: <FaProjectDiagram height='1em' />, // Represents merging/joining data
	bgcolor: '#ff9800',
	link: 'https://www.sqlshack.com/sql-joins/',
	id: 'skill_advancedjoins',
	category: ['sql'],
},

{
	name: 'Subqueries',
	icon: <FaSearchPlus height='1em' />, // Represents returning data within another query
	bgcolor: '#4caf50',
	link: 'https://en.wikipedia.org/wiki/Subquery',
	id: 'skill_subqueries',
	category: ['sql'],
},

{
	name: 'Window Functions',
	icon: <FaWindowRestore  height='1em' />, // Represents window/frame operations
	bgcolor: '#673ab7',
	link: 'https://mode.com/sql-tutorial/sql-window-functions/',
	id: 'skill_windowfunctions',
	category: ['sql'],
},

{
	name: 'Query Optimization',
	icon: <FaChartLine  height='1em' />, // Represents performance improvement
	bgcolor: '#e91e63',
	link: 'https://www.sqlshack.com/sql-query-optimization-techniques/',
	id: 'skill_queryoptimization',
	category: ['sql'],
},

{
	name: 'Data Transformation',
	icon: <FaExchangeAlt height='1em' />, // Represents transforming data in databases
	bgcolor: '#00bcd4',
	link: 'https://en.wikipedia.org/wiki/Data_transformation',
	id: 'skill_datatransformation',
	category: ['sql'],
},

//   Goldman Sachs
{
	name: 'Cybersecurity',
	icon: <FaShieldAlt height='1em' />,
	bgcolor: '#d32f2f',
	link: 'https://en.wikipedia.org/wiki/Cybersecurity',
	id: 'skill_cybersecurity',
	category: ['cybersecurity'],
  },
  {
	name: 'Password Security',
	icon: <FaLock height='1em' />,
	bgcolor: '#1976d2',
	link: 'https://en.wikipedia.org/wiki/Password_security',
	id: 'skill_passwordsecurity',
	category: ['cybersecurity'],
  },
  {
	name: 'Software Engineering',
	icon: <FaLaptopCode height='1em' />,
	bgcolor: '#4caf50',
	link: 'https://en.wikipedia.org/wiki/Software_engineering',
	id: 'skill_softwareengineering',
	category: ['softwareengineering'],
  },
  {
	name: 'Critical Thinking',
	icon: <FaBrain height='1em' />,
	bgcolor: '#0288d1',
	link: 'https://en.wikipedia.org/wiki/Critical_thinking',
	id: 'skill_criticalthinking',
	category: ['softskills'],
  },

{
	name: 'Collaboration',
	icon: <FaUsers height='1em' />,
	bgcolor: '#ff9800',
	link: 'https://en.wikipedia.org/wiki/Collaboration',
	id: 'skill_collaboration',
	category: ['softskills'],
  },
  
  
  {
	name: 'Time Management',
	icon: <FaClock height='1em' />,
	bgcolor: '#9c27b0',
	link: 'https://en.wikipedia.org/wiki/Time_management',
	id: 'skill_timemanagement',
	category: ['softskills'],
  },

//   Postman
{
	name: 'API Basics',
	icon: <FaPlug height='1em' />,
	bgcolor: '#00bcd4',
	link: 'https://en.wikipedia.org/wiki/Application_programming_interface',
	id: 'skill_apibasics',
	category: ['api'],
  },
  
 
  {
	name: 'Postman',
	icon: <FaPaperPlane height='1em' />,
	bgcolor: '#e91e63',
	link: 'https://www.postman.com/',
	id: 'skill_postmantoolusage',
	category: ['api'],
  },
  

  {
	name: 'API Development & Testing',
	icon: <FaCogs height='1em' />,
	bgcolor: '#4caf50',
	link: 'https://en.wikipedia.org/wiki/API_testing',
	id: 'skill_apidevelopmenttesting',
	category: ['api'],
  },

  {
    name: 'Generative AI Applications',
    icon: <FaBrain height='1em' />, // Replace with an appropriate icon
    bgcolor: '#2196f3',
    link: 'https://en.wikipedia.org/wiki/Generative_adversarial_network',
    id: 'skill_aiApplications',
    category: ['ai'],
},

{
    name: 'Generative AI',
    icon: <FaBrain height='1em' />, // Replace with an appropriate icon
    bgcolor: '#ff9800',
    link: 'https://en.wikipedia.org/wiki/Generative_AI',
    id: 'skill_generativeAI',
    category: ['ai'],
},
{
    name: 'AI Integration',
    icon: <FaNetworkWired height='1em' />, // Replace with an appropriate icon
    bgcolor: '#03a9f4',
    link: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
    id: 'skill_aiIntegration',
    category: ['ai', 'integration'],
},
{
    name: 'Productivity Tools',
    icon: <FaTools height='1em' />, // Replace with an appropriate icon
    bgcolor: '#4caf50',
    link: 'https://en.wikipedia.org/wiki/Productivity_software',
    id: 'skill_productivityTools',
    category: ['tools', 'productivity'],
},


{
    name: 'AI Prompting',
    icon: <FaKeyboard height='1em' />, // Replace with an appropriate icon
    bgcolor: '#673ab7',
    link: 'https://en.wikipedia.org/wiki/Prompt_engineering',
    id: 'skill_aiPrompting',
    category: ['ai'],
},

{
    name: 'Classroom Resource Creation',
    icon: <FaChalkboardTeacher height='1em' />, // Replace with an appropriate icon
    bgcolor: '#ff9800',
    link: 'https://en.wikipedia.org/wiki/Educational_technology',
    id: 'skill_classroomResourceCreation',
    category: ['education'],
},
  
  






];
