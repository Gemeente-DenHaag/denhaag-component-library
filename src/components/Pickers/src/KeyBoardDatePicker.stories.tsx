import React from 'react';
import { Meta, Story } from '@storybook/react';
import { KeyboardDatePicker, KeyboardDatePickerProps } from '.';
import PickersUtilsProvider from '../../PickersUtilsProvider';
import DateFnsUtils from '@date-io/date-fns';
import pkg from '../package.json';

export default {
  title: 'Components/Input/KeyboardDatePicker',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: KeyboardDatePicker,
} as Meta;

const Template: Story<KeyboardDatePickerProps> = (args: KeyboardDatePickerProps) => {
  const [value, setValue] = React.useState('1970-01-01');
  args.onChange = (newValue: any) => {
    setValue(newValue);
  };
  args.value = value;

  return (
    <PickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker {...args} />
    </PickersUtilsProvider>
  );
};

// language=JS
const defaultCode = `
import DateFnUtils from '@date-io/date-fns';

const [value, setValue] = React.useState('1970-01-01');

<PickersUtilsProvider utils={DateFnUtils}>
  <KeyboardDatePicker
    value={value}
    onChange={
      (newValue: any) => {
        setValue(newValue);
      }
    }
    clearable
  />
</PickersUtilsProvider>
`;

/**
 * Default KeyboardDatePicker
 */
export const Default: Story<KeyboardDatePickerProps> = Template.bind({});
Default.args = {
  clearable: true,
};
Default.parameters = {
  docs: {
    source: {
      code: defaultCode,
    },
  },
};
