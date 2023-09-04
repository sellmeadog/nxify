import { SectionLayout } from '@nxify/kjd-ui-layout';
import { FragmentType, fragmentData, graphql } from '../../generated';
import { ArticleExplorer } from '../article-explorer/article-explorer';

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
    <SectionLayout>
      <header className="prose-headings:m-0 prose-p:m-0">
        <h3 className="empty:hidden font-medium uppercase text-orange-300">
          {fragment.title}
        </h3>
        <p className="empty:hidden">{fragment.subtitle}</p>
      </header>
      <main>
        <ArticleExplorer />
      </main>
    </SectionLayout>
  );
}
