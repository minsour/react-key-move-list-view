import * as React from 'react';
import { IContent, VIEW_TYPE } from 'types';
import MatrixView from './MatrixView/index';
//import SlideView from './SlideView/index';

interface IListViewProps {
  type?: VIEW_TYPE;
  width?: number | string;
  height?: number | string;
  contentWidth?: number | string;
  contentHeight?: number | string;
  list: IContent[];
}

interface IListViewState {}

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
        <MatrixView list={this.props.list} shape={3}/>
        {/*
          : <MatrixView list={this.props.list} />
        */}
      </div>
    );
  }
};

export default ListView;