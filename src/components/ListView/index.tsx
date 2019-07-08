import * as React from 'react';
import { IContent, VIEW_TYPE } from 'types';
import SlideView from './SlideView/index';
// import * as ReactDOM from 'react-dom';

interface IListViewProps {
  type?: VIEW_TYPE;
  width?: number | string;
  height?: number | string;
  contentWidth?: number | string;
  contentHeight?: number | string;
  list: IContent[];
}

interface IListViewState {
}

class ListView extends React.Component<IListViewProps, IListViewState> {
  constructor(props: IListViewProps) {
    super(props);
  }
  
  render() {
    return (
      <div
        // style={{
        //   width: this.props.width,
        //   height: this.props.height,
        // }}
      >
        {/* 
          SlideView or MatrixView 가 삽입될 곳 
          this.props.type === VIEW_TYPE.slide ?
        */}
        <SlideView list={this.props.list} />
        {/*
          : <MatrixView list={this.props.list} />
        */}
      </div>
    );
  }
};

export default ListView;