import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import { SvgIconProps } from '@gemeente-denhaag/icons';
import clsx from 'clsx';

import './link.css';

export interface LinkProps extends Omit<BaseProps, 'classes'> {
  /**
   * The URL that the hyperlink points to. Links are not restricted to HTTP-based
   * URLs — they can use any URL scheme supported by browsers.
   *
   * [(See MDN Web Docs for details)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href)
   */
  href: string;

  /**
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-hreflang)
   */
  hrefLang?: string;

  /**
   * Icon to display at the start or the end of the link
   */
  icon?: React.FC<SvgIconProps>;

  /**
   * If an `icon` is specified, should it be aligned on the left or the right?
   */
  iconAlign?: 'start' | 'end';

  /**
   * Disables the link.
   */
  disabled?: boolean;

  /**
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download)
   */
  download?: string | boolean;

  /**
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-media)
   */
  media?: string;

  /**
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-ping)
   */
  ping?: string;

  /**
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel)
   */
  rel?: string;

  /**
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target)
   */
  target?: React.HTMLAttributeAnchorTarget;

  /**
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-type)
   */
  type?: string;

  /**
   * ⚠️ Experimental.
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-referrerpolicy)
   */
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

/**
 * An easily customizable anchor element.
 * @param props The properties of a Link component.
 * @constructor Constructs an instance of Link.
 */
export const Link: React.FC<LinkProps> = ({
  href,
  id,
  children = undefined,
  disabled = false,
  icon = undefined,
  iconAlign = 'end',
  tabIndex = 0,
  ...props
}: LinkProps) => {
  const anchorClassName = clsx('denhaag-link', {
    'denhaag-link--disabled': disabled,
    'denhaag-link--with-icon': icon !== undefined,
  });

  const iconClassName = clsx('denhaag-link__icon', {
    'denhaag-link__icon--start': iconAlign === 'start',
    'denhaag-link__icon--end': iconAlign === 'end',
  });

  const iconWrapped = <span className={iconClassName}>{icon}</span>;

  return (
    <a id={id} href={href} className={anchorClassName} tabIndex={disabled ? -1 : tabIndex} {...props}>
      {icon !== undefined && iconAlign === 'start' ? iconWrapped : ''}
      {children}
      {icon !== undefined && iconAlign === 'end' ? iconWrapped : ''}
    </a>
  );
};

export default Link;
