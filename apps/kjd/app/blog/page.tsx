import {
  BlogPage,
  blogPageMetadataGenerator,
} from '@nxify/kjd-feature-blog/server';

export const generateMetadata = blogPageMetadataGenerator;
export const revalidate = 10;

export default BlogPage;
