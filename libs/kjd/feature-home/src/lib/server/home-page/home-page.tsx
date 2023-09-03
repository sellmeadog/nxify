import { hygraph } from '@nxify/kjd-data-access-hygraph';
import { PageContent } from '@nxify/kjd-ui-page-fragments/server';
import { graphql } from '../../generated';

const HomePageQuery = graphql(`
  query PageQuery($slug: String) {
    ...PageContentQueryFragment
  }
`);

export interface HomePageProps {}

export async function HomePage() {
  const query = await hygraph.request(HomePageQuery, { slug: 'home' });

  return <PageContent data={query} />;
}
