import MaterialSwitch from '@material-ui/core/Switch'
import { BaseClassesProps } from '../../BaseProps/BaseProps'
import React from 'react'
import { useStyles } from './style'

export interface SwitchProps extends BaseClassesProps {
  /**
   * If true the Switch is turned on
   */
  checked?: boolean
  /**
   * Color for the component.
   */
  color?: 'default' | 'primary' | 'secondary'
  /**
   * Disables the component
   */
  disabled?: boolean
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  /**
   * If `true`, the `input` element will be required.
   */
  required?: boolean
  /**
   * Attributes applied to the `input` element.
   */
  defaultChecked?: boolean
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void
}

/**
 * Switches allow a user to toggle the state of a setting on or off.
 */
export const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  const classes = useStyles();
  const classKeys = {
    colorPrimary: classes.colorPrimary,
    colorSecondary: classes.colorSecondary,
    checked: classes.checked,
    disabled: classes.disabled,
    track: classes.track
  }

  return <MaterialSwitch classes={classKeys} {...props} />
}

/**
 * Default export for Switch
 */
export default Switch
