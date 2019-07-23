import * as React from 'react';
import { IContent, VIEW_TYPE } from '../../types';
import MatrixView from './MatrixView/index';
import SlideView from './SlideView/index';
import { useList } from '../../hooks';

interface IListViewProps {
  type?: string;
  width?: number | string;
  height?: number | string;
  contentWidth?: number | string;
  contentHeight?: number | string;
  list: any[];
}

const ListView = (props: IListViewProps) => {
  // const current = useCurrentLocation(props.list.length);
  const list: IContent[] = useList(props.list);
  
  return (
    <div
      // style={{
      //   width: this.props.width,
      //   height: this.props.height,
      // }}
    >
      {props.type === VIEW_TYPE.SLIDE ?
      <SlideView list={list} /> :
      <MatrixView list={list} column ={10}/>}
    </div>
  );
};

export default ListView;