"use client";
import AlsoRead from "@/components/AlsoRead";
import Spinner from "@/components/ui/Spinner";
import "@/styles/globals.css";
import { ChevronLeft, MoveRight } from 'lucide-react';
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const shuffleArray = (array: Post[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const searchParams = useSearchParams();
    const page = parseInt(searchParams.get("page") || "1");

    useEffect(() => {
        const fetchPost = async (current: number) => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/blog/${slug}`);
                if (!response.ok) throw new Error("Failed to fetch blog post.");
                const data = await response.json();
                setPost(data);

                const response1 = await fetch(`/api/blog/?page=${current}`);
                if (!response1.ok) throw new Error("Failed to fetch related posts.");
                const data1 = await response1.json();
                const filteredRelated = data1.nodes.filter((blog: Post) => blog.slug !== slug);
                const shuffledRelated = shuffleArray(filteredRelated);
                const selectedRelated = shuffledRelated.slice(0, 3);
                setRelatedPosts(selectedRelated);
            } catch (err: any) {
                setPost(null);
                setRelatedPosts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPost(page);
    }, [slug]);

    const truncateContent = (html: string, wordLimit: number) => {
        const text = html.replace(/<[^>]+>/g, "");
        return text.split(" ").slice(0, wordLimit).join(" ") + "...";
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Spinner />
            </div>
        );
    }
    if (!post) {
        return <p className="text-white text-center py-10 font-Space_Grotesk">Post not found.</p>;
    }

    return (
        <div className="blog-post">
            <div className="pt-5">
                <hr className="border-1 border-white w-full" />
                <div className="flex items-center pl-4 gap-2 sm:pl-4">
                    <Link href="/blog">
                        <ChevronLeft className="text-red-600 h-12 w-12" />
                    </Link>
                    <h1 className="text-white font-semibold font-enigma text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:pb-9 sm:pt-8">
                        BLOGS
                    </h1>
                </div>
                <hr className="border-1 border-white w-full" />
            </div>
            <div className="flex flex-col max-w-7xl justify-items-center mx-auto gap-4 px-24 sm:text-lg lg:text-xl font-Space_Grotesk text-white">
                <h1 className="text-center font-enigma px-24 sm:text-3xl md:text-4xl lg:text-5xl font-semibold pt-6 sm:pt-10 pb-6">
                    {post.title}
                </h1>
                <div className="p-4 sm:p-6 md:p-8 lg:p-10 font-Space_Grotesk">
                    <div
                        dangerouslySetInnerHTML={{ __html: post.content.html }}
                        className="content-post mt-4 sm:text-lg lg:text-xl"
                    />
                </div>
            </div>
            <div className="flex gap-2 text-white font-enigma pl-10 pb-4">
                <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
                    ALSO
                </h1>
                <h1 className="text-red-500 font-semibold text-2xl sm:text-3xl lg:text-4xl">
                    READ
                </h1>
                <MoveRight className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
            </div>
            <div className="flex flex-wrap mx-auto justify-center gap-8 font-roboto">
                {relatedPosts.length > 0 ? (
                    relatedPosts.map((relatedPost) => (
                        <AlsoRead
                            key={relatedPost.slug}
                            title={relatedPost.title}
                            image={relatedPost.coverImage.url}
                            slug={relatedPost.slug}
                        />
                    ))
                ) : (
                    <p className="text-white text-center py-10">No related posts found.</p>
                )}
            </div>
        </div>
    );
}
