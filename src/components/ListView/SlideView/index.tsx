import * as React from 'react';
import Content from '../Content';
import { IContent, VIEW_TYPE } from '../../../types';
import './style.scss'
import { useCurrentContent, useWindowDimensions, useFocusbox } from '../../../hooks';
import FocusBox from '../FocusBox';

interface ISlideViewProps { 
  contentWidth?: number | string;
  contentHeight?: number | string;
  list: IContent[];
  action?: boolean;
}

const SlideView = (props: ISlideViewProps) => {
  const current = useCurrentContent(props.list.length, 0, props.action && props.action);
  const windowDimensions = useWindowDimensions();
  const focus = useFocusbox();
  const pageCol = Math.floor(windowDimensions.width/focus.offsetWidth);
  const contentCol = props.list.length;
  
  const moveSlideWrapper = {
    'transform': `translateX(-${current.x< contentCol-pageCol+1 && current.x*(100/contentCol)}%)`
  };

  const renderContents = () => (
    props.list.map(content => <Content key={content._id} content={content} />)
  );

  console.log(current.x);
  return (
    <div className="slide-row" id={`active-content-${current.x}`}>
      <FocusBox
        pageCol={pageCol}
        contentCol={contentCol}
        current={current}
        focus={focus}
        type={VIEW_TYPE.SLIDE}
        action={props.action && props.action}
      />
      <div className="slide-wrapper" style={moveSlideWrapper}>
        {renderContents()}
      </div>
    </div>
  );
}

export default SlideView;