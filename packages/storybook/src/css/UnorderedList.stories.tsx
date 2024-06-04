import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import readme from '../../../../components/FormField/README.md';
import { UnorderedList, UnorderedListItem } from '@gemeente-denhaag/unorderedlist';

const meta = {
  id: 'css-data-display-unordered-list',
  title: 'CSS/Data Display/Unordered List',
  component: UnorderedList,
  args: {},
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof UnorderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <UnorderedListItem key={1}>List item 1</UnorderedListItem>,
      <UnorderedListItem key={2}>List item 2</UnorderedListItem>,
      <UnorderedListItem key={3}>List item 3</UnorderedListItem>,
    ],
  },
};

export const Nested: Story = {
  args: {
    children: [
      <UnorderedListItem key={1}>List item 1</UnorderedListItem>,
      <UnorderedListItem key={2}>List item 2</UnorderedListItem>,
      <UnorderedList nested key={3}>
        <UnorderedListItem>List item 1</UnorderedListItem>
        <UnorderedListItem>List item 2</UnorderedListItem>
        <UnorderedListItem>List item 3</UnorderedListItem>
      </UnorderedList>,
      <UnorderedListItem key={4}>List item 3</UnorderedListItem>,
    ],
  },
};
