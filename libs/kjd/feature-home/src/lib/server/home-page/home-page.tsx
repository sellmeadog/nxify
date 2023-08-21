import { HeroSection } from '../../client/hero-section/hero-section';
import { pageBySlug } from '@nxify/kjd-data-access-hygraph';
import { ContentPage } from '@nxify/kjd-ui-hygraph';
import { notFound } from 'next/navigation';

const COMPONENT_MAP = { HomePageHero: HeroSection };

export interface HomePageProps {}

export async function HomePage(props: HomePageProps) {
  const page = await pageBySlug('home');

  if (!page) {
    return notFound();
  }

  return <ContentPage components={COMPONENT_MAP} sections={page?.sections} />;
}
