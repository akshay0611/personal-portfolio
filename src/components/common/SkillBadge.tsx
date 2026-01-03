import Link from 'next/link';
import React from 'react';

interface SkillProps {
	skill: {
		name: string;
		icon: React.ReactNode;
		bgcolor: string;
		link: string;
		color?: string;
	};
	index?: number;
}

export default function SkillBadge({ skill, index }: SkillProps) {
	return (
		<Link href={skill.link} key={index} legacyBehavior>
			<a
				target='_blank'
				style={{
					border: `1px solid ${skill.bgcolor.startsWith('#') ? skill.bgcolor + '66' : skill.bgcolor}`,
				}}
				className='flex items-center rounded-xs py-0.5 md:py-1 px-1.5 md:px-2 gap-1.5 min-w-fit cursor-pointer hover:scale-105 transition duration-300 text-gray-200 text-xs md:text-sm bg-black/40 hover:bg-black/60'
			>
				<div style={{ color: skill.bgcolor }} className='text-base md:text-lg opacity-90'>{skill.icon}</div>
				<li className='list-none'>{skill.name}</li>
			</a>
		</Link>
	);
}

/** Note:
 *  'skill.bgcolor' is used for the border color of the badge.
 *  'skill.color' is used for the text color of the badge.
 */
