import * as React from 'react';
import { ICurrent, IFocusBox, VIEW_TYPE } from '../../../types';

interface IFocusBoxProps { 
  pageCol: number;
  pageRow?: number;
  contentCol: number;
  current: ICurrent;
  focusBox: IFocusBox;
  focus?: boolean;
  type: VIEW_TYPE;
  action?: boolean;
}

const FocusBox = (props: IFocusBoxProps) => {
  const { pageCol, pageRow, contentCol, current, focusBox: focus } = props;
  const moveFocusBox = {
    'transform': props.type === VIEW_TYPE.SLIDE ?
      `translateX(${current.x >= contentCol - pageCol && (current.x-(contentCol-pageCol))*100}%)` :
      `translate(${current.x  < pageCol ? (current.x*100):((pageCol-1)*100)}%, ${current.y< pageRow! ? (current.y*100):((pageRow!-1)*100)}%)`,
    'outline': props.action ? '3px solid #4DA6F6' : (props.focus ? '3px solid #F29661' : '3px solid #C3C3C3')
  };

  return (
    <div className="focus-box" style={moveFocusBox} ref={focus.ref}/>
  );
}

export default FocusBox;