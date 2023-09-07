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
    metadata(where: { id: "clm9qf5ek1hnk0amzfuxh62yf" }) {
      id
      open {
        description
        image {
          url
        }
        title
        url
      }
      site {
        description
        title
      }
      twitter {
        card
        description
        image {
          url
        }
        title
      }
    }
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
    const { metadata, page } = await hygraph.request(PageMetadataQuery, {
      slug,
    });

    return {
      authors: [{ name: 'Kennie Davis' }],
      description: page?.hero?.caption ?? metadata?.site?.description,
      title: `${page?.hero?.title ?? metadata?.site?.title} - ${
        metadata?.site?.title
      }`,
      openGraph: {
        description: page?.hero?.caption ?? metadata?.site?.description ?? '',
        images: metadata?.open?.image?.url ?? '',
        title: page?.hero?.title ?? metadata?.site?.title ?? '',
        url: metadata?.open?.url ?? '',
      },
      twitter: {
        card: metadata?.twitter?.card ?? 'summary',
        description:
          page?.hero?.caption ?? metadata?.twitter?.description ?? '',
        images: metadata?.twitter?.image?.url ?? '',
        title: page?.hero?.title ?? metadata?.twitter?.title ?? '',
      },
    };
  };
}
