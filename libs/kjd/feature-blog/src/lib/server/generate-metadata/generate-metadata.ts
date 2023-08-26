import { GraphQLClient } from 'graphql-request';
import {
  ArticleMetadataBySlugDocument,
  ArticleMetadataFragmentDoc,
} from '../../generated/graphql';
import { Metadata } from 'next';
import { useFragment as fragmentData } from '../../generated';

const client = new GraphQLClient(process.env.KJD_HYGRAPH_ENDPOINT, {
  fetch: fetch,
});

type SlugParam = {
  slug: string;
};

export interface GenerateMetadataParams {
  params: SlugParam;
}

export async function generateMetadata({
  params,
}: GenerateMetadataParams): Promise<Metadata> {
  const query = await client.request(ArticleMetadataBySlugDocument, params);
  const fragment = fragmentData(ArticleMetadataFragmentDoc, query.article);

  return {
    title: fragment?.title + ' | kennie j. davis',
    authors: fragment?.author,
    description: fragment?.excerpt,
    keywords: fragment?.tags.map(({ tag }) => tag),
  };
}
