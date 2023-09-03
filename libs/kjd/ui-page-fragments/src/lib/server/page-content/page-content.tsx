import { notFound } from 'next/navigation';
import { FragmentType, fragmentData, graphql } from '../../generated';
import { PageHero } from '../page-hero/page-hero';

const PageContentQueryFragment = graphql(`
  fragment PageContentQueryFragment on Query {
    page(where: { slug: $slug }) {
      ...PageHeroFragment
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
      <div></div>
    </>
  );
}
