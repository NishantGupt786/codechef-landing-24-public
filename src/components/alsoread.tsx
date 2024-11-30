'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface AlsoRead {
    title: string;
    image: string;
    slug: string;
}

const Alsoread: React.FC<AlsoRead> = ({ title, image, slug }) => {
    return (
        <div className="bg-white rounded-lg w-full max-w-md flex flex-col items-center p-3 h-[500px] relative"> {/* Set height of the card */}
            <Link href={`/blog/${slug}`} className="flex flex-col items-center space-y-4 h-full">
                <div className="flex-shrink-0 w-full h-[300px] relative">
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
                <h2 className="font-semibold text-black text-xl">{title}</h2>
                <p className="text-black absolute bottom-3 right-3 hover:text-red-600 hover:font-semibold cursor-pointer transition-colors">
                    Read More
                </p>
            </Link>
        </div>
    );
};

export default Alsoread;
