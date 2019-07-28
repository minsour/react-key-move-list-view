import * as React from 'react';
import Content from '../Content';
import { IContent, VIEW_TYPE } from '../../../types';
import './style.scss'
import FocusBox from '../FocusBox';
import { useListView } from '../../../hooks';

interface ISlideViewProps { 
  contentWidth?: number | string;
  contentHeight?: number | string;
  list: IContent[];
  index?: number;
  currentView?: number;
  title?: string;
}

const SlideView = (props: ISlideViewProps) => {
  const slideView = useListView(3, props.index!);
  // const windowDimensions = useWindowDimensions();
  // const focus = useFocusBox();
  const pageCol = Math.floor(100/13);
  const contentCol = props.list.length;
  
  const moveSlideWrapper = {
    'transform': `translateX(-${slideView.currentContent.x< contentCol-pageCol+1 && slideView.currentContent.x*(100/contentCol)}%)`
  };

  const renderContents = () => (
    props.list.map(content => <Content key={content._id} content={content} translateX={slideView.currentContent.x*(1700/contentCol)} />)
  );

  const renderTitle = () => {
    if(props.index === void 0) return;
    return(
      <div style={{margin: '1vw 3vw', fontWeight: 'bold', fontSize: '18px', color: slideView.action ? '#4DA6F6' : (slideView.focus ? '#F29661' : '#606060')}}>
        {slideView.focus && slideView.focus!==slideView.action ? `> ${props.title}` : props.title}
      </div>
    );
  };

  console.log('currentView '+slideView.currentView);
  console.log(slideView);
  console.log('index ' + props.index)
  console.log(slideView.currentContent.x*(100/contentCol));
  return (
    <>
      {renderTitle()}
      <div className="slide-row" id={`active-content-${slideView.currentContent.x}`}>
        <FocusBox
          pageCol={pageCol}
          contentCol={contentCol}
          current={slideView.currentContent}
          type={VIEW_TYPE.SLIDE}
          focus={(props.index === void 0) ? true : slideView.focus}
          action={(props.index === void 0) ? true : slideView.action }
        />
        <div className="slide-wrapper" style={moveSlideWrapper}>
          {renderContents()}
        </div>
      </div>
    </>
  );
}

export default SlideView;