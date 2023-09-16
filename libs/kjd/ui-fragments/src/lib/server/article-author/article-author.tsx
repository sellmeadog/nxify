import { SectionLayout } from '@nxify/kjd-ui-layout';
import { FragmentType, unmaskFragment, graphql } from '../../generated';

export const ArticleAuthorFragment = graphql(`
  fragment ArticleAuthorFragment on Article {
    author {
      name
      avatar {
        url
      }
      biography
    }
  }
`);

export interface ArticleAuthorProps {
  data: FragmentType<typeof ArticleAuthorFragment>;
}

export function ArticleAuthor({ data }: ArticleAuthorProps) {
  const { author } = unmaskFragment(ArticleAuthorFragment, data);

  return (
    <SectionLayout className="flex flex-col md:flex-row gap-8 items-center md:items-start prose-headings:mt-0 prose-img:m-0">
      <img
        alt={author?.name}
        className="bg-neutral-950 rounded-full w-1/3 md:w-1/4 aspect-square"
        src={author?.avatar?.url}
      />
      <section>
        <h3>Hi, I'm {author?.name}</h3>
        <p>{author?.biography}</p>
      </section>
    </SectionLayout>
  );
}
