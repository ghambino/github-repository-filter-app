import React from 'react'
import { Text as NativeText } from 'react-native';

import { Styles } from '../themes/theme';


const Text = ({ color,fontSize, fontWeight, style,subHeading, ...props}) => {
  const TextStyle = [
      Styles.Normaltext,
      subHeading && Styles.subHeading,
      color === 'textSecondary' && Styles.colorTextSecondary,
      color === 'primary' && Styles.colorPrimary,
      fontSize === 'subHeading' && Styles.subHeading,
      fontWeight === 'bold' && Styles.fontWeightBold,
      style
  ];
  
    return (
        <NativeText style={TextStyle} {...props}/>
    )
}


export default Text
