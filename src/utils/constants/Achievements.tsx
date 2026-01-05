import { AchievementProps } from "utils/developerStory";
import gssocImg from '../../../public/images/experience/gssoc.png';
import cliniqImg from '../../../public/images/experience/cliniq.png';
import googleImg from '../../../public/images/experience/google.png';

export const Achievements: { [key: string]: AchievementProps } = {
    gssocRank: {
        fromDate: 'Oct 2025',
        toDate: 'Oct 2025',
        featured: true,
        title: 'Ranked #2 Globally - GSSoC 2025',
        orgName: 'GirlScript Summer of Code',
        imageURL: gssocImg,
        description: `
Recognized as the 2nd highest contributor among 3,424 developers worldwide. 
- Merged 238 Pull Requests across multiple repositories.
- Accumulated 2,014 points through complex bug fixes and feature implementations.
- Demonstrated high-velocity delivery and expertise in diverse tech stacks.
`,
        url: 'https://gssoc.girlscript.tech/',
    },
    hacktoberfestLead: {
        fromDate: 'Oct 2025',
        toDate: 'Oct 2025',
        featured: true,
        title: 'Open Source Project Lead - Hacktoberfest 2025',
        orgName: 'ClinIQ / Hacktoberfest',
        imageURL: cliniqImg,
        description: `
Lead and maintained ClinIQ, an open-source healthcare platform.
- Managed a distributed team of developers.
- Conducted thorough code reviews and governed CI/CD workflows.
- Mentored global contributors to ensure high-quality software delivery.
`,
        url: 'https://github.com/akshay0611/ClinIQ',
    },
    googleRecognition: {
        fromDate: '2024',
        toDate: 'Present',
        featured: true,
        title: 'Recognized by Google for Developers',
        orgName: 'Google for Developers',
        imageURL: googleImg,
        description: `
Featured for advocating clean, readable, and maintainable code and building impactful community-driven tools.
`,
    }
};