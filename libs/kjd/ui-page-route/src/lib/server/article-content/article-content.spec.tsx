import { render } from '@testing-library/react';

import ArticleContent from './article-content';

describe('ArticleContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleContent />);
    expect(baseElement).toBeTruthy();
  });
});
