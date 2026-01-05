import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { SocialUrls } from './urls';

export const allSocials = [
	{
		name: 'LinkedIn',
		icon: <FaLinkedin />,
		bgcolor: '#0077b5',
		link: SocialUrls.linkedin,
	},
	{
		name: 'GitHub',
		icon: <FaGithub />,
		bgcolor: '#333',
		link: SocialUrls.github,
	},
	{
		name: 'Email',
		icon: <FaEnvelope />,
		bgcolor: '#ea4335',
		link: SocialUrls.email,
	},
	{
		name: 'Discord',
		icon: <FaDiscord />,
		bgcolor: '#5865f2',
		link: SocialUrls.discord,
	},
	{
		name: 'Twitter',
		icon: <FaTwitter />,
		bgcolor: '#1DA1F2',
		link: SocialUrls.twitter,
	},
];
