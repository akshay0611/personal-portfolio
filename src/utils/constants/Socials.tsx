import { FaDiscord, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { SocialUrls } from './urls';

export const allSocials = [
	{
		name: 'akshay0611',
		icon: <FaLinkedin />,
		bgcolor: '#0077b5',
		link: SocialUrls.linkedin,
	},
	{
		name: 'Email',
		icon: <FaEnvelope />,
		bgcolor: 'white',
		link: SocialUrls.email,
	},
	{
		name: 'akshay0605',
		icon: <FaDiscord />,
		bgcolor: 'rgb(88, 101, 242)',
		link: SocialUrls.discord,
	},
	{
		name: 'aksh0605',
		icon: <FaTwitter />,
		bgcolor: '#1DA1F2',
		link: SocialUrls.twitter,
	},
];
