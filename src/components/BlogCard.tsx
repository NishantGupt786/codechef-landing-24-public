'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  image,
  slug,
}) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="bg-white rounded-md flex flex-col overflow-hidden font-Space_Grotesk w-full h-auto mx-2 my-4 xs:w-[280px] xs:h-[380px] sm:w-[300px] sm:h-[400px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] xl:w-[450px] xl:h-[550px] 2xl:w-[480px] 2xl:h-[580px] 2xl:max-w-[450px] 2xl:max-h-[550px] shadow-lg"
    >
      <div className="relative w-full h-60 xs:h-[180px] sm:h-[240px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[430px] overflow-hidden group">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-cover transition-transform duration-400 group-hover:scale-105"
        />
      </div>
      <div className="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 2xl:p-10">
        <p className="font-semibold text-lg mb-2 text-gray-900">{title}</p>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
