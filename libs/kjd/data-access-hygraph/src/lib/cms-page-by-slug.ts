import { GraphQLClient, gql } from 'graphql-request';
import { PageBySlugQuery } from './generated/graphql';

const { KJD_HYGRAPH_ENDPOINT } = process.env;
const client = new GraphQLClient(KJD_HYGRAPH_ENDPOINT);

const CMSPageBySlug = gql`
  query pageBySlug($slug: String = "home") {
    page(where: { slug: $slug }) {
      id
      sections {
        __typename
        ... on HomePageHero {
          id
          image {
            url
          }
          title
        }
      }
      title
    }
  }
`;

export async function cmsPageBySlug(slug?: string) {
  const result: PageBySlugQuery = await client.request(CMSPageBySlug, { slug });
  return result.page;
}
