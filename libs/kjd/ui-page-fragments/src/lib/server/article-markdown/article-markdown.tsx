import { Markdown, SectionLayout } from '@nxify/kjd-ui-layout';
import { FragmentType, fragmentData, graphql } from '../../generated';

const ArticleMarkdownFragment = graphql(`
  fragment ArticleMarkdownFragment on Article {
    markdown
  }
`);

export interface ArticleMarkdownProps {
  data: FragmentType<typeof ArticleMarkdownFragment>;
}

export function ArticleMarkdown({ data }: ArticleMarkdownProps) {
  const { markdown } = fragmentData(ArticleMarkdownFragment, data);

  return (
    <SectionLayout>
      <Markdown>{markdown}</Markdown>
    </SectionLayout>
  );
}

export default ArticleMarkdown;
