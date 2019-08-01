import * as React from 'react';
import Content from '../../../molecules/Content';
import { IContent, VIEW_TYPE } from '../../../../types';
import './style.scss'
import FocusBox from '../../../molecules/FocusBox';
import { useListView } from '../../../../hooks';
import ViewTitle from '../../../molecules/ViewTitle';
import { DEFAULT_PROPS } from '../../../../constants';

interface ISlideViewProps { 
  list: IContent[];
  width?: number;
  widthNum?: number;
  height?: number;
  index?: number;
  title?: string;
  theme?: "light" | "dark";
}

const SlideView = (props: ISlideViewProps) => {
  const widthNum = (props.widthNum===void 0) ? DEFAULT_PROPS.WIDTH_NUM : props.widthNum;
  const contentWidth = props.width! / (widthNum + 0.4) - 10;
  const contentHeight = props.height!-60;
  const startPosition = contentWidth/6+1.5;
  const contentLength = props.list.length;
  const slideView = useListView(VIEW_TYPE.SLIDE, props.index!, contentLength, 0);
  const translateX = slideView.currentContent.x<= contentLength-widthNum && slideView.currentContent.x*(100/contentLength);
  const action = (props.index===void 0) ? true : slideView.action;

  const renderContents = () => (
    props.list.map(content => <Content 
      key={content._id}
      content={content} 
      currentIndex = {slideView.currentContent.x} 
      width = {`${contentWidth}`} 
      height = {`${contentHeight}`}
      widthNum = {`${widthNum}`}
    />)
  );

  return (
    <div
      className="slide-view"
      style={{
        position: 'relative', 
        overflow: 'hidden',
        paddingTop:'5px',
        paddingBottom: '5px',
        width: `${props.width}px`, 
        height: `${props.height}px`
      }}
    >
      {!(props.title === void 0) &&
      <ViewTitle
        action={action}
        focus={slideView.focus}
        title={props.title}
        theme={props.theme}
      />}
      <FocusBox
        width = {contentWidth}
        height = {contentHeight}
        widthNum={widthNum}
        contentLength={contentLength}
        current={slideView.currentContent}
        type={VIEW_TYPE.SLIDE}
        focus={(props.index === void 0) ? true : slideView.focus}
        action={(props.index === void 0) ? true : slideView.action }
        theme={props.theme}
      />
      <div 
        className="slide-wrapper" 
        style={{
            marginLeft: `${startPosition}px`, 
            transform: `translateX(-${translateX}%)`,
            height: `${contentHeight}px`
        }}
      >
        {renderContents()}
      </div>
    </div>
  );
}

export default SlideView;