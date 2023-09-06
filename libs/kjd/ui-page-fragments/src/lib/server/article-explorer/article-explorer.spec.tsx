import { render } from '@testing-library/react';

import ArticleExplorer from './article-explorer';

describe('ArticleExplorer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleExplorer />);
    expect(baseElement).toBeTruthy();
  });
});
