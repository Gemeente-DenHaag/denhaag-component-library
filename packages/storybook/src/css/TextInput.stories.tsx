import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '@gemeente-denhaag/text-input';
import readme from '../../../../components/TextInput/README.md?raw';

const meta = {
  title: 'CSS/Input/TextInput',
  id: 'css-text-input',
  component: TextInput,
  tags: ['autodocs'],
  args: { placeholder: 'Placeholder' },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
export const Invalid: Story = {
  args: { ...Default.args, invalid: true },
};
