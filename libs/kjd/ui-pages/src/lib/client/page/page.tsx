import { ComponentType, ElementType } from 'react';
import { FragmentType, useFragment } from '../../generated';
import { PageContentFragmentDoc } from '../../generated/graphql';
import HeroSection from '../hero-section/hero-section';

const SECTIONS: { [key: string]: ComponentType | ElementType } = {
  HomePageHero: HeroSection,
};

export interface PageContentProps {
  fragment?: FragmentType<typeof PageContentFragmentDoc>;
}

export function Page({ fragment }: PageContentProps) {
  const page = useFragment(PageContentFragmentDoc, fragment);

  return page?.page?.sections.map((section) => {
    const Component = SECTIONS[section.__typename];

    if (Component) {
      return <Component fragment={section} />;
    }

    return null;
  });
}

export default Page;
