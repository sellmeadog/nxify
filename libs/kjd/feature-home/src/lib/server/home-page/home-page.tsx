import { ArticlePreviewList } from '@nxify/kjd-ui-articles';
import { graphql } from '../../generated';
import { GraphQLClient } from 'graphql-request';
import { Page } from '@nxify/kjd-ui-pages';
import { Menu } from '@nxify/kjd-ui-layout';

const { KJD_HYGRAPH_ENDPOINT } = process.env;

const HomePageRoute = graphql(`
  query HomePage($slug: String!) {
    ...PageContent
    ...ArticlePreviewList
  }
`);

const client = new GraphQLClient(KJD_HYGRAPH_ENDPOINT);

export interface HomePageProps {}

export async function HomePage(props: HomePageProps) {
  const query = await client.request(HomePageRoute, { slug: 'home' });

  return (
    <>
      <Menu />
      <Page fragment={query} />
      <ArticlePreviewList fragment={query} />;
    </>
  );
}
