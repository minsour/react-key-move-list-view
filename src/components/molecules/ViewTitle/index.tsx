import * as React from 'react';

interface IViewTitleProps {
  action?: boolean;
  focus?: boolean;
  title?: string;
}

const ViewTitle = (props: IViewTitleProps) => {
  return(
    <div 
      style={{
        fontWeight: 'bold', 
        fontSize: '18px', 
        color: props.action ? 
          '#4DA6F6' : 
          (props.focus ? '#F29661' : '#606060')
      }}
    >
      {props.focus && props.focus!==props.action ? `> ${props.title}` : props.title}
    </div>
  );
};

export default ViewTitle;