import { hygraph } from '@nxify/kjd-data-access-hygraph';
import { graphql } from '../../generated';
import { PageContent } from '../page-content/page-content';
import { Metadata } from 'next';

const PageQuery = graphql(`
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

export interface PageProps {
  slug: string;
}

export async function Page({ slug }: PageProps) {
  const query = await hygraph.request(PageQuery, { slug });

  return <PageContent data={query} variant="home" />;
}

export function pageMetadataGeneratorFactory(
  slug: string
): () => Promise<Metadata> {
  return async () => {
    const { page } = await hygraph.request(PageMetadataQuery, {
      slug,
    });

    return {
      authors: [{ name: 'Kennie Davis' }],
      description: page?.hero?.caption,
      title: `${page?.hero?.title} - kennie j. davis`,
    };
  };
}
