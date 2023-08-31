import { ArticleContent } from '@nxify/kjd-ui-page-route/server';

export const revalidate = 60;

interface ArticleRouteParams {
  slug: string;
}

interface ArticleRouteProps {
  params: ArticleRouteParams;
}

export async function ArticleRoute({ params }: ArticleRouteProps) {
  return <ArticleContent slug={params.slug} />;
}
