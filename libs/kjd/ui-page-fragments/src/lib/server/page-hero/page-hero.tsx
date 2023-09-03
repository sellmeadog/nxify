import { FragmentType, fragmentData, graphql } from '../../generated';

const PageHeroFragment = graphql(`
  fragment PageHeroFragment on Page {
    hero {
      caption
      image {
        url
      }
      subtitle
      title
    }
  }
`);

export interface PageHeroProps {
  data?: FragmentType<typeof PageHeroFragment>;
}

export function PageHero({ data }: PageHeroProps) {
  const fragment = fragmentData(PageHeroFragment, data);

  return (
    <div>
      <pre>{JSON.stringify(fragment, null, 2)}</pre>
    </div>
  );
}
