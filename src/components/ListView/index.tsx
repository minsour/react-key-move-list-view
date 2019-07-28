import * as React from 'react';
import { VIEW_TYPE } from '../../types';
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
  index?: number;
  title?: string;
}

const ListView = (props: IListViewProps) => {
  const list = useList(props.list);

  return (
    <div
      // style={{
      //   width: this.props.width,
      //   height: this.props.height,
      // }}
      style={{height: props.height}}
    >
      {
        props.type === VIEW_TYPE.SLIDE ?
        <SlideView list={list} title={props.title} index={props.index && props.index} /> :
        <MatrixView list={list} column ={5}/>
      }
    </div>
  );
};

export default ListView;