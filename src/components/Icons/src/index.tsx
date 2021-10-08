import React from 'react';
import SvgIcon, { SvgIconProps } from './SvgIcon';

import { classes } from './bem-mapping';
import './icon.css';

// Arrows
import ArrowLeftSvg from './svg/arrows/arrow-left.svg';
import RightArrowSvg from './svg/arrows/arrow-right.svg';
import ChevronDownSvg from './svg/arrows/chevron-down.svg';
import ChevronRightSvg from './svg/arrows/chevron-right.svg';
import ChevronUpSvg from './svg/arrows/chevron-up.svg';
import ChevronLeftSvg from './svg/arrows/chevron-left.svg';

// Communication
import CallSvg from './svg/communication/call.svg';
import EmailSvg from './svg/communication/email.svg';
import MessageSvg from './svg/communication/message.svg';

// Functional
import CloseSvg from './svg/functional/close.svg';
import CheckedSvg from './svg/functional/checked.svg';
import ExternalLinkSvg from './svg/functional/external-link.svg';
import GridSvg from './svg/functional/grid.svg';
import HamburgerSvg from './svg/functional/hamburger.svg';
import HideSvg from './svg/functional/hide.svg';
import ListSvg from './svg/functional/list.svg';
import SearchSvg from './svg/functional/search.svg';
import ShareSvg from './svg/functional/share.svg';
import ShowSvg from './svg/functional/show.svg';
import StarterSvg from './svg/functional/starter.svg';
import TrashSvg from './svg/functional/trash.svg';
import UncheckedBoxSvg from './svg/functional/uncheckedbox.svg';

// Informational
import AlertTriangleSvg from './svg/informational/alert-triangle.svg';
import CheckCircleSvg from './svg/informational/checkCircle.svg';
import CircleHelpSvg from './svg/informational/circle-help.svg';
import CircleInformationSvg from './svg/informational/circle-information.svg';
import SettingsSvg from './svg/informational/settings.svg';

// Objects
import ArchiveSvg from './svg/objects/archive.svg';
import CalendarSvg from './svg/objects/calendar.svg';
import CardSvg from './svg/objects/card.svg';
import ClipboardSvg from './svg/objects/clipboard.svg';
import CoronaSvg from './svg/objects/corona.svg';
import DocumentSvg from './svg/objects/document.svg';
import HouseSvg from './svg/objects/house.svg';
import InboxSvg from './svg/objects/inbox.svg';
import ParkingSvg from './svg/objects/parking.svg';
import StaffSvg from './svg/objects/staff.svg';
import UserLoggedInSvg from './svg/objects/user-logged-in.svg';
import UserSvg from './svg/objects/user.svg';

// Social
import FacebookSvg from './svg/social/facebook.svg';
import LinkedInSvg from './svg/social/linkedin.svg';
import TwitterSvg from './svg/social/twitter.svg';
import WhatsAppSvg from './svg/social/whatsapp.svg';

// Misc
import MegaphoneSvg from './svg/megaphone.svg';

const buildIcon: React.ElementType = (svg: React.ElementType, props: SvgIconProps) => (
  <SvgIcon component={svg} classes={classes} {...props} />
);
type F = React.FunctionComponent<SvgIconProps>; // less typing

// Arrows
export const ArrowLeftIcon: F = (props: SvgIconProps) => buildIcon(ArrowLeftSvg, props);
export const ArrowRightIcon: F = (props: SvgIconProps) => buildIcon(RightArrowSvg, props);
export const ChevronDownIcon: F = (props: SvgIconProps) => buildIcon(ChevronDownSvg, props);
export const ChevronRightIcon: F = (props: SvgIconProps) => buildIcon(ChevronRightSvg, props);
export const ChevronUpIcon: F = (props: SvgIconProps) => buildIcon(ChevronUpSvg, props);
export const ChevronLeftIcon: F = (props: SvgIconProps) => buildIcon(ChevronLeftSvg, props);

// Communication
export const CallIcon: F = (props: SvgIconProps) => buildIcon(CallSvg, props);
export const EmailIcon: F = (props: SvgIconProps) => buildIcon(EmailSvg, props);
export const MessageIcon: F = (props: SvgIconProps) => buildIcon(MessageSvg, props);

// Functional
export const CloseIcon: F = (props: SvgIconProps) => buildIcon(CloseSvg, props);
export const CheckedIcon: F = (props: SvgIconProps) => buildIcon(CheckedSvg, props);
export const ExternalLinkIcon: F = (props: SvgIconProps) => buildIcon(ExternalLinkSvg, props);
export const GridIcon: F = (props: SvgIconProps) => buildIcon(GridSvg, props);
export const HamburgerIcon: F = (props: SvgIconProps) => buildIcon(HamburgerSvg, props);
export const HideIcon: F = (props: SvgIconProps) => buildIcon(HideSvg, props);
export const ListIcon: F = (props: SvgIconProps) => buildIcon(ListSvg, props);
export const SearchIcon: F = (props: SvgIconProps) => buildIcon(SearchSvg, props);
export const ShareIcon: F = (props: SvgIconProps) => buildIcon(ShareSvg, props);
export const ShowIcon: F = (props: SvgIconProps) => buildIcon(ShowSvg, props);
export const StarterIcon: F = (props: SvgIconProps) => buildIcon(StarterSvg, props);
export const TrashIcon: F = (props: SvgIconProps) => buildIcon(TrashSvg, props);
export const UncheckedBoxIcon: F = (props: SvgIconProps) => buildIcon(UncheckedBoxSvg, props);

// Informational
export const AlertTriangleIcon: F = (props: SvgIconProps) => buildIcon(AlertTriangleSvg, props);
export const CheckCircleIcon: F = (props: SvgIconProps) => buildIcon(CheckCircleSvg, props);
export const CircleHelpIcon: F = (props: SvgIconProps) => buildIcon(CircleHelpSvg, props);
export const CircleInformationIcon: F = (props: SvgIconProps) => buildIcon(CircleInformationSvg, props);
export const SettingsIcon: F = (props: SvgIconProps) => buildIcon(SettingsSvg, props);

// Objects
export const ArchiveIcon: F = (props: SvgIconProps) => buildIcon(ArchiveSvg, props);
export const CalendarIcon: F = (props: SvgIconProps) => buildIcon(CalendarSvg, props);
export const CardIcon: F = (props: SvgIconProps) => buildIcon(CardSvg, props);
export const ClipboardIcon: F = (props: SvgIconProps) => buildIcon(ClipboardSvg, props);
export const CoronaIcon: F = (props: SvgIconProps) => buildIcon(CoronaSvg, props);
export const DocumentIcon: F = (props: SvgIconProps) => buildIcon(DocumentSvg, props);
export const HouseIcon: F = (props: SvgIconProps) => buildIcon(HouseSvg, props);
export const InboxIcon: F = (props: SvgIconProps) => buildIcon(InboxSvg, props);
export const ParkingIcon: F = (props: SvgIconProps) => buildIcon(ParkingSvg, props);
export const StaffIcon: F = (props: SvgIconProps) => buildIcon(StaffSvg, props);
export const UserLoggedInIcon: F = (props: SvgIconProps) => buildIcon(UserLoggedInSvg, props);
export const UserIcon: F = (props: SvgIconProps) => buildIcon(UserSvg, props);

// Social
export const FacebookIcon: F = (props: SvgIconProps) => buildIcon(FacebookSvg, props);
export const LinkedInIcon: F = (props: SvgIconProps) => buildIcon(LinkedInSvg, props);
export const TwitterIcon: F = (props: SvgIconProps) => buildIcon(TwitterSvg, props);
export const WhatsAppIcon: F = (props: SvgIconProps) => buildIcon(WhatsAppSvg, props);

// Misc
export const MegaphoneIcon: F = (props: SvgIconProps) => buildIcon(MegaphoneSvg, props);

export default SvgIcon;
export * from './SvgIcon';
