import React from 'react'
import MaterialAvatarGroup from '@material-ui/lab/AvatarGroup'
import BaseProps from '../../BaseProps/BaseProps'

export interface AvatarGroupProps extends BaseProps {
  max?: number

  spacing?: 'medium' | 'small' | number
}

export const AvatarGroup: React.FC<AvatarGroupProps> = (props: AvatarGroupProps) => {
  return <MaterialAvatarGroup {...props}>{props.children}</MaterialAvatarGroup>
}

export default AvatarGroup
