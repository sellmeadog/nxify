import { ElementType } from 'react';
import { FragmentType, unmaskFragment, graphql } from '../../generated';
import { ArticleExplorerSection } from '../article-explorer-section/article-explorer-section';

const PageSectionExplorerFragment = graphql(`
  fragment PageSectionExplorerFragment on Page {
    sections {
      __typename
      ...ArticleExplorerSectionFragment
    }
  }
`);

const SECTIONS: { [key: string]: ElementType } = {
  ArticleExplorer: ArticleExplorerSection,
};

export interface PageSectionExplorerProps {
  data: FragmentType<typeof PageSectionExplorerFragment>;
}

export function PageSectionExplorer({ data }: PageSectionExplorerProps) {
  const { sections } = unmaskFragment(PageSectionExplorerFragment, data);

  return sections.map((fragment, index) => {
    const Component = SECTIONS[fragment.__typename];

    if (Component) {
      return (
        <Component key={`${fragment.__typename}:${index}`} data={fragment} />
      );
    }

    return null;
  });
}
