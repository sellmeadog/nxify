import React from 'react';
import { render } from '@testing-library/react-native';

import JournalEntryBottomSheet from './journal-entry-bottom-sheet';

describe('JournalEntryBottomSheet', () => {
  it('should render successfully', () => {
    const { root } = render(< JournalEntryBottomSheet />);
    expect(root).toBeTruthy();
  });
});
