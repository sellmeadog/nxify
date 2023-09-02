import { FragmentType, fragmentData, graphql } from '../../generated';

const PageContentFragment = graphql(`
  fragment PageContent on Page {
    ...PageHero
  }
`);

export interface PageContentProps {
  data?: FragmentType<typeof PageContentFragment>;
}

export function PageContent({ data }: PageContentProps) {
  const fragment = fragmentData(PageContentFragment, data);

  return (
    <div>
      <pre>{JSON.stringify(fragment)}</pre>
    </div>
  );
}
