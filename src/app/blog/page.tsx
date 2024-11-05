"use client";
import BlogCard from '@/components/BlogCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "../../styles/enigma-font.css";

export default function Blog() {
  const [posts, setPosts] = useState<Array<{
    title: string;
    brief: string;
    author: { id: string; name: string; username: string };
    slug: string;
    coverImage: string;
  }>>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.post(
          `https://api.hashnode.com/`, {
          query: `
            query Publication {
              publication(host: "blogs.codechefvit.com") {
                posts(first: ${limit * 10}) {
                  edges {
                    node {
                      title
                      brief
                      author {
                        id
                        name
                        username
                      }
                      slug
                      coverImage 
                    }
                  }
                }
              }
            }
          `,
        }, {
          headers: {
            'Authorization': 'API_KEY'
          }
        });

        const data = response.data.data.publication.posts.edges;
        setPosts(data.map((item: { node: any; }) => item.node));
        setTotalPages(Math.ceil(data.length / limit));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    console.log(posts);
    fetchPosts();
  }, []);

  const paginatedPosts = posts.slice((page - 1) * limit, page * limit);

  return (
    <div className="bg-black text-white font-enigma z-0 overflow-hidden">
      <h1 className="text-white font-semibold font-enigma text-4xl text-center md:text-5xl lg:text-7xl pb-10 pt-5"> BLOGS</h1>
      <div className="text-black z-10">
        <div className="grid gap-8 p-5 rounded-lg">
          {paginatedPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              description={post.brief}
              image={{ src: post.coverImage }}
              link={`https://blogs.codechefvit.com/${post.slug}`}
            />
          ))}
        </div>
        <div className="flex justify-end items-center space-x-4 mt-6 mr-10">
          <button onClick={() => setPage((prev) => (prev < 0 ? 1 : prev - 1))} className="px-4 py-2 bg-slate-50 rounded text-black opacity-75">Previous</button>
          <span className="text-white">{`Page ${page} of ${totalPages}`}</span>
          <button onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))} className="px-4 py-2 bg-slate-50 rounded text-black opacity-75">Next</button>
        </div>
      </div>
    </div>
  );
}