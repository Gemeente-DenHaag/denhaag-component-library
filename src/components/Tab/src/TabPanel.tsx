import React from 'react';
import { TabPanel as MaterialTabPanel } from '@material-ui/lab';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface TabPanelProps extends BaseProps {
  /**
   * The value of the corresponding Tab.
   * Must use the index of the Tab when no value was passed to Tab
   */
  value: string;
}

/**
 * A wrapper for the selected Tab component in a Tabs component.
 * @param props The properties of a TabPanel component.
 * @constructor Constructs an instance of TabPanel.
 */
export const TabPanel: React.FC<TabPanelProps> = (props: TabPanelProps) => {
  return <MaterialTabPanel {...props}>{props.children}</MaterialTabPanel>;
};

export default TabPanel;
