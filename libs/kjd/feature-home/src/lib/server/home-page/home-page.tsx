import { ArticlePreviewList } from '@nxify/kjd-ui-articles';
import { graphql } from '../../generated';
import { Page } from '@nxify/kjd-ui-pages';
import { Menu } from '@nxify/kjd-ui-layout';
import { hygraph } from '@nxify/kjd-data-access-hygraph';

const HomePageRoute = graphql(`
  query HomePage($slug: String!) {
    ...PageContent
    ...ArticlePreviewList
  }
`);

export interface HomePageProps {}

export async function HomePage(props: HomePageProps) {
  const query = await hygraph.request(HomePageRoute, { slug: 'home' });

  return (
    <>
      <Menu />
      <Page fragment={query} />
      <ArticlePreviewList fragment={query} />;
    </>
  );
}
