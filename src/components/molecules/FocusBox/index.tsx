import * as React from 'react';
import { ICurrent, IFocusBox, VIEW_TYPE } from '../../../types';

interface IFocusBoxProps { 
  pageCol?: number;
  pageRow?: number;
  contentCol?: number;
  current: ICurrent;
  focusBox?: IFocusBox;
  focus?: boolean;
  type: VIEW_TYPE;
  action?: boolean;
  width?: string | number;
  height?: string | number;
  contentLength?: number;
}
const FocusBox = (props: IFocusBoxProps) => {
  const { pageCol, pageRow, contentLength, current } = props;
  const startPosition = 100/6;
  const moveFocusBox = {
    'width': `${props.width}px`,
    'height': `${props.height}px`,
    'transform': props.type === VIEW_TYPE.SLIDE ?
      `translateX(${current.x >= contentLength! - pageCol! ? (current.x-(contentLength!-pageCol!))*100 + startPosition! : startPosition!}%)` :
      `translate(${current.x  < pageCol! ? (current.x*100):((pageCol!-1)*100)}%, ${current.y< pageRow! ? (current.y*100):((pageRow!-1)*100)}%)`,
    'outline': props.action ? '3px solid #E0EBFF' : (props.focus ? '3px solid #F29661' : '3px solid #C3C3C3')
  };

  return (
    <div className="focus-box" style={moveFocusBox}/>
  );
}

export default FocusBox;