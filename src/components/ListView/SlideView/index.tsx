import * as React from 'react';
import {useCallback, useState} from 'react';
import Content from '../Content';
import { IContent } from 'types';
import './style.scss'
import { useCurrentContent, useWindowDimensions } from '../../../hooks';

interface ISlideViewProps { 
  contentWidth?: number | string;
  contentHeight?: number | string;
  list: IContent[];
}

const SlideView = (props: ISlideViewProps) => {
  const current = useCurrentContent(props.list.length);
  const windowDimensions = useWindowDimensions();
  const [focusBoxDimensions, setFocusBoxDimensions] = useState({width:0, height:0});
    const focusBoxRef = useCallback(ref => {
        if(ref !== null){
            setFocusBoxDimensions({width:ref.offsetWidth, height:ref.offsetHeight});
            window.addEventListener('resize',()=>setFocusBoxDimensions({width:ref.offsetWidth, height:ref.offsetHeight}));
        }
    },[]);
    const pageCol = Math.floor(windowDimensions.width/focusBoxDimensions.width);
    const contentCol = props.list.length;
  console.log(current.x);
    return (
      <div className="slide-row" id={`active-content-${current.x}`}>
        <div className="focus-box" style={{
          // 화면 크기에 유동적일 수 있도록 수정 필요할 듯(7이 아니라 수학적인 수식으로)
          'transform': `translateX(${current.x >= contentCol - pageCol && (current.x-(contentCol-pageCol))*100}%)`
        }} ref = {focusBoxRef}/>
        <div className="slide-wrapper" style={{
          // 화면 크기에 유동적일 수 있도록 수정 필요할 듯(6이 아니라 수학적인 수식으로)
          'transform': `translateX(-${current.x< contentCol-pageCol+1 && 
          current.x*(100/contentCol)}%)`
        }}>
          {
            // list 렌더링 
            props.list.map(content => <Content key={content._id} content={content} />)
          }
        </div>
      </div>
    );
}

export default SlideView;