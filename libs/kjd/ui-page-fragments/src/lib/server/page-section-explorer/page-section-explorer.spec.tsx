import React from 'react';
import { render } from '@testing-library/react';

import { PageSectionExplorer } from './page-section-explorer';

describe('PageSections', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageSectionExplorer data={{}} />);
    expect(baseElement).toBeTruthy();
  });
});
