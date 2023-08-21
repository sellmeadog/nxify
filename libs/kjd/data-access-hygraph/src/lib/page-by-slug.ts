import { GraphQLClient, gql } from 'graphql-request';
import { PageBySlugQuery } from './generated/graphql';

const { KJD_HYGRAPH_ENDPOINT } = process.env;
const client = new GraphQLClient(KJD_HYGRAPH_ENDPOINT);

const PageBySlug = gql`
  query pageBySlug($slug: String = "home") {
    page(where: { slug: $slug }) {
      id
      sections {
        __typename
        ... on HomePageHero {
          content {
            raw
          }
          id
          image {
            url
          }
          subtitle
          title
        }
      }
    }
  }
`;

export async function pageBySlug(slug?: string) {
  const result: PageBySlugQuery = await client.request(PageBySlug, { slug });
  return result.page;
}
