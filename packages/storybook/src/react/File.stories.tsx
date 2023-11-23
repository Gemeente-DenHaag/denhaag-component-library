import { Meta, StoryObj } from '@storybook/react';
import { File } from '@gemeente-denhaag/file';

import readme from '../../../../components/File/README.md';

const exampleArgs = {
  name: 'example3',
  link: 'test.png',
  size: 2000,
  lastUpdated: 'Thu Aug 31 2023 11:22:11 GMT+0200',
};

const meta = {
  id: 'react-surfaces-files',
  title: 'React/Surfaces/Files',
  component: File,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof File>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {
  args: { ...Default.args, className: 'denhaag-file--hover' },
};

export const Focus: Story = {
  args: { ...Default.args, className: 'denhaag-file--focus' },
};
