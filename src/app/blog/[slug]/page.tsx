'use client';
import arrow from "@/assets/images/arrow.svg";
import AlsoRead from "@/components/alsoread";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Post {
    title: string;
    author: {
        name: string;
    };
    content: {
        html: string;
    };
    coverImage: {
        url: string;
    };
    slug: string;
}

interface BlogPostProps {
    params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostProps) {
    const { slug } = params;
    const [post, setPost] = useState<Post | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
    const shuffleArray = (array: Post[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`/api/blog/${slug}`);
                const data = await response.json();
                setPost(data);
                const response1 = await fetch(`/api/blog`);
                const data1 = await response1.json();
                const filteredRelated = data1.filter((blog: Post) => blog.slug !== slug);
                const shuffledRelated = shuffleArray(filteredRelated);
                const selectedRelated = shuffledRelated.slice(0, 3);

                setRelatedPosts(selectedRelated);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        fetchPost();
    }, [slug]);

    if (!post || !relatedPosts.length) return <p>Loading...</p>;
    const truncateContent = (html: string, wordLimit: number) => {
        const text = html.replace(/<[^>]+>/g, "");
        return text.split(" ").slice(0, wordLimit).join(" ") + "...";
    };

    return (
        <div className="blog-post">
            <div className="pt-5">
                <hr className="border-1 border-white" />
                <div className="flex pl-9">
                    <Link href="/blog">
                        <Image
                            src={arrow}
                            alt="Back to Blogs"
                            width={50}
                            height={50}
                            className="pt-4 pl-3 justify-center sm:w-400 sm:h-400"
                        />
                    </Link>
                    <h1 className="text-white font-semibold font-enigma text-3xl sm:text-3xl md:text-5xl lg:text-5xl pb-9 pt-8 pl-5">
                        BLOGS
                    </h1>
                </div>
                <hr className="border-1 border-white" />
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-6 text-2xl font-enigma font-semibold text-white">
                <h1 className="text-white font-semibold font-enigma text-center text-5xl md:text-4xl lg:text-7xl pt-10 pb-10">
                    {post.title}
                </h1>
                <div className="p-10">
                    <div
                        dangerouslySetInnerHTML={{ __html: post.content.html }}
                        className="mt-4 text-lg leading-relaxed"
                    />
                    <div className="flex gap-2 pt-10 ">
                        <h1 className="font-semibold font-enigma text-3xl md:text-2xl lg:text-3xl pb-9 pt-8">
                            ALSO
                        </h1>
                        <h1 className="text-red-500 font-semibold font-enigma text-3xl md:text-2xl lg:text-3xl pb-9 pt-8">
                            READ
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {relatedPosts.map((relatedPost) => (
                            <AlsoRead
                                key={relatedPost.slug}
                                title={relatedPost.title}
                                image={relatedPost.coverImage.url}
                                slug={relatedPost.slug}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}
