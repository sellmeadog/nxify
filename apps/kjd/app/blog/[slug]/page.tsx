import {
  ArticlePage,
  articleMetadataGenerator,
} from '@nxify/kjd-feature-blog/server';

export const generateMetadata = articleMetadataGenerator;
export const revalidate = 10;

export default ArticlePage;
