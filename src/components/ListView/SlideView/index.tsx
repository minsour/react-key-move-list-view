import * as React from 'react';
import Content from '../Content';
import { IContent } from 'types';
import './style.scss'

interface ISlideViewProps { 
  contentWidth?: number | string;
  contentHeight?: number | string;
  list: IContent[];
}

interface ISlideViewState {
  slideList: IContent[];
  activeContent: IContent;
}

class SlideView extends React.Component<ISlideViewProps, ISlideViewState> {
  constructor(props: ISlideViewProps) {
    super(props);
    this.state = {
      slideList: this.props.list,
      activeContent: this.props.list[0]
    }
  }

  render() {
    const {slideList, activeContent} = this.state;
    return (
      <div className="contents-row" id={`active-content-${activeContent.index}`}>
        <div className="focus-box" style={{
          // 화면 크기에 유동적일 수 있도록 수정 필요할 듯(7이 아니라 수학적인 수식으로)
          'transform': `translateX(${activeContent.index>=slideList.length-7 && 
          (activeContent.index-(slideList.length-7))*100}%)`
        }}/>
        <div className="contents-wrapper" style={{
          // 화면 크기에 유동적일 수 있도록 수정 필요할 듯(6이 아니라 수학적인 수식으로)
          'transform': `translateX(-${activeContent.index<slideList.length-6 && 
          activeContent.index*(100/slideList.length)}%)`
        }}>
          {
            // list 렌덩링 
            // slideList.map(content => <Content key={content._id} content={content} />)
          }
        </div>
      </div>
    );
  }
};

export default SlideView;