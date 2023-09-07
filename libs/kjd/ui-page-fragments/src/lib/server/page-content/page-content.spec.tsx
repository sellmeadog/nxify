import React from 'react';
import { render } from '@testing-library/react';

import { PageContent } from './page-content';

describe('PageContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageContent data={{}} />);
    expect(baseElement).toBeTruthy();
  });
});
