import { ParsableDate } from '@material-ui/pickers/constants/prop-types';
import { MaterialUiPickersDate as DateIOType } from '@material-ui/pickers/typings/date';
import { IconButtonProps, PopoverProps, TextFieldProps } from '@material-ui/core';

import { DialogProps } from '@material-ui/core/Dialog/Dialog';

import { ReactElement, ReactNode, ComponentClass, FunctionComponent } from 'react';
import { ToolbarComponentProps } from '@material-ui/pickers/Picker/Picker';

export interface BaseDatePickerProps {
  /**
   * Onchange callback @DateIOType
   * @param date The Date value of the DatePicker
   */
  onChange: (date: any) => void;

  /**
   * DatePicker value
   */
  value: any;

  /**
   * Enables keyboard listener for moving between days in calendar
   */
  allowKeyBoardControl?: boolean;

  /**
   * To animate scrolling to current year (using scrollIntoView)
   */
  animateYearScrolling?: boolean;

  /**
   * Auto accept date on selection
   */
  AutoOk?: boolean;

  /**
   * "CANCEL" label message
   */
  cancelLabel?: ReactNode;

  /**
   * Show clear action in picker dialog
   */
  clearable?: boolean;

  /**
   * "CLEAR" label message
   */
  clearLabel?: ReactNode;

  /**
   * Props to be passed directly to material-ui Dialog
   */
  DialogProps?: Partial<DialogProps>;

  /**
   * Disable picker and text field
   */
  disabled?: boolean;

  /**
   * Disables future dates
   */
  disableFuture?: boolean;

  /**
   * Disables past dates
   */
  disablePast?: boolean;

  /**
   * Hide toolbar and show only date/time views
   */
  disableToolbar?: boolean;

  /**
   * Message displaying in text field, if null passed (doesn't work in keyboard mode)
   */
  emptyLabel?: string;

  /**
   * Format string
   */
  format?: string;

  /**
   * Date that will be initially highlighted if null was passed
   */
  initialFocusedDate?: ParsableDate;

  /**
   * Pass material-ui text field variant down, bypass internal variant prop
   */
  inputVariant?: 'standard' | 'outlined' | 'filled';

  /**
   * Message, appearing when date cannot be parsed
   */
  invalidDateMessage?: ReactNode;

  /**
   * Message displaying in text field if date is invalid (doesn't work in keyboard mode)
   */
  invalidLabel?: string;

  /**
   * Dynamic formatter of text field value
   */
  labelFunc?: (date: DateIOType, invalidLabel: string) => string;

  /**
   * Props to pass to left arrow button
   */
  leftArrowButtonProps?: Partial<IconButtonProps>;

  /**
   * Left arrow icon
   */
  leftArrowIcon?: ReactNode;

  /**
   * Custom loading indicator
   */
  loadingIndicator?: ReactElement;

  /**
   * Max selectable date
   */
  maxDate?: ParsableDate;

  /**
   * Error message, shown if date is more then maximal date
   */
  maxDateMessage?: ReactNode;

  /**
   * Min selectable date
   */
  minDate?: ParsableDate;

  /**
   * Error message, showf if date is less than minimal date
   */
  minDateMessage?: ReactNode;

  /**
   * "OK" label message
   */
  okLabel?: ReactNode;

  /**
   * Callback fired when date is accepted
   */
  onAccept?: (date: DateIOType) => void;

  /**
   * On close callback
   */
  onClose?: () => void;

  /**
   * Callback fired when new error should be displayed (!! This is a side effect. Be careful if you want to rerender the component)
   */
  onError?: (error: ReactNode, value: DateIOType) => void;

  /**
   * Callback firing on month change. Return promise to render spinner till it will not be resolved
   */
  onMonthChange?: (date: DateIOType) => void;

  /**
   * Callback fired when the picker is opened
   */
  onOpen?: () => void;

  /**
   * Callback fired when the year changes
   */
  onYearChange?: (date: DateIOType) => void;

  /**
   * Controls picker open state
   */
  open?: boolean;

  /**
   * First view to show in DatePicker
   */
  openTo?: 'date' | 'year' | 'month';

  /**
   * Force rendering in particular orientation
   */
  orientation?: 'portrait' | 'landscape';

  /**
   * Popover props passed to material-ui Popover (with variant="inline")
   */
  PopoverProps?: Partial<PopoverProps>;

  /**
   * Make picker readonly
   */
  readOnly?: boolean;

  /**
   * Custom renderer for day
   */
  renderDay?: (
    day: DateIOType,
    selectedDate: DateIOType,
    dayInCurrentMonth: boolean,
    dayComponent: ReactElement,
  ) => ReactElement;

  /**
   * Props to pass to right arrow button
   */
  rightArrowButtonProps?: Partial<IconButtonProps>;

  /**
   * Right arrow icon
   */
  rightArrowIcon?: ReactNode;

  /**
   * Disable specific date
   */
  shouldDisableDate?: (date: DateIOType) => boolean;

  /**
   * If true today button will be displayed **Note** that clear button has higher priority
   */
  showTodayButton?: boolean;

  /**
   * Compare dates by the exact timestamp, instead of start/end of date
   */
  strictCompareDates?: boolean;

  /**
   * Override input component
   */
  TextFieldComponent?: ComponentClass<TextFieldProps, any> | FunctionComponent<TextFieldProps>;

  /**
   * "TODAY" label message
   */
  todayLabel?: ReactNode;

  /**
   * Component that will replace default toolbar renderer
   */
  ToolbarComponent?: ComponentClass<ToolbarComponentProps, any> | FunctionComponent<ToolbarComponentProps>;

  /**
   * Picker container option
   */
  variant?: 'dialog' | 'inline' | 'static';

  /**
   * Array of views to show
   */
  views?: Array<'year' | 'date' | 'month'>;
}

export default BaseDatePickerProps;
