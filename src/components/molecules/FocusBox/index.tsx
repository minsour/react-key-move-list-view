import * as React from 'react';
import { ICurrentContent, VIEW_TYPE } from '../../../types';
import { THEME_STRING, THEME } from '../../../constants';

interface IFocusBoxProps { 
  widthNum?: number;
  heightNum?: number;
  current: ICurrentContent;
  focus?: boolean;
  type: VIEW_TYPE;
  action?: boolean;
  width?: string | number;
  height?: string | number;
  contentLength?: number;
  theme?: string;
}
const FocusBox = (props: IFocusBoxProps) => {
  const { widthNum, heightNum, contentLength, current } = props;
  const startPosition = 100/6;
  const theme = (props.theme === void 0) ? THEME[THEME_STRING.LIGHT] : THEME[props.theme];

  const moveFocusBox = {
    'width': `${props.width}px`,
    'height': `${props.height}px`,
    'transform': props.type === VIEW_TYPE.SLIDE ?
      `translateX(${current.x >= contentLength! - widthNum! ? (current.x-(contentLength!-widthNum!))*100 + startPosition! : startPosition!}%)` :
      `translate(${current.x  < widthNum! ? (current.x*100) + startPosition:((widthNum!-1)*100) + startPosition}%, ${current.y< heightNum! ? (current.y*100) + startPosition:((heightNum!-1)*100) + startPosition}%)`,
    'outline': `3px solid ${props.action ? theme.ACTION : (props.focus ? theme.FOCUS : theme.DEFAULT)}`
  };

  return (
    <div className="focus-box" style={moveFocusBox}/>
  );
}

export default FocusBox;