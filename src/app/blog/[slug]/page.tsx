"use client";
import { useEffect, useState } from 'react';

interface BlogPost {
    title: string;
    content: string;
    author: {
        name: string;
    };
}
interface BlogPostProps {
    params: { slug: string };
}
export default function BlogPostPage({ params }: BlogPostProps) {
    const { slug } = params;
    const [post, setPost] = useState<BlogPost | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`/api/getblogbyslug/${slug}`);
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
            <h1>{post.title}</h1>
        </div>
    );
}
