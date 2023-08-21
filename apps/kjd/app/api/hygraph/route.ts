import request, { gql } from 'graphql-request';
import { NextResponse } from 'next/server';

const QUERY = gql`
  query Articles {
    articles(first: 10) {
      author {
        name
      }
      createdAt
      excerpt
      id
      slug
      title
    }
  }
`;

type ArticleQueryResult = {
  articles: unknown[];
};

export async function GET() {
  try {
    const result = await request<ArticleQueryResult>(
      process.env.KJD_HYGRAPH_ENDPOINT,
      QUERY
    );

    console.log(result);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
