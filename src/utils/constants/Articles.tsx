export interface ArticleProps {
    title: string;
    platform: 'Codeunia' | 'EduLinkUp';
    date: string;
    readTime: string;
    url: string;
    description: string;
}

export const curatedArticles: ArticleProps[] = [
    {
        title: "Scaling Engineering Culture in Rapidly Growing Teams",
        platform: "Codeunia",
        date: "Dec 2025",
        readTime: "6 min read",
        url: "#",
        description: "Insights on maintaining code quality and developer productivity while doubling the engineering team size at Codeunia."
    },
    {
        title: "Architecting Scalable AI Infrastructure for EdTech",
        platform: "EduLinkUp",
        date: "Nov 2025",
        readTime: "8 min read",
        url: "#",
        description: "A deep dive into how we integrated Gemini AI models into the EduLinkUp ecosystem to personalize student learning paths."
    },
    {
        title: "The Lead Developer's Guide to Clean Architecture",
        platform: "Codeunia",
        date: "Oct 2025",
        readTime: "5 min read",
        url: "#",
        description: "Lessons learned from building and maintaining high-velocity production systems with a focus on long-term sustainability."
    }
];
