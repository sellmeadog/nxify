import { HomePage } from './home-page';
import { render } from '@testing-library/react';
import React from 'react';

describe('HomePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomePage />);
    expect(baseElement).toBeTruthy();
  });
});
