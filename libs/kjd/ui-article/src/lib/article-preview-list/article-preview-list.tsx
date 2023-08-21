import { ArticlePreviewData } from '@nxify/kjd-data-access-article';
import { ArticlePreview } from '../article-preview/article-preview';

export interface ArticlePreviewListProps {
  articles?: ArticlePreviewData[];
}

export function ArticlePreviewList({ articles }: ArticlePreviewListProps) {
  return articles?.map(ArticlePreview);
}
