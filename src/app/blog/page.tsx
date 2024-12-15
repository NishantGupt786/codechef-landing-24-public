"use client";
import BlogCard from '@/components/BlogCard';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Post {
  title: string;
  coverImage: {
    url: string;
  };
  slug: string;
  content: {
    html: string;
  };
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const limit = 9;

  const page = parseInt(searchParams.get("page") || "1", 10);

  const truncateContent = (html: string, wordLimit: number) => {
    const plainText = html.replace(/<[^>]+>/g, "");
    const words = plainText.split(/\s+/);
    return words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "..." : "");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/blog?page=${page}`);
        if (!response.ok) throw new Error("Failed to fetch posts.");
        const data = await response.json();
        if (data?.nodes) {
          setPosts(data.nodes);
          setHasNextPage(data.pageInfo?.hasNextPage || false);
          setHasPreviousPage(data.pageInfo?.hasPreviousPage || false);
        } else {
          setPosts([]);
        }
      } catch (err) {
        setPosts(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`/blog?${params.toString()}`);
  };

  if (loading) {
    return <div className="text-white text-center text-5x1 mt-10 py-10 font-Space_Grotesk">Loading...</div>;
  }

  if (error) {
    return <div className="text-white text-center py-10 font-Space_Grotesk">Error: {error}</div>;
  }

  if (!posts || posts.length === 0) {
    return <div className="text-white text-center py-10 font">No posts available.</div>;
  }

  return (
    <div className="bg-black text-white px-4 py-10">
      <h1 className="text-white font-semibold font-enigma text-4xl text-center md:text-5xl lg:text-7xl pt-5">
        BLOGS
      </h1>
      <div className="text-black">
        <div className="grid justify-items-center sm:grid-cols-1 lg:grid-cols-3 m-24 gap-y-10">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={truncateContent(post.content.html, 20)}
              image={post.coverImage.url}
              slug={post.slug}
            />
          ))}
        </div>
        <div className="flex justify-end items-center space-x-4 mt-6 mr-10 font-enigma">
          <button
            onClick={() => handlePageChange(page - 1)}
            className={`px-4 py-2 bg-slate-50 rounded text-black opacity-75 ${!hasPreviousPage ? "cursor-not-allowed opacity-50" : ""
              }`}
            disabled={!hasPreviousPage}
            aria-label="Previous Page"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(page + 1)}
            className={`px-4 py-2 bg-slate-50 rounded text-black opacity-75 ${!hasNextPage ? "cursor-not-allowed opacity-50" : ""
              }`}
            disabled={!hasNextPage}
            aria-label="Next Page"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
