import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Heading1, Heading1Props } from '../Heading1';
import pkg from '../../package.json';

export default {
  title: 'Components/Data Display/Typography/Heading1',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
  component: Heading1,
} as Meta;

const Template: Story<Heading1Props> = (args: Heading1Props) => (
  <Heading1 {...args}>This is a bit of text inside a Header1 component.</Heading1>
);

/**
 * Default implementation of Heading1
 */
export const Default = Template.bind({});
