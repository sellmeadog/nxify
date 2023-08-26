import { CenterColumn } from '@nxify/kjd-ui-layout';
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

  return (
    <CenterColumn className="prose-p:first-of-type:mt-0 prose-p:last-of-type:mb-0">
      <RichText content={article.body.raw} />
    </CenterColumn>
  );
}

export default ArticleBody;
