import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import PageLoader from 'components/common/PageLoader';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

// Google Analytics configuration
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
				window.gtag('config', GA_TRACKING_ID, {
					page_path: url,
				});
			}
		};

		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			{/* Google Analytics */}
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
			<Component {...pageProps} />
			<PageLoader />
		</>
	);
}

export default MyApp;
