import { Markdown, SectionLayout } from '@nxify/kjd-ui-layout';
import { FragmentType, unmaskFragment, graphql } from '../../generated';

export const ArticleMarkdownFragment = graphql(`
  fragment ArticleMarkdownFragment on Article {
    markdown
  }
`);

export interface ArticleMarkdownProps {
  data: FragmentType<typeof ArticleMarkdownFragment>;
}

export function ArticleMarkdown({ data }: ArticleMarkdownProps) {
  const { markdown } = unmaskFragment(ArticleMarkdownFragment, data);

  return (
    <SectionLayout>
      <Markdown className="prose-headings:font-light prose-headings:text-violet-300 prose-h3:font-bold prose-h3:text-neutral-300 prose-h3:text-lg prose-h3:uppercase">
        {markdown}
      </Markdown>
    </SectionLayout>
  );
}

export default ArticleMarkdown;
