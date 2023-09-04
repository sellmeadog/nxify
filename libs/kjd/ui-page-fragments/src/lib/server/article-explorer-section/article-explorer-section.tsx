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
    <section className="odd:bg-neutral-800">
      <header>
        <h3 className="empty:hidden">{fragment.title}</h3>
        <p className="empty:hidden">{fragment.subtitle}</p>
      </header>
      <main>
        <ArticleExplorer />
      </main>
    </section>
  );
}
