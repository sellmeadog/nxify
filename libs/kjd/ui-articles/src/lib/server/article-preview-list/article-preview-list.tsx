import { ArticlePreview } from '../../client/article-preview/article-preview';
import { FragmentType, useFragment } from '../../generated';
import { ArticlePreviewListFragmentDoc } from '../../generated/graphql';

export interface ArticlePreviewListProps {
  fragment?: FragmentType<typeof ArticlePreviewListFragmentDoc>;
}

export function ArticlePreviewList(props: ArticlePreviewListProps) {
  const query = useFragment(ArticlePreviewListFragmentDoc, props.fragment);

  return query?.articles.map((fragment, index) => (
    <ArticlePreview
      key={`${fragment.__typename}:${index}`}
      fragment={fragment}
    />
  ));
}
