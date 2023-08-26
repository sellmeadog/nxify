import { render } from '@testing-library/react';

import { CenterColumn } from './center-column';

describe('Prose', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CenterColumn />);
    expect(baseElement).toBeTruthy();
  });
});
