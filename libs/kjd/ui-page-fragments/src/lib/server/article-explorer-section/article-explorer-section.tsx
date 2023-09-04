import { FragmentType, fragmentData, graphql } from '../../generated';

const ArticleExplorerSectionFragment = graphql(`
  fragment ArticleExplorerSectionFragment on ArticleExplorer {
    first
    id
    subtitle
    title
  }
`);

export interface ArticleExplorerSectionProps {
  data?: FragmentType<typeof ArticleExplorerSectionFragment>;
}

export function ArticleExplorerSection({ data }: ArticleExplorerSectionProps) {
  if (!data) {
    return null;
  }

  const fragment = fragmentData(ArticleExplorerSectionFragment, data);

  return (
    <div>
      <pre>{JSON.stringify(fragment, undefined, 2)}</pre>
    </div>
  );
}
