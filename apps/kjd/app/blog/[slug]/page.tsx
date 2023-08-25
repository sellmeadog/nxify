import {
  ArticlePage,
  generateStaticParams,
} from '@nxify/kjd-feature-blog/server';

const revalidate = 60;

export { generateStaticParams, revalidate };
export default ArticlePage;
