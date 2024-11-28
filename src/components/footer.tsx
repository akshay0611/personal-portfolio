import { RiSendPlaneFill } from 'react-icons/ri';
import Lottie from 'lottie-react';
import ConnectionAnimation from '../assets/lottie/social-media-network.json';
import { allSocials } from 'utils/constants/Socials';
import SkillBadge from './common/SkillBadge';

export default function Footer() {
	const submitForm = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted');  // Add a log here to see if the function is called.
		const form = e.target as HTMLFormElement;
		form.getElementsByTagName('button')[0].disabled = true;
	  
		// Simply reset the form and show success alert
		form.reset();
		form.getElementsByTagName('button')[0].disabled = false;
		alert('Message sent successfully!');
	  };
	  

  return (
    <footer
      className='contact bg-dark-gray min-w-full pb-5 pt-16 md:pt-32 px-3 sm:px-6 md:px-10 lg:px-20'
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
            className='flex flex-col gap-3'
            name="contactForm" // Add a name for the form (optional)
            method="POST" // Required for Netlify form submission
            data-netlify="true" // Enable Netlify form handling
          >
            {/* Hidden field to specify the form name (optional but recommended) */}
            <input type="hidden" name="form-name" value="contactForm" />
            
            <div className='flex flex-col'>
              <label
                htmlFor='name'
                className='text-xs text-gray-400'
              >
                Name<span className='text-red-600'> *</span>
              </label>
              <input
                type='text'
                placeholder='Enter your name'
                id='contact-name'
                name="name" // Add name for form submission
                className='bg-gray-700 bg-opacity-30 rounded-sm px-2 py-1 outline-none placeholder:text-gray-400 placeholder:text-sm border-transparent transition-all border ease-linear disabled:opacity-30'
                maxLength={100}
                required
              />
            </div>
            <div className='flex flex-col'>
              <label
                htmlFor='email'
                className='text-xs text-gray-400'
              >
                Email
                <span className='text-red-600'> *</span>
              </label>
              <input
                type='email'
                placeholder='Enter your email'
                id='contact-email'
                name="email" // Add name for form submission
                className='bg-gray-700 bg-opacity-30 rounded-sm px-2 py-1 outline-none placeholder:text-gray-400 placeholder:text-sm border-transparent transition-all border ease-linear disabled:opacity-30'
                maxLength={100}
                required
              />
            </div>
            <div className='flex flex-col'>
              <label
                htmlFor='message'
                className='text-xs text-gray-400'
              >
                Message
                <span className='text-red-600'> *</span>
              </label>
              <textarea
                placeholder='Feel free to write anything. Feedbacks and advices are highly appreciated!'
                id='contact-message'
                name="message" // Add name for form submission
                className='bg-gray-700 bg-opacity-30 rounded-sm px-2 py-1 outline-none placeholder:text-gray-400 placeholder:text-sm border-transparent border'
                maxLength={1000}
                rows={5}
                required
              />
            </div>
            <button className='bg-gray-200 hover:bg-white text-black rounded-sm py-1 px-2 flex items-center justify-center gap-1 disabled:opacity-30'>
              Send <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
      <div className='max-section-width flex justify-center items-center gap-2 pt-4 mt-10 border-t border-gray-700'>
        © 2024 All rights reserved. Akshay Kumar.
      </div>
    </footer>
  );
}
