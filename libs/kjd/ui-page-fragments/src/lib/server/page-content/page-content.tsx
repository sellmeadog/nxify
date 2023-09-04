import { notFound } from 'next/navigation';
import { FragmentType, fragmentData, graphql } from '../../generated';
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
}

export function PageContent({ data }: PageContentProps) {
  const { page } = fragmentData(PageContentQueryFragment, data);

  if (!page) {
    return notFound();
  }

  return (
    <>
      <PageHero data={page} />
      <PageSectionExplorer data={page} />
    </>
  );
}
