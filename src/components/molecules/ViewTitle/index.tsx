import * as React from 'react';
import { THEME } from '../../../constants';
import { THEME_STRING } from '../../../constants';

interface IViewTitleProps {
  action?: boolean;
  focus?: boolean;
  title?: string;
  theme?: string;
}

const ViewTitle = (props: IViewTitleProps) => {
  const theme = (props.theme === void 0) ? THEME[THEME_STRING.LIGHT] : THEME[props.theme];

  return(
    <div 
      style={{
        height: '20px',
        margin: '15px 20px',
        fontWeight: 'bold', 
        fontSize: '18px', 
        color: props.action ? theme.ACTION : (props.focus ? theme.FOCUS : theme.DEFAULT)
      }}
    >
      {props.focus && props.focus!==props.action ? `> ${props.title}` : props.title}
    </div>
  );
};

export default ViewTitle;