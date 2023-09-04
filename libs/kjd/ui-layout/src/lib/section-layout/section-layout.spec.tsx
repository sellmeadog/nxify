import { render } from '@testing-library/react';

import { SectionLayout } from './section-layout';

describe('SectionLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionLayout />);
    expect(baseElement).toBeTruthy();
  });
});
