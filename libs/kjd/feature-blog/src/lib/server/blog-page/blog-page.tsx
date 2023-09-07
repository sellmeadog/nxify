import { hygraph } from '@nxify/kjd-data-access-hygraph';
import { PageContent } from '@nxify/kjd-ui-page-fragments';
import { graphql } from '../../generated';
import { Metadata } from 'next';

const BlogPageQuery = graphql(`
  query PageQuery($slug: String) {
    ...PageContentQueryFragment
  }
`);

const PageMetadataQuery = graphql(`
  query PageMetadataQuery($slug: String) {
    page(where: { slug: $slug }) {
      createdAt
      hero {
        caption
        title
      }
    }
  }
`);

export interface BlogPageProps {}

export async function BlogPage() {
  const query = await hygraph.request(BlogPageQuery, { slug: 'blog' });

  return <PageContent data={query} />;
}

export async function pageMetadataGenerator(): Promise<Metadata> {
  const { page } = await hygraph.request(PageMetadataQuery, {
    slug: 'blog',
  });

  return {
    authors: [{ name: 'Kennie Davis' }],
    description: page?.hero?.caption,
    title: `${page?.hero?.title} - kennie j. davis`,
  };
}
