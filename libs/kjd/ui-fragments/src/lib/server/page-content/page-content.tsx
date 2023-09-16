import { notFound } from 'next/navigation';
import { FragmentType, unmaskFragment, graphql } from '../../generated';
import { PageHero } from '../page-hero/page-hero';
import { PageSectionExplorer } from '../page-section-explorer/page-section-explorer';

const PageContentQueryFragment = graphql(`
  fragment PageContentQueryFragment on Query {
    page(where: { slug: $slug }) {
      ...PageHeroFragment
      ...PageSectionExplorerFragment
    }
  }
`);

export interface PageContentProps {
  data: FragmentType<typeof PageContentQueryFragment>;
  variant?: 'home' | 'page';
}

export function PageContent({ data, variant }: PageContentProps) {
  const { page } = unmaskFragment(PageContentQueryFragment, data);

  if (!page) {
    return notFound();
  }

  return (
    <>
      <PageHero data={page} variant={variant} />
      <PageSectionExplorer data={page} />
    </>
  );
}
