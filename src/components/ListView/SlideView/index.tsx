import * as React from 'react';
import Content from '../Content';
import { IContent } from 'types';
import './style.scss'
import { useCurrentContent } from '../../../hooks';

interface ISlideViewProps { 
  contentWidth?: number | string;
  contentHeight?: number | string;
  list: IContent[];
}

const SlideView = (props: ISlideViewProps) => {
  const current = useCurrentContent(props.list.length);
  console.log(current.x);
    return (
      <div className="slide-row" id={`active-content-${current.x}`}>
        <div className="focus-box" style={{
          // 화면 크기에 유동적일 수 있도록 수정 필요할 듯(7이 아니라 수학적인 수식으로)
          'transform': `translateX(${current.x>=props.list.length-7 && 
          (current.x-(props.list.length-7))*100}%)`
        }}/>
        <div className="slide-wrapper" style={{
          // 화면 크기에 유동적일 수 있도록 수정 필요할 듯(6이 아니라 수학적인 수식으로)
          'transform': `translateX(-${current.x<props.list.length-6 && 
          current.x*(100/props.list.length)}%)`
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