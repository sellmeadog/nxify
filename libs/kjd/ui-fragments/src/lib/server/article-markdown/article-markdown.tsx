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
      <Markdown className="prose-headings:font-light prose-headings:text-orange-300 prose-headings:uppercase">
        {markdown}
      </Markdown>
    </SectionLayout>
  );
}

export default ArticleMarkdown;
