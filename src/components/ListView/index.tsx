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
      style={{width: '100%', height: props.height}}
    >
      {
        props.type === VIEW_TYPE.SLIDE ?
        <SlideView list={list} title={props.title} index={props.index && props.index} contentWidth ={"18vw"} contentHeight = {"10vw"}/> :
        <MatrixView list={list} column ={4} contentWidth = {"20vw"} contentHeight = {"10vw"} height = {"22vw"}/>
      }
    </div>
  );
};

export default ListView;