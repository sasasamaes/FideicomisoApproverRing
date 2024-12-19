import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'search', 'tel', 'url', 'file'],
      description: 'Type of the input field'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the input'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input {...args} />,
  args: {
    placeholder: 'Enter text here...'
  }
};

export const Email: Story = {
  render: (args) => <Input {...args} />,
  args: {
    type: 'email',
    placeholder: 'Enter your email...',
  }
};

export const Password: Story = {
  render: (args) => <Input {...args} />,
  args: {
    type: 'password',
    placeholder: 'Enter your password...'
  }
};

export const Disabled: Story = {
  render: (args) => <Input {...args} />,
  args: {
    disabled: true,
    value: 'Disabled input',
    placeholder: 'This input is disabled'
  }
};

export const File: Story = {
  render: (args) => <Input {...args} />,
  args: {
    type: 'file'
  }
};

export const WithError: Story = {
  render: (args) => <Input {...args} />,
  args: {
    className: 'border-red-500 focus-visible:ring-red-500',
    placeholder: 'Error state...'
  }
};

export const Number: Story = {
  render: (args) => <Input {...args} />,
  args: {
    type: 'number',
    placeholder: 'Enter a number...'
  }
};

export const Search: Story = {
  render: (args) => <Input {...args} />,
  args: {
    type: 'search',
    placeholder: 'Search...'
  }
};