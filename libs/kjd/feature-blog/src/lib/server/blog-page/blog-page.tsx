import { Page, pageMetadataGeneratorFactory } from '@nxify/kjd-ui-fragments';

export const blogPageMetadataGenerator = pageMetadataGeneratorFactory('blog');

export async function BlogPage() {
  return <Page slug="blog" />;
}
