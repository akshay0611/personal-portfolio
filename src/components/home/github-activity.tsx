import React, { useEffect, useState } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import { SocialUrls } from 'utils/constants/urls';
import ContributionGraph from './ContributionGraph';

interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
    language: string;
    updated_at: string;
}

interface GitHubStats {
    public_repos: number;
    followers: number;
    following: number;
    name: string;
    bio: string;
    avatar_url: string;
}

export default function GitHubActivity() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [loading, setLoading] = useState(true);
    const username = 'akshay0611';

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                // Fetch user stats
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                const userData = await userResponse.json();
                setStats(userData);

                // Fetch repositories (sorted by updated)
                const reposResponse = await fetch(
                    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
                );
                const reposData = await reposResponse.json();
                setRepos(reposData);
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    const getLanguageColor = (language: string) => {
        const colors: { [key: string]: string } = {
            JavaScript: '#f1e05a',
            TypeScript: '#3178c6',
            Python: '#3572A5',
            Java: '#b07219',
            HTML: '#e34c26',
            CSS: '#563d7c',
            Go: '#00ADD8',
            Rust: '#dea584',
            Ruby: '#701516',
            PHP: '#4F5D95',
        };
        return colors[language] || '#8b949e';
    };

    if (loading) {
        return (
            <section className='home-section bg-black relative' id='github'>
                <div className='max-section-width flex flex-col items-center justify-center'>
                    <div className='animate-pulse text-2xl'>Loading GitHub Activity...</div>
                </div>
            </section>
        );
    }

    return (
        <section className='py-12 md:py-16 px-3 sm:px-6 md:px-10 lg:px-20 bg-black relative' id='github'>
            <div className='max-section-width flex flex-col gap-6'>
                {/* Header */}
                <div className='text-center md:text-left'>
                    <h1 className='h1 animate-text-bg before:bg-white hover:text-black inline-flex items-center gap-3'>
                        <FaGithub className='text-4xl' />
                        GitHub Activity
                    </h1>
                    <p className='text-gray-400 mt-2'>
                        Check out my latest projects and contributions
                    </p>
                </div>

                {/* GitHub Stats Cards */}
                {stats && (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4'>
                        <div className='stat-card group'>
                            <div className='stat-icon-wrapper bg-gradient-to-br from-purple-500 to-pink-500'>
                                <FaGithub className='text-2xl' />
                            </div>
                            <div className='stat-content'>
                                <div className='stat-value'>{stats.public_repos}</div>
                                <div className='stat-label'>Public Repositories</div>
                            </div>
                        </div>

                        <div className='stat-card group'>
                            <div className='stat-icon-wrapper bg-gradient-to-br from-blue-500 to-cyan-500'>
                                <FaStar className='text-2xl' />
                            </div>
                            <div className='stat-content'>
                                <div className='stat-value'>{stats.followers}</div>
                                <div className='stat-label'>Followers</div>
                            </div>
                        </div>

                        <div className='stat-card group'>
                            <div className='stat-icon-wrapper bg-gradient-to-br from-green-500 to-emerald-500'>
                                <FaCodeBranch className='text-2xl' />
                            </div>
                            <div className='stat-content'>
                                <div className='stat-value'>{stats.following}</div>
                                <div className='stat-label'>Following</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* GitHub Contribution Graph */}
                <div className='w-full overflow-hidden rounded-lg border border-gray-800 bg-black'>
                    <div className='p-3 border-b border-gray-800'>
                        <h3 className='text-lg font-semibold'>Contribution Activity</h3>
                    </div>
                    <div className='p-4 bg-black'>
                        <ContributionGraph username={username} />
                    </div>
                </div>

                {/* Recent Repositories */}
                <div>
                    <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
                        <FaCodeBranch className='text-blue-400' />
                        Recent Repositories
                    </h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {repos.map((repo) => (
                            <a
                                key={repo.id}
                                href={repo.html_url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='repo-card group'
                            >
                                <div className='flex items-start justify-between mb-2'>
                                    <h4 className='text-base font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-1'>
                                        {repo.name}
                                    </h4>
                                    <FaGithub className='text-gray-500 flex-shrink-0 ml-2' />
                                </div>

                                <p className='text-xs text-gray-400 mb-3 line-clamp-2 min-h-[2rem]'>
                                    {repo.description || 'No description available'}
                                </p>

                                <div className='flex items-center gap-3 text-xs text-gray-500'>
                                    {repo.language && (
                                        <div className='flex items-center gap-1'>
                                            <span
                                                className='w-3 h-3 rounded-full'
                                                style={{ backgroundColor: getLanguageColor(repo.language) }}
                                            ></span>
                                            <span>{repo.language}</span>
                                        </div>
                                    )}
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-500' />
                                        <span>{repo.stargazers_count}</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaCodeBranch />
                                        <span>{repo.forks_count}</span>
                                    </div>
                                </div>

                                <div className='repo-card-overlay'></div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* View More Button */}
                <div className='flex justify-center mt-2'>
                    <a
                        href={SocialUrls.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='github-button group'
                    >
                        <FaGithub className='text-xl group-hover:rotate-12 transition-transform' />
                        <span>View All Repositories</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
