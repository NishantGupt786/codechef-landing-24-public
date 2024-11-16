import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({ error: 'Invalid slug' });
  }

  try {
    const response = await axios.post(
      'https://gql.hashnode.com',
      {
        query: `
          query Publication {
  publication(host: "blogs.codechefvit.com") {
    post(slug: ${slug}) {
      title
      subtitle
      publishedAt
      updatedAt
      readTimeInMinutes
      tags {
        name
      }
      content {
        html
      }
      coverImage {
        url
      }
    }
        `,
      },
      {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_HASHNODE_KEY,  
        },
      }
    );

    const post = response.data.data.post;
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    return res.status(200).json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
