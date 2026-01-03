import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled upto given distance
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleVisibilityAndSidebar = () => {
            const isSidebarOpen = document.body.classList.contains('sidebar-open');
            if (window.scrollY > 300 && !isSidebarOpen) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleVisibilityAndSidebar);
        // Also listen for mutations to the body class list
        const observer = new MutationObserver(handleVisibilityAndSidebar);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        return () => {
            window.removeEventListener('scroll', handleVisibilityAndSidebar);
            observer.disconnect();
        };
    }, []);

    return (
        <div className='fixed bottom-8 right-8 z-50'>
            <button
                type='button'
                onClick={scrollToTop}
                className={`
                    p-3 rounded-full bg-blue-600 text-white shadow-lg 
                    transition-all duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-1 focus:outline-none
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
                `}
                aria-label='Back to top'
            >
                <FaArrowUp className='h-6 w-6' aria-hidden='true' />
            </button>
        </div>
    );
};

export default BackToTop;
