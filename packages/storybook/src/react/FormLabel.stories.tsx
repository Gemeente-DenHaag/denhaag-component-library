import { Meta, StoryObj } from '@storybook/react';
import { FormLabel } from '@gemeente-denhaag/form-label';
import readme from '../../../../components/FormLabel/README.md';

const meta = {
  id: 'react-input-form-label',
  title: 'React/Input/Form Label',
  component: FormLabel,
  args: { children: 'Username' },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof FormLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
