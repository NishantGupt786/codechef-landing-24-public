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
      className="bg-white rounded-md flex flex-col overflow-hidden font-Space_Grotesk"
      style={{ width: '400px', height: '500px', margin: '10px' }}
    >
      <div className="relative w-full h-[60%] overflow-hidden group">
        <div className="absolute inset-0  group-hover:scale-105">
          <Image
            src={image}
            alt={title}
            layout="fill"
            className="object-cover group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"></div>
      </div>
      <div className="p-9">
        <p className="font-semibold pb-2">{title}</p>
        <p className="text-gray-800 text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
