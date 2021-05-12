import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '.';
import pkg from '../package.json';

export default {
  title: 'Components/Input/Button',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args}>Button</Button>;

/**
 * Default Button
 */
export const Default = Template.bind({});
Default.args = {
  variant: 'contained',
};

/**
 * Primary Button
 */
export const Primary: Story<ButtonProps> = Template.bind({});
Primary.args = {
  color: 'primary',
  variant: 'contained',
};

/**
 * Secondary Button
 */
export const Secondary: Story<ButtonProps> = Template.bind({});
Secondary.args = {
  color: 'secondary',
  variant: 'contained',
};

/**
 * Outlined Button
 */
export const Outlined: Story<ButtonProps> = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

/**
 * Icon left button
 */
export const Text: Story<ButtonProps> = Template.bind({});
Text.args = {
  variant: 'text',
};

/**
 * Medium button
 */
export const Small: Story<ButtonProps> = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium: Story<ButtonProps> = Template.bind({});
Medium.args = {
  size: 'medium',
};

/**
 * Large button
 */
export const Large: Story<ButtonProps> = Template.bind({});
Large.args = {
  size: 'large',
};

/**
 * Disabled Button
 */
export const Disabled: Story<ButtonProps> = Template.bind({});
Disabled.args = {
  disabled: true,
};
