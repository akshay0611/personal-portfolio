import { FaTrophy, FaUsers, FaGithub, FaRocket } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface MetricProps {
    value: number;
    suffix: string;
    label: string;
    subtext: string;
    icon: IconType;
    color: string;
}

export const impactMetrics: MetricProps[] = [
    {
        value: 2,
        suffix: "",
        label: "Global Rank",
        subtext: "GSSoC 2025 (Top 0.05%)",
        icon: FaTrophy,
        color: "#C89D52" // Gold
    },
    {
        value: 10,
        suffix: "+",
        label: "Developers Led",
        subtext: "Technical Team Mentorship",
        icon: FaUsers,
        color: "#7C3AED" // Violet
    },
    {
        value: 3,
        suffix: "",
        label: "Prod Products",
        subtext: "From Concept to Scale",
        icon: FaRocket,
        color: "#7C3AED" // Violet
    },
    {
        value: 4176,
        suffix: "+",
        label: "Contributions",
        subtext: "Active GitHub Presence",
        icon: FaGithub,
        color: "#10B981" // Emerald
    }
];
