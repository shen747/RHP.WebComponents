import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';

interface Row { 
  id: number; 
  name: string; 
  age: number; 
  email: string;
  status: 'active' | 'inactive' | 'pending';
  department: string;
}

const meta: Meta<typeof DataTable<Row>> = {
  title: 'Data Display/DataTable',
  component: DataTable as any,
  parameters: {
    docs: {
      description: {
        component: 'Enhanced DataTable component with density variants, editable styling, mobile support, selection mode, and advanced pagination.'
      }
    }
  },
  argTypes: {
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
      description: 'Controls the density of table rows and headers'
    },
    editableStyling: {
      control: { type: 'boolean' },
      description: 'Enables editable styling mode'
    },
    fillAvailable: {
      control: { type: 'boolean' },
      description: 'Makes the table fill available space'
    },
    fixedHeader: {
      control: { type: 'boolean' },
      description: 'Makes the header sticky'
    },
    hideDefaultFooter: {
      control: { type: 'boolean' },
      description: 'Hides the default pagination footer'
    },
    hideDefaultHeader: {
      control: { type: 'boolean' },
      description: 'Hides the default table header'
    },
    selectionMode: {
      control: { type: 'boolean' },
      description: 'Enables selection mode with checkboxes'
    },
    mobile: {
      control: { type: 'boolean' },
      description: 'Enables mobile responsive behavior'
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Shows loading state'
    }
  }
};
export default meta;

const columns = [
  { key: 'id', header: 'ID', width: 60, sortable: true },
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  { key: 'age', header: 'Age', align: 'right', sortable: true },
  { key: 'department', header: 'Department', sortable: true },
  { 
    key: 'status', 
    header: 'Status', 
    align: 'center', 
    sortable: true,
    render: (row: Row) => (
      <span style={{ 
        padding: '4px 8px', 
        borderRadius: '4px', 
        fontSize: '12px',
        backgroundColor: row.status === 'active' ? '#e6f4ea' : row.status === 'inactive' ? '#fce8e6' : '#fff3e0',
        color: row.status === 'active' ? '#1e7e34' : row.status === 'inactive' ? '#d32f2f' : '#f57c00'
      }}>
        {row.status}
      </span>
    )
  },
] as const;

const data: Row[] = Array.from({ length: 50 }, (_, i) => ({ 
  id: i + 1, 
  name: `Employee ${i + 1}`, 
  email: `employee${i + 1}@company.com`,
  age: 18 + (i % 40), 
  status: ['active', 'inactive', 'pending'][i % 3] as 'active' | 'inactive' | 'pending',
  department: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'][i % 5]
}));

export const Default: StoryObj<typeof DataTable<Row>> = {
  args: {
    columns: columns as any,
    data: data,
    pageSize: 10,
    density: 'compact'
  }
};

export const Comfortable: StoryObj<typeof DataTable<Row>> = {
  args: {
    ...Default.args,
    density: 'comfortable'
  }
};

export const DefaultDensity: StoryObj<typeof DataTable<Row>> = {
  args: {
    ...Default.args,
    density: 'default'
  }
};

export const EditableStyling: StoryObj<typeof DataTable<Row>> = {
  args: {
    ...Default.args,
    editableStyling: true
  }
};

export const FillAvailable: StoryObj<typeof DataTable<Row>> = {
  render: () => (
    <div style={{ height: '400px', border: '1px solid #ccc' }}>
      <DataTable
        columns={columns as any}
        data={data}
        pageSize={10}
        fillAvailable={true}
        density="compact"
      />
    </div>
  )
};

export const Mobile: StoryObj<typeof DataTable<Row>> = {
  args: {
    ...Default.args,
    mobile: true
  }
};

export const SelectionMode: StoryObj<typeof DataTable<Row>> = {
  args: {
    ...Default.args,
    selectionMode: true
  }
};

export const CustomPagination: StoryObj<typeof DataTable<Row>> = {
  args: {
    ...Default.args,
    itemsPerPageOptions: [5, 15, 25, 50, 100]
  }
};

export const NoFooter: StoryObj<typeof DataTable<Row>> = {
  args: {
    ...Default.args,
    hideDefaultFooter: true
  }
};

export const NoHeader: StoryObj<typeof DataTable<Row>> = {
  args: {
    ...Default.args,
    hideDefaultHeader: true
  }
};

export const Loading: StoryObj<typeof DataTable<Row>> = {
  args: {
    ...Default.args,
    loading: true
  }
};

export const CustomNoDataText: StoryObj<typeof DataTable<Row>> = {
  args: {
    ...Default.args,
    data: [],
    noDataText: "No employees found. Please try adjusting your search criteria."
  }
};

export const LargeDataset: StoryObj<typeof DataTable<Row>> = {
  render: () => {
    const largeData: Row[] = Array.from({ length: 1000 }, (_, i) => ({ 
      id: i + 1, 
      name: `Employee ${i + 1}`, 
      email: `employee${i + 1}@company.com`,
      age: 18 + (i % 40), 
      status: ['active', 'inactive', 'pending'][i % 3] as 'active' | 'inactive' | 'pending',
      department: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'][i % 5]
    }));

    return (
      <div style={{ height: '500px' }}>
        <DataTable
          columns={columns as any}
          data={largeData}
          pageSize={25}
          fillAvailable={true}
          density="compact"
        />
      </div>
    );
  }
};

