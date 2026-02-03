import { RiSendPlaneFill } from 'react-icons/ri';
import Lottie from 'components/common/LottieWrapper';
import ConnectionAnimation from '../assets/lottie/social-media-network.json';
import { allSocials } from 'utils/constants/Socials';
import SkillBadge from './common/SkillBadge';
import { trackContactFormSubmit } from 'utils/analytics';

export default function Footer() {
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    form.getElementsByTagName('button')[0].disabled = true;

    // Track form submission
    trackContactFormSubmit();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contactForm",
        ...Object.fromEntries(formData)
      } as any).toString(),
    })
      .then(() => {
        form.reset();
        alert('Message sent successfully!');
      })
      .catch((error) => alert(error))
      .finally(() => {
        form.getElementsByTagName('button')[0].disabled = false;
      });
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
            name="contactForm"
            onSubmit={submitForm}
            method="POST"
            data-netlify="true"
            className="flex flex-col gap-3"
          >
            {/* Hidden field to specify the form name */}
            <input type="hidden" name="form-name" value="contactForm" />

            <div className="flex flex-col">
              <label htmlFor="name" className="text-xs text-gray-400">
                Name<span className="text-red-600"> *</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                id="contact-name"
                name="name"
                className="bg-gray-700 bg-opacity-30 rounded-sm px-2 py-1 outline-none placeholder:text-gray-400 placeholder:text-sm border-transparent transition-all border ease-linear disabled:opacity-30"
                maxLength={100}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-xs text-gray-400">
                Email<span className="text-red-600"> *</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                id="contact-email"
                name="email"
                className="bg-gray-700 bg-opacity-30 rounded-sm px-2 py-1 outline-none placeholder:text-gray-400 placeholder:text-sm border-transparent transition-all border ease-linear disabled:opacity-30"
                maxLength={100}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-xs text-gray-400">
                Message<span className="text-red-600"> *</span>
              </label>
              <textarea
                placeholder="Feel free to write anything. Feedbacks and advices are highly appreciated!"
                id="contact-message"
                name="message"
                className="bg-gray-700 bg-opacity-30 rounded-sm px-2 py-1 outline-none placeholder:text-gray-400 placeholder:text-sm border-transparent border"
                maxLength={1000}
                rows={5}
                required
              />
            </div>

            <button className="bg-gray-200 hover:bg-white text-black rounded-sm py-1 px-2 flex items-center justify-center gap-1 disabled:opacity-30">
              Send <RiSendPlaneFill />
            </button>
          </form>

        </div>
      </div>
      <div className='max-section-width flex justify-center items-center gap-2 pt-4 mt-10 border-t border-gray-700'>
        © {new Date().getFullYear()} All rights reserved. Akshay Kumar.
      </div>
    </footer>
  );
}
