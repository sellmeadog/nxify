import { FragmentType, fragmentData, graphql } from '../../generated';

const PageSectionExplorerFragment = graphql(`
  fragment PageSectionExplorerFragment on Page {
    sections {
      __typename
    }
  }
`);

export interface PageSectionExplorerProps {
  data: FragmentType<typeof PageSectionExplorerFragment>;
}

export function PageSectionExplorer({ data }: PageSectionExplorerProps) {
  const { sections } = fragmentData(PageSectionExplorerFragment, data);

  return (
    <div>
      <pre>{JSON.stringify(sections, undefined, 2)}</pre>
    </div>
  );
}
