'use client'; 
import Link from 'next/link';
import React, { useState } from 'react';
interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const dummyData = [
    {
        slug: "blog1",
        title: "blog1",
        description: "Lorem ipsum dolor sit amet consectetur. Arcu feugiat neque curabitur porttitor viverra nunc laoreet. Tortor neque odio auctor est in egestas arcu mattis enim.",
        image: "https://placehold.co/200x200" 
    },
    {
        slug: "blog2",
        title: "blog2",
        description: "Lorem ipsum dolor sit amet consectetur. Arcu feugiat neque curabitur porttitor viverra nunc laoreet. Tortor neque odio auctor est in egestas arcu mattis enim.",
        image: "https://placehold.co/200x200" 
    },
    {
        slug: "blog3",
        title: "blog3",
        description: "Lorem ipsum dolor sit amet consectetur. Arcu feugiat neque curabitur porttitor viverra nunc laoreet. Tortor neque odio auctor est in egestas arcu mattis enim.",
        image: "https://placehold.co/200x200" 
    },
    {
        slug: "blog4",
        title: "blog4",
        description: "Lorem ipsum dolor sit amet consectetur. Arcu feugiat neque curabitur porttitor viverra nunc laoreet. Tortor neque odio auctor est in egestas arcu mattis enim.",
        image: "https://placehold.co/200x200" 
    },
    {
        slug: "blog5",
        title: "blog5",
        description: "Lorem ipsum dolor sit amet consectetur. Arcu feugiat neque curabitur porttitor viverra nunc laoreet. Tortor neque odio auctor est in egestas arcu mattis enim.",
        image: "https://placehold.co/200x200" 
    },
    
];

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image, slug }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`card bg-white rounded-md z-10 ${isHovered ? 'hovered' : ''}`} 
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}>
      <Link href={`/blog/${slug}`}>
        <div className=' flex p-2'>
          <img src={image} alt={title} className="card-image p-3 rounded-md h-200 flex-col sm:flex-row" />
          <div className="card-content p-3 flex flex-col sm:flex-col">
            <h2 className="card-title py-2 font-bold">{title}</h2>
            <p className="card-description">{description}</p>
            <p className="read-more pt-10 pl-100" style={{ color: isHovered ? 'red' : 'black', fontWeight: isHovered ? '600' : '400' }}>Read More </p> 
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;