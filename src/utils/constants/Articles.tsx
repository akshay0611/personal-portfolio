export interface ArticleProps {
    title: string;
    platform: 'Codeunia' | 'EduLinkUp' | 'Dev.to' | 'Personal';
    date: string;
    readTime: string;
    url: string;
    description: string;
    image?: string;
}

export const curatedArticles: ArticleProps[] = [
    {
        title: "How I Ranked 2 Out of 25,000+ GSSoC 2025 Contributors: My Open Source Journey",
        platform: "EduLinkUp",
        date: "April 2026",
        readTime: "8 min read",
        url: "https://www.edulinkup.dev/blog/how-i-ranked-2-out-of-25000-gssoc-2025-contributors",
        description: "How I secured Rank #2 with 2,014 points in GSSoC 2025 - my strategy, projects, and lessons for open-source beginners.",
        image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flch4s8d7zsfn3sy39t87.png"
    },
    {
        title: "Run Claude Code for Free Using Ollama (No API Bill, No Compromise)",
        platform: "EduLinkUp",
        date: "March 2026",
        readTime: "5 min read",
        url: "https://www.edulinkup.dev/blog/run-claude-code-free-ollama",
        description: "Claude Code is powerful — but the API bills add up fast. Learn how to run it completely free using Ollama, with local open-source models or free cloud tiers.",
        image: "https://www.edulinkup.dev/claudecode.jpeg"
    },
    {
        title: "Build Beautiful App UIs Without Being a Designer — Google Stitch + Antigravity",
        platform: "EduLinkUp",
        date: "March 2026",
        readTime: "7 min read",
        url: "https://www.edulinkup.dev/blog/google-stitch-antigravity-ui-guide",
        description: "Struggling with UI design? Discover how Google Stitch + Antigravity let you go from a plain functional app to a polished, beautiful interface — without touching CSS.",
        image: "https://www.edulinkup.dev/google-stitch-antigravity.webp"
    },
    {
        title: "Moltbot: Run Your Own AI Assistant for $5/Month (No Mac Mini Needed)",
        platform: "EduLinkUp",
        date: "March 2026",
        readTime: "6 min read",
        url: "https://www.edulinkup.dev/blog/moltbot-ai-assistant-guide-2026",
        description: "Discover Moltbot, the open-source AI assistant that lives in your messaging apps. Learn how to run it on a $5 VPS instead of buying a $599 Mac Mini.",
        image: "https://www.edulinkup.dev/moltbot.webp"
    }
];
