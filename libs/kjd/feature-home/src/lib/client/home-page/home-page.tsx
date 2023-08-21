import { Suspense } from 'react';
import ArticleList from '../../server/article-list/article-list';

export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <div>
      <h1>Welcome to HomePage!</h1>
      <Suspense>
        <ArticleList />
      </Suspense>
    </div>
  );
}
