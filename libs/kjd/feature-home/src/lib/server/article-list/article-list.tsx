import { format, parseISO } from 'date-fns';

/* eslint-disable-next-line */
export interface ArticleListProps {}

type ArticleQueryResult = {
  articles: { id: string; title: string; excerpt: string; createdAt: string }[];
};

export async function ArticleList(props: ArticleListProps) {
  const res = await fetch('http://localhost:4200/api/hygraph');
  const { articles }: ArticleQueryResult = await res.json();

  return articles.map(Article);
}

type ArticleProps = {
  id: string;
  title: string;
  excerpt: string;
  createdAt: string;
};

function Article({ createdAt, title, excerpt }: ArticleProps) {
  return (
    <article className="flex flex-col gap-3 p-4 md:p-8 lg:p-16 border-b border-b-neutral-700 last-of-type:border-b-transparent">
      <header className="flex flex-col gap-2">
        <h2 className="text-3xl text-cyan-300">{title}</h2>
        <p className="text-md text-neutral-400 uppercase font-bold">
          {format(parseISO(createdAt), 'PPP')}
        </p>
      </header>
      <p className="text-lg text-neutral-200">{excerpt}</p>
    </article>
  );
}
export default ArticleList;
