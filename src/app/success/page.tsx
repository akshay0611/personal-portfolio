import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Success',
	description: "Thank you for your submission. We'll get back to you soon.",
	robots: {
		index: false,
		follow: false,
	},
};

export default function SuccessPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-50 px-4">
			{/* Branding Logo */}
			<div className="mb-4">
				<Image
					src="/favicon.ico"
					alt="Akshay Kumar Logo"
					width={128}
					height={128}
					className="h-32 w-32"
				/>
			</div>

			{/* Success Message */}
			<div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl text-center max-w-lg w-full">
				<h1 className="text-4xl font-bold text-green-500 mb-4">
					🎉 Success!
				</h1>
				<p className="text-lg mb-6 text-gray-700">
					Thank you for reaching out! Your message has been sent successfully. 
					We’ll get back to you as soon as possible.
				</p>
				<Link
					href="/"
					className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 duration-200"
				>
					Back to Home
				</Link>
			</div>
		</div>
	);
}
