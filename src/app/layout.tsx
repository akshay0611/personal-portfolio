import type { Metadata, Viewport } from 'next';
import { Montserrat, League_Spartan } from 'next/font/google';
import Script from 'next/script';
import ProgressBar from 'components/common/ProgressBar';
import PageLoader from 'components/common/PageLoader';
import TerminalModal from 'components/common/TerminalModal';
import '../styles/globals.css';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
	display: 'swap',
});

const leagueSpartan = League_Spartan({
	subsets: ['latin'],
	variable: '--font-league',
	display: 'swap',
});

const BASE_URL = process.env.BASE_URL || 'https://connectwithakshay.netlify.app';
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const viewport: Viewport = {
	themeColor: '#000000',
	width: 'device-width',
	initialScale: 1,
};

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		default: 'Akshay Kumar | Full Stack Developer | AI & Cloud-Driven Products',
		template: '%s | Akshay Kumar',
	},
	description:
		'Lead Developer at EduLinkUp & Web Development Lead at Codeunia. Full Stack Developer focused on building scalable AI & Cloud-driven products. Recognition by Google for Developers for engineering excellence.',
	keywords: [
		'Akshay Kumar',
		'EduLinkUp Lead Developer',
		'Codeunia Web Dev Lead',
		'Full Stack Developer',
		'ReactJs Developer',
		'NodeJs Developer',
		'Python Developer',
		'AI Developer',
		'Cloud Developer',
		'Akshay Kumar Portfolio',
	],
	authors: [{ name: 'Akshay Kumar' }],
	creator: 'Akshay Kumar',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: BASE_URL,
		title: 'Akshay Kumar | Full Stack Developer | AI & Cloud-Driven Products',
		description:
			'Lead Developer at EduLinkUp & Web Development Lead at Codeunia. Building scalable AI & Cloud-driven products.',
		siteName: 'Akshay Kumar Portfolio',
		images: [
			{
				url: '/images/banner.png',
				width: 1200,
				height: 630,
				alt: 'Akshay Kumar Full Stack Developer Portfolio',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Akshay Kumar | Full Stack Developer | AI & Cloud-Driven Products',
		description:
			'Lead Developer at EduLinkUp & Web Development Lead at Codeunia. Building scalable AI & Cloud-driven products.',
		images: ['/images/banner.png'],
		creator: '@Aksh0605',
	},
	icons: {
		icon: [
			{ url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon.ico' },
		],
		apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
	},
	manifest: '/favicon/site.webmanifest',
	robots: {
		index: true,
		follow: true,
	},
	verification: {
		google: 'uRZkXHIazXTX9eH4QWrLphASnJxdBabuvsaqaKXU-kg',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${montserrat.variable} ${leagueSpartan.variable}`}>
			<body className="bg-black text-white antialiased">
				{GA_TRACKING_ID && (
					<>
						<Script
							strategy="afterInteractive"
							src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
						/>
						<Script
							id="google-analytics"
							strategy="afterInteractive"
							dangerouslySetInnerHTML={{
								__html: `
									window.dataLayer = window.dataLayer || [];
									function gtag(){dataLayer.push(arguments);}
									gtag('js', new Date());
									gtag('config', '${GA_TRACKING_ID}', {
										page_path: window.location.pathname,
									});
								`,
							}}
						/>
					</>
				)}
				<ProgressBar />
				<PageLoader />
				<TerminalModal />
				{children}
			</body>
		</html>
	);
}
