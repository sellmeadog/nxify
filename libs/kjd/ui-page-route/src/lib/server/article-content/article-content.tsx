import { FragmentType, graphql, useFragment } from '../../generated';
import { HeroSection } from '../../client/hero-section/hero-section';
import ReactMarkdown from 'react-markdown';
import { format, parseISO } from 'date-fns';

const ArticleContentQuery = graphql(`
  fragment ArticleContentQuery on Query {
    article(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        biography
        name
      }
      body {
        markdown
      }
      createdAt
      hero {
        ...HeroSectionContent
      }
      markdown
    }
  }
`);

export interface ArticleContentProps {
  query?: FragmentType<typeof ArticleContentQuery>;
}

export async function ArticleContent({ query }: ArticleContentProps) {
  const data = useFragment(ArticleContentQuery, query);

  if (!data?.article) {
    return null;
  }

  const { article } = data;

  return (
    <>
      <HeroSection fragment={article.hero} />
      <section className="max-w-prose mx-auto p-4 md:px-0 md:py-8 lg:py-16 prose-blockquote:border-amber-500 prose-blockquote:font-serif prose-blockquote:text-neutral-400 prose-code:before:hidden prose-code:after:hidden first-of-type:prose-p:mt-0 last-of-type:prose-p:mb-0">
        <ReactMarkdown>{article.markdown as string}</ReactMarkdown>
      </section>
      <section className=" bg-neutral-800">
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 items-start max-w-prose mx-auto not-prose p-4 md:px-0 md:py-8 lg:py-16">
          <div className="flex md:shrink justify-center">
            <img
              alt={article.author?.name}
              className="bg-neutral-950 rounded-full w-1/3 md:w-fit lg:w-10/12"
              src={article.author?.avatar?.url}
            />
          </div>
          <div className="grow">
            <h3 className="text-lg text-white font-medium mb-2">
              by {article.author?.name} on{' '}
              {format(parseISO(article.createdAt), 'PPP')}
            </h3>
            <p className="text-base text-neutral-400">
              {article.author?.biography}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
