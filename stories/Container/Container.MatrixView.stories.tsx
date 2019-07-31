import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ViewContainer from '../../src/components/organisms/ViewContainer';
import ListView from '../../src/components/organisms/ListView';
import {useFetch} from '../apis/fetchUrl';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = "https://yts.am/api/v2/list_movies.json?sort_by=download_count";

interface IMatrixViewDemoProps {
  width?:number,
  height?:number,
  widthNum?:number,
  totalWidthNum?:number
  theme?:"light"|"dark"
};

const MatrixViewDemo = (props:IMatrixViewDemoProps) => {
  const list = useFetch(proxyUrl, targetUrl)
  const renderListViews = () => (
    <React.Fragment>
      <ListView
        index={0}
        title="인기 영화"
        list={list.datas}
        type="matrix"
        width={props.width}
        height={props.height}
        widthNum={props.widthNum}
        totalWidthNum={props.totalWidthNum}
        theme = {props.theme}
      />
      <ListView
        index={1}
        title="인기 드라마"
        list={list.datas}
        type="matrix"
        width={props.width}
        height={props.height}
        widthNum={props.widthNum}
        totalWidthNum={props.totalWidthNum}
        theme = {props.theme}
      />
    </React.Fragment>
  );

  if(list.loading) return <div>Loading...</div>
  return <ViewContainer render={renderListViews}/>;
}

storiesOf('Container|MatrixView', module)
  .add('custom component shape', () => {
    return <MatrixViewDemo width = {850} height = {350}/>;
  })
  .add('number of contents on page', () => {
    return <MatrixViewDemo width = {850} height = {350} widthNum = {5}/>;
  })
  .add('custom theme of focusbox', ()=> {
    return <MatrixViewDemo width = {850} height = {350} widthNum = {5} theme ={"dark"}/>;
  })