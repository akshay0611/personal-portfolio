import { useState } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import Lottie from 'components/common/LottieWrapper';
import ConnectionAnimation from '../assets/lottie/social-media-network.json';
import { allSocials } from 'utils/constants/Socials';
import SkillBadge from './common/SkillBadge';
import { trackContactFormSubmit } from 'utils/analytics';

export default function Footer() {
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    setStatus('LOADING');
    trackContactFormSubmit();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...Object.fromEntries(formData),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('SUCCESS');
        form.reset();
        // Redirecting to your existing success page after a short delay
        setTimeout(() => {
          window.location.href = '/success';
        }, 1500);
      } else {
        setStatus('ERROR');
        alert(result.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus('ERROR');
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <footer
      className='contact bg-dark-gray min-w-full pb-5 pt-16 md:pt-32 px-5 sm:px-6 md:px-10 lg:px-20'
      id='contact'
    >
      <div className='max-section-width flex flex-col md:flex-row items-center justify-center gap-2 mb-12'>
        <div className='mr-10 hidden md:block'>
          <Lottie
            animationData={ConnectionAnimation}
            className='max-w-sm'
          />
        </div>
        <div className='w-full md:w-1/2'>
          <div className='relative w-fit m-auto md:m-0'>
            <h1 className='h1 leading-normal animate-text-bg before:bg-white hover:text-dark-gray'>
              Say hi!
            </h1>
          </div>
          <ul className='flex flex-wrap items-start justify-center md:justify-start mb-5 gap-3'>
            {allSocials.map((skill, index) => (
              <SkillBadge skill={skill} key={index} />
            ))}
          </ul>
          <div className='flex-center gap-2 opacity-10 mb-4'>
            <hr className='w-full border-dashed' />
            <p className='text-sm'>or</p>
            <hr className='w-full border-dashed' />
          </div>
          <form
            onSubmit={submitForm}
            method="POST"
            className="flex flex-col gap-4"
          >
            {/* Honeypot Spam Protection */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="flex flex-col gap-1">
              <label htmlFor="contact-name" className="text-xs text-gray-400">
                Name<span className="text-red-600"> *</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                id="contact-name"
                name="name"
                className="bg-white/5 rounded-md px-3 py-2 outline-none placeholder:text-gray-500 border border-white/10 focus:border-white/30 transition-all disabled:opacity-50"
                maxLength={100}
                required
                disabled={status === 'LOADING'}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="contact-email" className="text-xs text-gray-400">
                Email<span className="text-red-600"> *</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                id="contact-email"
                name="email"
                className="bg-white/5 rounded-md px-3 py-2 outline-none placeholder:text-gray-500 border border-white/10 focus:border-white/30 transition-all disabled:opacity-50"
                maxLength={100}
                required
                disabled={status === 'LOADING'}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="contact-message" className="text-xs text-gray-400">
                Message<span className="text-red-600"> *</span>
              </label>
              <textarea
                placeholder="Feel free to write anything. Feedbacks and advices are highly appreciated!"
                id="contact-message"
                name="message"
                className="bg-white/5 rounded-md px-3 py-2 outline-none placeholder:text-gray-500 border border-white/10 focus:border-white/30 transition-all disabled:opacity-50 min-h-[120px]"
                maxLength={1000}
                rows={5}
                required
                disabled={status === 'LOADING'}
              />
            </div>

            <button 
              type="submit"
              disabled={status === 'LOADING'}
              className="mt-2 bg-white hover:bg-gray-200 text-black font-medium rounded-md py-2.5 px-4 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {status === 'LOADING' ? (
                <span className="flex items-center gap-2">
                  Sending... <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                </span>
              ) : status === 'SUCCESS' ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message <RiSendPlaneFill className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>

        </div>
      </div>
      <div className='max-section-width flex justify-center items-center gap-2 pt-4 mt-10 border-t border-white/5 text-gray-500 text-sm'>
        © {new Date().getFullYear()} All rights reserved. Akshay Kumar.
      </div>
    </footer>
  );
}

