import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
};
export default meta;

export const Basic: StoryObj<typeof Table> = {
  render: () => (
    <Table hover height={200}>
      <table>
        <thead>
          <tr><th>Header A</th><th>Header B</th></tr>
        </thead>
        <tbody>
          <tr><td>Row 1 A</td><td>Row 1 B</td></tr>
          <tr><td>Row 2 A</td><td>Row 2 B</td></tr>
          <tr><td>Row 3 A</td><td>Row 3 B</td></tr>
        </tbody>
      </table>
    </Table>
  )
};

