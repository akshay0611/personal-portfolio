import Head from 'next/head';
import Link from 'next/link';

export default function Success() {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Success | Your Project Name</title>
        <meta name="description" content="Thank you for your submission. We'll get back to you soon." />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-50">
        {/* Branding Logo */}
        <div className="mb-4">
          <img
            src="/favicon.ico" // Replace with your logo path
            alt="Your Logo"
            className="h-32 w-32"
          />
        </div>

        {/* Success Message */}
        <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl text-center max-w-lg">
          <h1 className="text-4xl font-bold text-green-500 mb-4">
            🎉 Success!
          </h1>
          <p className="text-lg mb-6">
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
    </>
  );
}