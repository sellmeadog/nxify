import { hygraph } from '@nxify/kjd-data-access-hygraph';
import { PageContent } from '@nxify/kjd-ui-page-fragments';
import { graphql } from '../../generated';

const BlogPageQuery = graphql(`
  query PageQuery($slug: String) {
    ...PageContentQueryFragment
  }
`);

export interface BlogPageProps {}

export async function BlogPage() {
  const query = await hygraph.request(BlogPageQuery, { slug: 'blog' });

  return <PageContent data={query} />;
}
