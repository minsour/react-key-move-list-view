import * as React from 'react';
import Content from '../Content';
import { IContent, VIEW_TYPE } from '../../../types';
import './style.scss'
import { useSlideView } from './hooks';
import FocusBox from '../FocusBox';
import { useWindowDimensions, useFocusbox } from '../../../hooks';
// import { isUndefined } from 'util';

interface ISlideViewProps { 
  contentWidth?: number | string;
  contentHeight?: number | string;
  list: IContent[];
  index?: number;
  currentView?: number;
}

const SlideView = (props: ISlideViewProps) => {
  const slideView = useSlideView(2, props.index!);
  // const current = useCurrentContent(props.list.length, 0, props.action && props.action);
  const windowDimensions = useWindowDimensions();
  const focus = useFocusbox();
  const pageCol = Math.floor(windowDimensions.width/focus.offsetWidth);
  const contentCol = props.list.length;
  
  const moveSlideWrapper = {
    'transform': `translateX(-${slideView.currentContent.x< contentCol-pageCol+1 && slideView.currentContent.x*(100/contentCol)}%)`
  };

  const renderContents = () => (
    props.list.map(content => <Content key={content._id} content={content} />)
  );

  console.log('currentView '+slideView.currentView);
  console.log(slideView);
  console.log('index ' + props.index)
  return (
    <div className="slide-row" id={`active-content-${slideView.currentContent}`}>
      <FocusBox
        pageCol={pageCol}
        contentCol={contentCol}
        current={slideView.currentContent}
        focus={focus}
        type={VIEW_TYPE.SLIDE}
        action={(props.index === void 0) ? true : slideView.action }
      />
      <div className="slide-wrapper" style={moveSlideWrapper}>
        {renderContents()}
      </div>
    </div>
  );
}

export default SlideView;