import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Radio } from '..';

test('selects radio', () => {
  let checked = false;
  render(<Radio label="One" model={checked} onChange={(isChecked) => (checked = isChecked)} />);
  const input = screen.getByRole('radio');
  fireEvent.click(input);
  expect(checked).toBe(true);
});

