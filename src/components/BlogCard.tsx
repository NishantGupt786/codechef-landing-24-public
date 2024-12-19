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
      className="bg-white rounded-md flex flex-col overflow-hidden font-Space_Grotesk w-full h-auto mx-auto my-4 max-w-[90%] shadow-lg"
    >
      <div className="relative w-full h-60 xs:h-[150px] sm:h-[240px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden group">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-cover transition-transform duration-400 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="font-semibold text-lg mb-2 text-gray-900">{title}</p>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
