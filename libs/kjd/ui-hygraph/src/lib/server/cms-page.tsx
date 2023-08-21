/* eslint-disable @typescript-eslint/no-explicit-any */
import { cmsPageBySlug } from '@nxify/kjd-data-access-hygraph';
import { HeroSection } from '@nxify/kjd-feature-home';
import { notFound } from 'next/navigation';

const CMS_PAGE_SECTION = {
  HomePageHero: HeroSection,
};

export interface CMSPageProps {
  params: { slug?: string };
}

export async function CMSPage({ params }: CMSPageProps) {
  const page = await cmsPageBySlug(params.slug);

  if (!page) {
    return notFound();
  }

  return page.sections.map(({ __typename, ...rest }) => {
    const Component = CMS_PAGE_SECTION[__typename];

    if (Component) {
      return <Component {...(rest as any)} />;
    }

    return null;
  });
}
