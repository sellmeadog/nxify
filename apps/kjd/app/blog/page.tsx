import {
  BlogPage,
  pageMetadataGenerator,
} from '@nxify/kjd-feature-blog/server';

export const generateMetadata = pageMetadataGenerator;
export const revalidate = 10;

export default BlogPage;
