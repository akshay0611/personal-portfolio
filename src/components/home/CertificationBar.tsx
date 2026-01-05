import React, { useState, Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { allCertificates } from 'utils/constants/Certificate';
import { AiOutlineClose, AiOutlineLink } from 'react-icons/ai';

const CertificationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOrg, setSelectedOrg] = useState<string | null>(null);

    // Filter certificates to show each unique organization logo only once for the marquee
    const certifications = Object.values(allCertificates).reduce((acc, current) => {
        const isDuplicated = acc.find((item) => item.orgName === current.orgName);
        if (!isDuplicated && current.orgName) {
            return acc.concat([current]);
        }
        return acc;
    }, [] as any[]);

    // Get all certificates for the selected organization
    const orgCertificates = Object.values(allCertificates).filter(
        (cert) => cert.orgName === selectedOrg
    );

    const openModal = (orgName: string) => {
        setSelectedOrg(orgName);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedOrg(null);
    };

    // Duplicate certificates for marquee
    const marqueeItems = [...certifications, ...certifications];

    return (
        <>
            <div className='overflow-x-hidden w-full relative pt-16 -mt-16 bg-transparent pointer-events-none'>
                <div className='marquee-container !overflow-visible !bg-zinc-900/50 pointer-events-auto'>
                    <div className='marquee-content !overflow-visible'>
                        {marqueeItems.map((cert, index) => {
                            const count = Object.values(allCertificates).filter(c => c.orgName === cert.orgName).length;
                            return (
                                <div
                                    key={index}
                                    onClick={() => openModal(cert.orgName)}
                                    className='flex items-center gap-4 group grayscale hover:grayscale-0 transition-all duration-300 px-6 cursor-pointer relative z-10'
                                >
                                    <div className='relative w-12 h-8 md:w-16 md:h-10 flex-center'>
                                        {cert.imageURL && (
                                            <Image
                                                src={cert.imageURL}
                                                alt={`${cert.orgName} Logo - Akshay Kumar`}
                                                layout='fill'
                                                objectFit='contain'
                                                className='opacity-70 group-hover:opacity-100 transition-opacity'
                                                loader={({ src }) => src}
                                                unoptimized={true}
                                            />
                                        )}
                                    </div>
                                    <span className='text-zinc-500 group-hover:text-white transition-colors font-medium text-sm md:text-base whitespace-nowrap'>
                                        {cert.orgName}
                                    </span>

                                    {/* Hover Tooltip (Text Bubble) */}
                                    <div className='absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 bg-blue-600 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap mb-2 shadow-[0_10px_20px_rgba(0,0,0,0.5)] translate-y-2 group-hover:translate-y-0 z-[100]'>
                                        Click to view {count} {cert.orgName} Certification{count > 1 ? 's' : ''}
                                        {/* Arrow */}
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-600 rotate-45 -z-10" />
                                    </div>

                                    {/* Notification Badge */}
                                    <div className='absolute -top-1 -right-1 bg-blue-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100 shadow-md z-20'>
                                        {count}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Certification Modal */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[200]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-xl bg-zinc-950 p-6 text-left align-middle shadow-xl transition-all border border-zinc-800">
                                    <div className="flex items-center justify-between mb-6 border-b border-zinc-900 pb-4">
                                        <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-white flex items-center gap-3">
                                            {selectedOrg} Certifications
                                            <span className='text-sm font-normal text-zinc-500 px-2 py-0.5 bg-zinc-900 rounded-full'>
                                                {orgCertificates.length}
                                            </span>
                                        </Dialog.Title>
                                        <button
                                            onClick={closeModal}
                                            className="text-zinc-500 hover:text-white transition-colors p-1"
                                        >
                                            <AiOutlineClose size={24} />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                                        {orgCertificates.map((cert, idx) => (
                                            <div key={idx} className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-zinc-700 transition-colors">
                                                <div>
                                                    <h4 className="text-white font-medium">{cert.title}</h4>
                                                    <p className="text-zinc-500 text-sm mt-1">{cert.fromDate} {cert.toDate && cert.toDate !== cert.fromDate ? `- ${cert.toDate}` : ''}</p>
                                                </div>
                                                {cert.url && (
                                                    <a
                                                        href={cert.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-xs bg-white text-black px-3 py-1.5 rounded uppercase font-semibold hover:bg-zinc-200 transition-colors shrink-0"
                                                    >
                                                        Verify <AiOutlineLink />
                                                    </a>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default CertificationBar;
