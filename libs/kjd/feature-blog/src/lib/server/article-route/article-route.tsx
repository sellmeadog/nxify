import { ArticleContent } from '@nxify/kjd-ui-page-route/server';
import { graphql, useFragment as fragmentData } from '../../generated';
import { hygraph } from '@nxify/kjd-data-access-hygraph';
import { Metadata } from 'next';

interface ArticleRouteParams {
  slug: string;
}

interface ArticleRouteProps {
  params: ArticleRouteParams;
}

const ArticleMetadataQuery = graphql(`
  fragment ArticleMetadataQuery on Query {
    metadata: article(where: { slug: $slug }) {
      author {
        name
      }
      hero {
        caption
        title
      }
      tags {
        tag
      }
    }
  }
`);

const ArticleQuery = graphql(`
  query ArticleQuery($slug: String!) {
    ...ArticleContentQuery
    ...ArticleMetadataQuery
  }
`);

export async function ArticleRoute({ params }: ArticleRouteProps) {
  const query = await hygraph.request(ArticleQuery, params);

  return <ArticleContent query={query} />;
}

export async function generateMetadata({
  params,
}: ArticleRouteProps): Promise<Metadata> {
  const query = await hygraph.request(ArticleQuery, {
    slug: params.slug,
  });

  const { metadata } = fragmentData(ArticleMetadataQuery, query);

  return {
    authors: { name: metadata?.author?.name },
    description: metadata?.hero?.caption,
    keywords: metadata?.tags.map(({ tag }) => tag),
    title: metadata?.hero?.title + ' - kennie j. davis',
  };
}
