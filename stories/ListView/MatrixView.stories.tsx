import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ListView from '../../src/components/organisms/ListView';
import {useFetch} from '../apis/fetchUrl';
import ShowDocs from '../utils/ShowDocs';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = "https://yts.am/api/v2/list_movies.json?genre=mystery&sort_by=download_count";

interface IMatrixViewDemoProps {
  width?:number,
  height?:number,
  widthNum?:number,
  heightNum?:number,
  totalWidthNum?:number
  title?:string;
  theme?:"light"|"dark",
};


const MatrixViewDemo = (props:IMatrixViewDemoProps) => {
  const list = useFetch(proxyUrl,targetUrl)
  if(list.loading) return <div>Loading...</div>
  return <ListView 
             list={list.datas} 
             type="matrix" 
             width={props.width} 
             height={props.height}
             widthNum={props.widthNum} 
             heightNum={props.heightNum} 
             totalWidthNum={props.totalWidthNum}
             title={props.title} 
             theme={props.theme}
        />
}


storiesOf('ListView|MatrixView', module)
  .add('docs', () => 
    <ShowDocs md={require('../docs/MatrixView.md')} />
  )
  .add('default', () => {
    return <MatrixViewDemo/>;
  })
  .add('custom component shape', () => {
    return <MatrixViewDemo width = {800} height = {400}/>;
  })
  .add('custom number of contents on page', () => {
    return <MatrixViewDemo widthNum = {3} heightNum = {1}/>;
  })
  .add('custom number of contents by row', () => {
    return <MatrixViewDemo totalWidthNum = {10}/>;
  })
  .add('custom theme of focusbox', ()=> {
    return <MatrixViewDemo theme ={"dark"}/>;
  })
  .add('set title of matrixview', () => {
    return <MatrixViewDemo title ={"Mystery"}/>;
  })