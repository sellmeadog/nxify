import { ArticlePreviewList } from '@nxify/kjd-ui-articles';
import { graphql } from '../../generated';
import { GraphQLClient } from 'graphql-request';

const { KJD_HYGRAPH_ENDPOINT } = process.env;

const HomePageRoute = graphql(`
  query HomePage {
    ...ArticlePreviewList
  }
`);

const client = new GraphQLClient(KJD_HYGRAPH_ENDPOINT);

export interface HomePageProps {}

export async function HomePage(props: HomePageProps) {
  const query = await client.request(HomePageRoute);

  return <ArticlePreviewList fragment={query} />;
}
