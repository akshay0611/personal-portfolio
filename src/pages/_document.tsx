import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	const BASE_URL = process.env.BASE_URL || 'https://connectwithakshay.netlify.app/';

	return (
		<Html lang="en">
			<Head>
				{/* Favicon */}
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/favicon/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon/favicon-16x16.png'
				/>
				<link rel='manifest' href='/favicon/site.webmanifest' />

				{/* SEO - Facebook */}
				<meta property='og:url' content={`${BASE_URL}`} />
				<meta property='og:type' content='website' />
				<meta property='og:locale' content='en_US' />
				<meta
					property='og:title'
					content='Akshay Kumar - Full Stack Developer | ReactJs, NodeJs, Python Expert'
				/>
				<meta
					property='og:description'
					content='Akshay Kumar Full Stack Developer with 3+ years experience. Specializing in ReactJs, NodeJs, Python, MongoDB, Cybersecurity & AI. Available for freelance projects.'
				/>
				<meta property='og:image' content={`${BASE_URL}banner.png`} />
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='630' />
				<meta property='og:image:alt' content='Akshay Kumar Full Stack Developer Portfolio' />

				{/* SEO - Twitter */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:url' content={`${BASE_URL}`} />
				<meta
					name='twitter:title'
					content='Akshay Kumar - Full Stack Developer | ReactJs, NodeJs, Python Expert'
				/>
				<meta
					name='twitter:description'
					content='Akshay Kumar Full Stack Developer with 3+ years experience. Specializing in ReactJs, NodeJs, Python, MongoDB, Cybersecurity & AI.'
				/>
				<meta
					name='twitter:image'
					content={`${BASE_URL}banner.png`}
				/>
				<meta name='twitter:image:alt' content='Akshay Kumar Full Stack Developer Portfolio' />

				{/* SEO - Google */}
				<meta
					name='description'
					content='Akshay Kumar - Full Stack Developer with 3+ years experience in ReactJs, NodeJs, Python, MongoDB. Specializing in web development, cybersecurity, and AI solutions.'
				/>
				<meta
					name='keywords'
					content='Akshay Kumar Full Stack Developer, Akshay Kumar Developer, Full Stack Developer, ReactJs Developer, NodeJs Developer, Python Developer, MongoDB Developer, Web Developer, Freelance Developer, Cybersecurity, AI Developer, Akshay Kumar Portfolio'
				/>
				<meta name='author' content='Akshay Kumar' />
				<meta name='robots' content='index, follow' />
				<meta
					name='google-site-verification'
					content='uRZkXHIazXTX9eH4QWrLphASnJxdBabuvsaqaKXU-kg'
				/>
				<link rel='canonical' href={BASE_URL} />

				{/* Loading Fonts - League Spartan and Montserrat */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
