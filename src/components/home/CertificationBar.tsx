import React from 'react';
import Image from 'next/image';
import { allCertificates } from 'utils/constants/Certificate';

const CertificationBar = () => {
    // Filter certificates to show each unique organization logo only once
    const certifications = Object.values(allCertificates).reduce((acc, current) => {
        const isDuplicated = acc.find((item) => item.orgName === current.orgName);
        if (!isDuplicated && current.orgName) {
            return acc.concat([current]);
        }
        return acc;
    }, [] as any[]);

    // Duplicate the certifications to create the infinite effect
    const marqueeItems = [...certifications, ...certifications];

    return (
        <div className='marquee-container'>
            <div className='marquee-content'>
                {marqueeItems.map((cert, index) => (
                    <div
                        key={index}
                        className='flex items-center gap-4 group grayscale hover:grayscale-0 transition-all duration-300 px-6'
                    >
                        <div className='relative w-12 h-8 md:w-16 md:h-10 flex-center'>
                            {cert.imageURL && (
                                <Image
                                    src={cert.imageURL}
                                    alt={`${cert.title} - Akshay Kumar`}
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CertificationBar;
