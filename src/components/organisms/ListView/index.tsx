import * as React from 'react';
import { VIEW_TYPE, IContent } from '../../../types';
import MatrixView from './MatrixView/index';
import SlideView from './SlideView/index';
import { useList } from '../../../hooks/index';

interface IListViewProps {
  list: IContent[];
  type: "slide" | "matrix";
  width?: number;
  widthNum: number;
  height?: number;
  heightNum?: number;
  totalWidthNum?: number;
  index?: number;
  title?: string;
  focusedTitle?: string;
  theme?: "light" | "dark";
}

const ListView = (props: IListViewProps) => {
  const list = useList(props.list);
  return (
    props.type === VIEW_TYPE.SLIDE ?
    <SlideView list={list} title={props.title} index={props.index && props.index} width={props.width} height={props.height} widthNum={props.widthNum}/> :
    <MatrixView list={list} title={props.title} index={props.index && props.index} width = {props.width} height={props.height} widthNum= {props.widthNum} heightNum = {props.heightNum} totalWidthNum={props.totalWidthNum}/>
  );
};

export default ListView;