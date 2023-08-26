import {
  ArticlePage,
  generateMetadata,
  generateStaticParams,
} from '@nxify/kjd-feature-blog/server';

const revalidate = 60;

export { generateMetadata, generateStaticParams, revalidate };
export default ArticlePage;
