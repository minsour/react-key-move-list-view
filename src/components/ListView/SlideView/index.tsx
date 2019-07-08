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
    return (
      
    );
  }
};

export default SlideView;