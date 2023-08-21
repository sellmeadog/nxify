import { fetchArticlePreviewList } from '@nxify/kjd-data-access-article';
import { ArticlePreviewSection } from '../../client/article-preview-section/article-preview-section';

export interface HomePageProps {}

export async function HomePage(props: HomePageProps) {
  const { articles } = await fetchArticlePreviewList();

  return (
    <div>
      <h1>Welcome to HomePage!</h1>
      <ArticlePreviewSection articles={articles} />
    </div>
  );
}
