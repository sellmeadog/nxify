import { Page, pageMetadataGeneratorFactory } from '@nxify/kjd-ui-fragments';

export const homePageMetadataGenerator = pageMetadataGeneratorFactory('home');

export async function HomePage() {
  return <Page slug="home" />;
}
