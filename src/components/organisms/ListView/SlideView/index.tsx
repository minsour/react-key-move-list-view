import * as React from 'react';
import Content from '../../../molecules/Content';
import { IContent, VIEW_TYPE } from '../../../../types';
import './style.scss'
import FocusBox from '../../../molecules/FocusBox';
import { useListView } from '../../../../hooks';
import ViewTitle from '../../../molecules/ViewTitle';

interface ISlideViewProps { 
  list: IContent[];
  width?: number;
  widthNum?: number;
  height?: number;
  index?: number;
  title?: string;
  focusedTitle?: string;
  theme?: "light" | "dark";
  currentView?: number;
  startPosition?: number;
}

const SlideView = (props: ISlideViewProps) => {
  const slideView = useListView("slide", 3, props.index!);
  const contentWidth = props.width! / (props.widthNum! + 0.4) - 10;
  const contentHeight = props.height! - 20;
  const contentLength = props.list.length;
  const startPosition = contentWidth/6+1.5;

  const renderContents = () => (
    props.list.map(content => <Content key={content._id} content={content} currentIndex = {slideView.currentContent.x} width = {`${contentWidth}`} height = {`${contentHeight}`}/>)
  );

  return (
    <div
      className="slide-view"
      style={{
        position: 'relative', 
        overflow: 'hidden', 
        width: `${props.width}px`, 
        height: `calc(${props.height}px + 50px)`
      }}
    >
      {!(props.index === void 0) &&
      <ViewTitle
        action={slideView.action}
        focus={slideView.focus}
        title={props.title}
      />}
      <FocusBox
        width = {contentWidth}
        height = {contentHeight}
        pageCol={props.widthNum}
        contentLength={contentLength}
        current={slideView.currentContent}
        type={VIEW_TYPE.SLIDE}
        focus={(props.index === void 0) ? true : slideView.focus}
        action={(props.index === void 0) ? true : slideView.action }
      />
      <div className="slide-wrapper" style={{marginLeft: `${startPosition}px`, transform: `translateX(-${slideView.currentContent.x<= contentLength-props.widthNum! && slideView.currentContent.x*(100/contentLength)}%`}}>
        {renderContents()}
      </div>
    </div>
  );
}

export default SlideView;