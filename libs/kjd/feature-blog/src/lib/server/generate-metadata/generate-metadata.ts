import {
  ArticleMetadataBySlugDocument,
  ArticleMetadataFragmentDoc,
} from '../../generated/graphql';
import { Metadata } from 'next';
import { useFragment as fragmentData } from '../../generated';
import { hygraph } from '@nxify/kjd-data-access-hygraph';

type SlugParam = {
  slug: string;
};

export interface GenerateMetadataParams {
  params: SlugParam;
}

export async function generateMetadata({
  params,
}: GenerateMetadataParams): Promise<Metadata> {
  const query = await hygraph.request(ArticleMetadataBySlugDocument, params);
  const fragment = fragmentData(ArticleMetadataFragmentDoc, query.article);

  return {
    title: fragment?.title + ' | kennie j. davis',
    authors: fragment?.author,
    description: fragment?.excerpt,
    keywords: fragment?.tags.map(({ tag }) => tag),
  };
}
