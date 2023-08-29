import { render } from '@testing-library/react';

import RouteBase from './route-base';

describe('RouteBase', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RouteBase />);
    expect(baseElement).toBeTruthy();
  });
});
