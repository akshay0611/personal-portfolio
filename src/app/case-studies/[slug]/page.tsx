import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from 'components/footer';
import CaseStudyView from 'components/caseStudies/CaseStudyView';
import { caseStudies, getCaseStudy } from 'data/caseStudies';

const BASE_URL =
	process.env.BASE_URL || 'https://connectwithakshay.netlify.app';

interface CaseStudyPageProps {
	params: { slug: string };
}

export function generateStaticParams() {
	return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
	const study = getCaseStudy(params.slug);

	if (!study) {
		return { title: 'Case Study Not Found' };
	}

	const url = `${BASE_URL}/case-studies/${study.slug}`;

	return {
		title: study.metaTitle,
		description: study.metaDescription,
		keywords: study.keywords,
		alternates: {
			canonical: `/case-studies/${study.slug}`,
		},
		openGraph: {
			type: 'article',
			title: study.metaTitle,
			description: study.metaDescription,
			url,
			images: [
				{
					url: study.logo,
					width: 512,
					height: 512,
					alt: `${study.projectName} logo`,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: study.metaTitle,
			description: study.metaDescription,
			images: [study.logo],
		},
	};
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
	const study = getCaseStudy(params.slug);

	if (!study) {
		notFound();
	}

	const url = `${BASE_URL}/case-studies/${study.slug}`;

	const articleSchema = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: study.metaTitle,
		description: study.metaDescription,
		image: `${BASE_URL}${study.logo}`,
		url,
		mainEntityOfPage: { '@type': 'WebPage', '@id': url },
		author: {
			'@type': 'Person',
			name: 'Akshay Kumar',
			url: BASE_URL,
			jobTitle: 'Full Stack Developer',
		},
		publisher: {
			'@type': 'Person',
			name: 'Akshay Kumar',
			url: BASE_URL,
		},
		about: study.industry,
		articleSection: 'Case Study',
		keywords: study.keywords.join(', '),
		mentions: study.techStack
			.map((tech) => tech.replace('skill_', ''))
			.join(', '),
	};

	const breadcrumbSchema = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: BASE_URL,
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Case Studies',
				item: `${BASE_URL}/case-studies`,
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: study.projectName,
				item: url,
			},
		],
	};

	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: study.faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	};

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
			/>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
			<CaseStudyView study={study} />
			<Footer />
		</>
	);
}
