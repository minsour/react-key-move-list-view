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
}

const SlideView = (props: ISlideViewProps) => {
  const slideView = useListView(VIEW_TYPE.SLIDE, 3, props.index!);
  const contentWidth = props.width! / (props.widthNum! + 0.4) - 10;
  const contentHeight = props.height!-20;
  const contentLength = props.list.length;
  const startPosition = contentWidth/6+1.5;
  const translateX = slideView.currentContent.x<= contentLength-props.widthNum! && slideView.currentContent.x*(100/contentLength);

  const renderContents = () => (
    props.list.map(content => <Content 
      key={content._id}
      content={content} 
      currentIndex = {slideView.currentContent.x} 
      width = {`${contentWidth}`} 
      height = {`${contentHeight}`}
    />)
  );

  return (
    <div
      className="slide-view"
      style={{
        position: 'relative', 
        overflow: 'hidden',
        paddingTop:'5px',
        width: `${props.width}px`, 
        height: `${props.height}px`
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
      <div 
        className="slide-wrapper" 
        style={{
            marginLeft: `${startPosition}px`, 
            transform: `translateX(-${translateX}%)`,
        }}
      >
        {renderContents()}
      </div>
    </div>
  );
}

export default SlideView;