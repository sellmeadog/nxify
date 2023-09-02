import { ArticleBody, ArticleHero } from '@nxify/kjd-ui-articles';
import { graphql } from '../../generated';
import { ArticlePageRouteParamsDocument } from '../../generated/graphql';
import { Menu } from '@nxify/kjd-ui-layout';
import { hygraph } from '@nxify/kjd-data-access-hygraph';

const ArticlePageRoute = graphql(`
  query ArticleBySlug($slug: String!) {
    article(where: { slug: $slug }) {
      ...ArticleHero
      ...ArticleBody
    }
  }
`);

export interface ArticlePageProps {
  params: { slug: string };
}

export async function ArticlePage({ params }: ArticlePageProps) {
  const query = await hygraph.request(ArticlePageRoute, { slug: params.slug });

  return (
    <>
      <Menu />
      <article className="prose prose-invert prose-sm prose-a:text-cyan-300 prose-blockquote:font-serif prose-blockquote:border-amber-500 max-w-none md:prose-base lg:prose-lg">
        <ArticleHero fragment={query.article} />
        <ArticleBody fragment={query.article} />
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const { params } = await hygraph.request(ArticlePageRouteParamsDocument);
  return params;
}