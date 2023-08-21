import { HeroSection } from '../../client/hero-section/hero-section';
import { cmsPageBySlug } from '@nxify/kjd-data-access-hygraph';
import { ContentPage } from '@nxify/kjd-ui-hygraph';
import { notFound } from 'next/navigation';

export interface HomePageProps {}

export async function HomePage(props: HomePageProps) {
  const page = await cmsPageBySlug('home');

  if (!page) {
    return notFound();
  }

  return (
    <ContentPage
      components={{ HomePageHero: HeroSection }}
      sections={page?.sections}
    />
  );
}
