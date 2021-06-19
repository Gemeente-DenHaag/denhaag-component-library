import React, { useEffect, useState, KeyboardEventHandler } from 'react';
import MaterialStep from '@material-ui/core/Step';
import { ChevronDownIcon, ChevronUpIcon } from '@gemeente-denhaag/icons';

import { StepContent, StepLabel } from '.';
import { StepComponentProps } from './StepComponentProps';
import { stepClasses, stepCollapseIconClasses } from './bem-mapping';

export interface StepProps extends StepComponentProps {
  /**
   * Describes the information of the step.
   */
  label: string;
  /**
   * Additional information about the step.
   */
  description?: string;
}

/**
 * Represents a single Step in a Stepper component.
 * @param props The properties of a Step component.
 * @constructor Constructs an instance of Step.
 */
export const Step: React.FC<StepProps> = ({
  label,
  description,
  active = false,
  completed = false,
  disabled = false,
  tabIndex = 0,
  id = undefined,
  ...props
}: StepProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const hasDescription = description !== undefined;

  if (active && disabled) {
    throw new Error('Step cannot be active and disabled at the same time.');
  }

  const toggle = () => {
    if (hasDescription && completed) {
      setIsExpanded((prevState) => !prevState);
    }
  };

  // If active has been updated, this indicates that the user is on the next
  // step, then we want to collapse the StepContent
  useEffect(() => {
    setIsExpanded(false);
  }, [active]);

  // Toggle when element is focussed and 'Enter' is pressed.
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Enter') {
      toggle();
    }
  };

  let descriptionElement: string | React.ReactElement = '';
  if (hasDescription) {
    descriptionElement = <StepContent>{description}</StepContent>;
  }

  let iconElement: string | React.ReactElement = '';
  let role = '';
  if (hasDescription && completed) {
    role = 'button';
    if (isExpanded) {
      iconElement = <ChevronUpIcon classes={stepCollapseIconClasses} />;
    } else {
      iconElement = <ChevronDownIcon classes={stepCollapseIconClasses} />;
    }
  }

  return (
    <MaterialStep
      id={id}
      active={active}
      completed={completed}
      classes={stepClasses}
      expanded={isExpanded}
      disabled={disabled}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      tabIndex={tabIndex}
      role={role}
      aria-expanded={isExpanded}
      {...props}
    >
      <StepLabel>
        {label}
        {iconElement}
      </StepLabel>
      {descriptionElement}
    </MaterialStep>
  );
};

export default Step;
