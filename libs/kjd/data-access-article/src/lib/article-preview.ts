export interface ArticlePreviewListData {
  articles: ArticlePreviewData[];
}

export interface ArticlePreviewData {
  author: AuthorPreviewData;
  createdAt: string;
  excerpt: string;
  id: string;
  slug: string;
  title: string;
}

export interface AuthorPreviewData {
  name: string;
}

export async function fetchArticlePreviewList(): Promise<ArticlePreviewListData> {
  const response = await fetch('http://localhost:4200/api/hygraph');
  const json = await response.json();

  return json;
}
