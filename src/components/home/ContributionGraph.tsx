import React, { useEffect, useState } from 'react';

interface ContributionDay {
    date: string;
    contributionCount: number;
    color: string;
}

interface ContributionWeek {
    contributionDays: ContributionDay[];
}

interface Props {
    username: string;
}

export default function ContributionGraph({ username }: Props) {
    const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
    const [totalContributions, setTotalContributions] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

                if (!token) {
                    throw new Error('GitHub token not found. Please add NEXT_PUBLIC_GITHUB_TOKEN to .env.local');
                }

                const query = `
					query($userName:String!) {
						user(login: $userName) {
							contributionsCollection {
								contributionCalendar {
									totalContributions
									weeks {
										contributionDays {
											date
											contributionCount
											color
										}
									}
								}
							}
						}
					}
				`;

                const response = await fetch('https://api.github.com/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        query,
                        variables: { userName: username },
                    }),
                });

                const result = await response.json();

                // Check for errors in the response
                if (result.errors) {
                    console.error('GraphQL errors:', result.errors);
                    throw new Error(result.errors[0].message || 'GraphQL query failed');
                }

                // Check if data exists
                if (!result.data) {
                    console.error('No data in response:', result);
                    throw new Error('No data returned from GitHub API');
                }

                // Check if user exists
                if (!result.data.user) {
                    console.error('No user in response:', result.data);
                    throw new Error(`User '${username}' not found or token lacks permissions`);
                }

                const calendar = result.data.user.contributionsCollection.contributionCalendar;
                setWeeks(calendar.weeks);
                setTotalContributions(calendar.totalContributions);
            } catch (err) {
                console.error('Error fetching GitHub contributions:', err);
                setError(err instanceof Error ? err.message : 'Failed to load contributions');
            } finally {
                setLoading(false);
            }
        };

        fetchContributions();
    }, [username]);

    if (loading) {
        return (
            <div className='w-full p-8 flex items-center justify-center'>
                <div className='text-gray-400'>Loading contribution graph...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='w-full p-4 text-center'>
                <p className='text-gray-400 text-sm mb-2'>Unable to load contribution graph</p>
                <p className='text-xs text-gray-500'>{error}</p>
                {/* Fallback to image */}
                <div className='mt-4'>
                    <img
                        src={`https://ghchart.rshah.org/${username}`}
                        alt='GitHub Contribution Chart'
                        className='w-full rounded'
                        loading='lazy'
                    />
                </div>
            </div>
        );
    }

    // GitHub's exact dark theme color levels
    const getContributionColor = (count: number): string => {
        if (count === 0) return '#161b22';
        if (count < 5) return '#0e4429';
        if (count < 10) return '#006d32';
        if (count < 15) return '#26a641';
        return '#39d353';
    };

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Mon', 'Wed', 'Fri'];

    return (
        <div className='w-full overflow-x-auto'>
            <div className='inline-block min-w-full'>
                {/* Total contributions */}
                <div className='mb-3 text-sm text-gray-400'>
                    <span className='font-semibold text-white'>{totalContributions}</span> contributions in the last year
                </div>

                {/* Graph */}
                <div className='flex gap-1'>
                    {/* Day labels */}
                    <div className='flex flex-col justify-between text-xs text-gray-500 pr-2' style={{ paddingTop: '20px' }}>
                        {days.map((day) => (
                            <div key={day} className='h-3 flex items-center'>
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Contribution grid */}
                    <div className='flex-1 overflow-x-auto'>
                        {/* Month labels */}
                        <div className='flex gap-1 mb-1 h-4'>
                            {weeks.map((week, weekIndex) => {
                                const firstDay = week.contributionDays[0];
                                const date = new Date(firstDay.date);
                                const isFirstWeekOfMonth = date.getDate() <= 7;
                                const monthLabel = isFirstWeekOfMonth ? months[date.getMonth()] : '';

                                return (
                                    <div key={`month-${weekIndex}`} className='flex-shrink-0' style={{ width: '12px' }}>
                                        {monthLabel && (
                                            <div className='text-xs text-gray-500'>
                                                {monthLabel}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Contribution cells */}
                        <div className='flex gap-1'>
                            {weeks.map((week, weekIndex) => (
                                <div key={weekIndex} className='flex flex-col gap-1'>
                                    {week.contributionDays.map((day) => {
                                        const date = new Date(day.date);
                                        const formattedDate = date.toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        });

                                        return (
                                            <div
                                                key={day.date}
                                                className='contribution-cell'
                                                style={{
                                                    backgroundColor: getContributionColor(day.contributionCount),
                                                }}
                                                title={`${day.contributionCount} contribution${day.contributionCount !== 1 ? 's' : ''} on ${formattedDate}`}
                                            />
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Legend */}
                <div className='flex items-center gap-2 mt-3 text-xs text-gray-500'>
                    <span>Less</span>
                    <div className='flex gap-1'>
                        <div className='contribution-cell' style={{ backgroundColor: '#161b22' }} />
                        <div className='contribution-cell' style={{ backgroundColor: '#0e4429' }} />
                        <div className='contribution-cell' style={{ backgroundColor: '#006d32' }} />
                        <div className='contribution-cell' style={{ backgroundColor: '#26a641' }} />
                        <div className='contribution-cell' style={{ backgroundColor: '#39d353' }} />
                    </div>
                    <span>More</span>
                </div>
            </div>
        </div>
    );
}
