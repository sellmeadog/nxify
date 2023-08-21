import { fetchArticlePreviewList } from '@nxify/kjd-data-access-article';
import { ArticlePreviewSection } from '../../client/article-preview-section/article-preview-section';
import { HeroSection } from '../../client/hero-section/hero-section';

export interface HomePageProps {}

export async function HomePage(props: HomePageProps) {
  const { articles } = await fetchArticlePreviewList();

  return (
    <>
      <HeroSection />
      <ArticlePreviewSection articles={articles} />
    </>
  );
}
