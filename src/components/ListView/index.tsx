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
  action?: boolean;
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
      style={{width: '100%', height: props.height}}
    >
      {props.action && props.action}
      {props.type === VIEW_TYPE.SLIDE ?
      <SlideView list={list} action={props.action && props.action}/> :
      <MatrixView list={list} column ={5}/>}
    </div>
  );
};

export default ListView;