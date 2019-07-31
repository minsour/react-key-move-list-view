import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {ViewContainer} from '../../src/components/organisms/ViewContainer';
import {ListView} from '../../src/components/organisms/ListView';
import { useFetch } from '../../apis/useFetch';
import { PROXY_URL, GET_MOVIE_URL } from '../../src/constants';
import ShowDocs from '../utils/ShowDocs';

interface IMatrixViewDemoProps {
  width?:number,
  height?:number,
  widthNum?:number,
  totalWidthNum?:number
  theme?:"light"|"dark"
};

const MatrixViewDemo = (props:IMatrixViewDemoProps) => {
  const list = useFetch(PROXY_URL, GET_MOVIE_URL)
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
  .add('docs', () => 
    <ShowDocs md={require('../docs/ContainerMatrixView.md')} />
  )
  .add('custom component shape', () => {
    return <MatrixViewDemo width = {850} height = {350}/>;
  })
  .add('number of contents on page', () => {
    return <MatrixViewDemo width = {850} height = {350} widthNum = {5}/>;
  })
  .add('custom theme of focusbox', ()=> {
    return <MatrixViewDemo width = {850} height = {350} widthNum = {5} theme ={"dark"}/>;
  })