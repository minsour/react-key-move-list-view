import * as React from 'react';
import { IContent } from '../../../types';
import './style.scss';

interface IContentProps {
  content: IContent
  currentIndex: number;
  width?: string;
  height?: string;
  widthNum: number | string;
  heightNum?: number | string;
  totalWidthNum?: number | string;
}

const Content = (props: IContentProps) => {
  const {index, image, title} = props.content;
  const totalWidthNum = (props.totalWidthNum !== void 0) && props.totalWidthNum;
  const [indexX, indexY] = [index%Number(totalWidthNum),Math.floor(index/Number(totalWidthNum))];
  const [currentX, currentY] = [props.currentIndex%Number(totalWidthNum), Math.floor(props.currentIndex/Number(totalWidthNum))]
  const contentStyle = {
    //'visibility' : `visible`,
    'width' : `${props.width}`,
    'height' : `${props.height}`,
    'visibility': `${
        (totalWidthNum === false) ? 
          ((props.currentIndex + 2*Number(props.widthNum)< index || props.currentIndex -2*Number(props.widthNum) > index)? "hidden": "visible")
          : (((currentX + 2*Number(props.widthNum) < indexX  || currentX -  2*Number(props.widthNum) > indexX) 
             || (currentY  + 2*Number(props.heightNum) < indexY || currentY - 2*Number(props.heightNum) > indexY)) ? "hidden" : "visible")
      }`,
    'transform' : `scale(${props.currentIndex == index ? 1 : 0.9})`,
    //'visibility': `${(props.currentIndex-props.widthNum > index || props.currentIndex+props.widthNum < index) $$ "hidden"}`,
    //'display' : `${(index + 5 < props.currentIndex || index-5 > props.currentIndex) ? "none" : "inline" }`,
    //'padding' : `${props.currentIndex == index && 0}px`
    //'display' : `${(props.currentIndex > index + 1) && (props.currentIndex < index + 5) ? "none" : "" }`
  }as React.CSSProperties;
  return (
    <div className = "content" style = {contentStyle}>
      <div className = "image-wrapper">
        <img src={image} alt={title} style = {{width : `${props.width}px`, height: `${props.height}px`} }/>
        <p className="details" style = {{width: `${props.width}px`, height: `${Number(props.height)/3}px`}}>
          <span className="title">
            {title}
          </span>
          {/* <span className="description">
            {description}
          </span> */}
        </p>
      </div>
    </div>
  );
};
export default Content;