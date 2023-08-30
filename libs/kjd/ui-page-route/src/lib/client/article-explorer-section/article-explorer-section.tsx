import { hygraph } from '@nxify/kjd-data-access-hygraph';
import { FragmentType, graphql, useFragment } from '../../generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

const ArticleExplorerSectionFragment = graphql(`
  fragment ArticleExplorerContent on ArticleExplorer {
    first
    id
    subtitle
    title
  }
`);

const ArticleExplorerQuery = graphql(`
  query RecentArticles($first: Int = 10) {
    articles: articlesConnection(first: $first, orderBy: createdAt_DESC) {
      edges {
        node {
          createdAt
          hero {
            caption
            title
          }
          id
          slug
          tags {
            slug
            tag
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        pageSize
        startCursor
      }
    }
  }
`);

export interface ArticleExplorerSectionProps {
  fragment?: FragmentType<typeof ArticleExplorerSectionFragment>;
}

export async function ArticleExplorerSection(
  props: ArticleExplorerSectionProps
) {
  const fragment = useFragment(ArticleExplorerSectionFragment, props.fragment);

  if (!fragment) {
    return null;
  }

  const { articles } = await hygraph.request(ArticleExplorerQuery, {
    first: fragment?.first,
  });

  return (
    <section className="max-w-none">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
        {articles.edges.map(({ node }) => {
          const published = parseISO(node.createdAt);

          return (
            <article
              key={node.id}
              className="flex flex-col lg:flex-row border-b border-neutral-600 last-of-type:border-transparent py-4 md:py-8 lg:py-16 prose-h2:mt-0"
            >
              <section className="flex grow">
                <span className="lg:leading-10 text-neutral-400 uppercase">
                  {format(published, 'PP')}
                </span>
              </section>
              <section className="max-w-prose">
                <h2>
                  <Link
                    className="font-medium lg:font-light"
                    href={`/blog/${node.slug}`}
                  >
                    {node.hero?.title}
                  </Link>
                </h2>
                <p>{node.hero?.caption}</p>
                <section className="not-prose">
                  {node.tags.map(({ tag }, index) => (
                    <span
                      key={`${tag}:${index}`}
                      className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full bg-gray-700 text-indigo-400 border border-indigo-400"
                    >
                      {tag}
                    </span>
                  ))}
                </section>
              </section>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ArticleExplorerSection;
