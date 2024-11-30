import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const response = await axios.post(
      'https://gql.hashnode.com/',
      {
        query: `
          query Publication {
            publication(host: "blogs.codechefvit.com") {
              posts(first: 50) {
                edges {
                  node {
                    title
                    slug
                    content{
                      html
                    }
                    coverImage {
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
          Authorization: process.env.NEXT_PUBLIC_HASHNODE_KEY, // Use your key from environment variables
        },
      }
    );

    // Extract posts data
    const posts = response.data.data.publication.posts.edges.map(
      (edge: { node: any }) => edge.node
    );

    // Return the blogs as JSON
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
