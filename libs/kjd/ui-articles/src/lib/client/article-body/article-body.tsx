import { FragmentType, useFragment } from '../../generated';
import { ArticleBodyFragmentDoc } from '../../generated/graphql';
import { RichText } from '@graphcms/rich-text-react-renderer';

export interface ArticleBodyProps {
  fragment?: FragmentType<typeof ArticleBodyFragmentDoc> | null;
}

export function ArticleBody({ fragment }: ArticleBodyProps) {
  const article = useFragment(ArticleBodyFragmentDoc, fragment);

  if (!article) {
    return null;
  }

  return <RichText content={article.body.raw} />;
}

export default ArticleBody;
