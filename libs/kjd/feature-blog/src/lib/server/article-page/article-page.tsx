import { graphql } from '../../generated';
import { hygraph } from '@nxify/kjd-data-access-hygraph';
import { ArticleContent } from '@nxify/kjd-ui-page-fragments';
import { Metadata } from 'next';

const ArticleQuery = graphql(`
  query ArticleQuery($slug: String!) {
    ...ArticleContentQueryFragment
  }
`);

const ArticleMetadataQuery = graphql(`
  query ArticleMetadataQuery($slug: String!) {
    article(where: { slug: $slug }) {
      author {
        name
      }
      createdAt
      hero {
        caption
        title
      }
      tags {
        tag
      }
    }
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
  }
`);

export interface ArticlePageProps {
  params: { slug: string };
}

export async function ArticlePage({ params }: ArticlePageProps) {
  const query = await hygraph.request(ArticleQuery, { slug: params.slug });

  return <ArticleContent data={query} />;
}

export function articleMetadataGenerator(): (
  props: ArticlePageProps
) => Promise<Metadata> {
  return async ({ params }) => {
    const { article, metadata } = await hygraph.request(ArticleMetadataQuery, {
      slug: params.slug,
    });

    return {
      authors: [{ name: article?.author?.name }],
      description: article?.hero?.caption,
      keywords: article?.tags.map(({ tag }) => tag),
      title: `${article?.hero?.title} - kennie j. davis`,
      openGraph: {
        description:
          article?.hero?.caption ?? metadata?.site?.description ?? '',
        images: metadata?.open?.image?.url ?? '',
        title: article?.hero?.title ?? metadata?.site?.title ?? '',
        url: metadata?.open?.url ?? '',
      },
      twitter: {
        card: metadata?.twitter?.card ?? 'summary',
        description:
          article?.hero?.caption ?? metadata?.twitter?.description ?? '',
        images: metadata?.twitter?.image?.url ?? '',
        title: article?.hero?.title ?? metadata?.twitter?.title ?? '',
      },
    };
  };
}
