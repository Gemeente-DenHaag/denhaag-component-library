import React from 'react';
import clsx from 'clsx';

import { ActionSingleProps, ActionContent, ActionDetails } from './index';
import { BasicLink } from '@gemeente-denhaag/link';

export const ActionSingle = ({
  children,
  link,
  dateTime,
  now,
  locale,
  relativeDate,
  labels,
  className,
  Link = BasicLink,
  ...rest
}: ActionSingleProps) => {
  return (
    <Link href={link} className={clsx('denhaag-action denhaag-action--single', className)} {...rest}>
      <ActionContent>{children}</ActionContent>
      <ActionDetails dateTime={dateTime} now={now} locale={locale} relativeDate={relativeDate} labels={labels} />
    </Link>
  );
};
