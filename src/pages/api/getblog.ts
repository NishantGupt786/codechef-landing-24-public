import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.post(
      'https://gql.hashnode.com/',
      {
        query: `
          query Publication {
            publication(host: "blogs.codechefvit.com") {
              posts(first : 50) {
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
                    coverImage{
                      url 
                    }
                  }
                }
              }
            }
          }
        `,
      },
      {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_HASHNODE_KEY,
        }
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
}
