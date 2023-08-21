import { ArticlePreviewListData } from '@nxify/kjd-data-access-article';
import { ArticlePreviewList } from '@nxify/kjd-ui-article';

export type ArticlePreviewSectionProps = ArticlePreviewListData;

export function ArticlePreviewSection({
  articles,
}: ArticlePreviewSectionProps) {
  return (
    <section className="max-w-5xl mx-auto">
      <ArticlePreviewList articles={articles} />
    </section>
  );
}
