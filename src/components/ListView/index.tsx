import * as React from 'react';
import { VIEW_TYPE } from '../../types';
import MatrixView from './MatrixView/index';
import SlideView from './SlideView/index';
import { useListView } from './hooks';
// import { ViewContainerContext } from '../ViewContainer/context';

interface IListViewProps {
  type?: string;
  width?: number | string;
  height?: number | string;
  contentWidth?: number | string;
  contentHeight?: number | string;
  list: any[];
  index?: number;
  currentView?: number;
}

const ListView = (props: IListViewProps) => {
  // const current = useCurrentLocation(props.list.length);
  const list = useListView(props.list);
  // const viewContainer = React.useContext(ViewContainerContext);
  // console.log('list currnetView '+props.currentView);
  // console.log(viewContainer);

  return (
    <div
      // style={{
      //   width: this.props.width,
      //   height: this.props.height,
      // }}
      style={{width: '100%', height: props.height}}
    >
      {
        props.type === VIEW_TYPE.SLIDE ?
        <SlideView list={list} index={props.index && props.index} currentView={props.currentView && props.currentView}/> :
        <MatrixView list={list} column ={5}/>
      }
    </div>
  );
};

export default ListView;