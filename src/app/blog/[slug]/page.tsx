"use client";
import { useEffect, useState } from 'react';
interface Post {
    title: string;
    brief: string;
    readTimeInMinutes: string;
    author: {
        name: string;
    };
    content: {
        html: string;
    };
    coverImage: {
        url: string;
    };
    tags: {
        name: string;
    };
}
interface BlogPostProps {
    params: { slug: string };
}
export default function BlogPostPage({ params }: BlogPostProps) {
    const { slug } = params;
    const [post, setPost] = useState<Post | null>(null);
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`/api/${slug}/route`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [slug]);
    if (!post) return <p>Loading...</p>;
    return (
        <div className="blog-post">
            <h1 className="text-white font-semibold font-enigma text-2xl md:text-3xl lg:text-4xl pb-10 pt-5 pl-6">BLOGS</h1>
            <h1 className="text-white font-semibold font-enigma text-center text-2xl md:text-3xl lg:text-5xl pb-10 pt-5 pr-5 pl-5">{params.slug}</h1>
            {/* <h1>{post.title}</h1> */}
        </div>
    );
}