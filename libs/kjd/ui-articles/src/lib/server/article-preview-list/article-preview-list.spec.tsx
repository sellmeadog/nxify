import { render } from '@testing-library/react';

import ArticlePreviewList from './article-preview-list';

describe('ArticlePreviewList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticlePreviewList />);
    expect(baseElement).toBeTruthy();
  });
});
