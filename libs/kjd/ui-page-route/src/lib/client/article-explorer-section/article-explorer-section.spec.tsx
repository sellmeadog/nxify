import { render } from '@testing-library/react';

import ArticleExplorerSection from './article-explorer-section';

describe('ArticleExplorerSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleExplorerSection />);
    expect(baseElement).toBeTruthy();
  });
});
