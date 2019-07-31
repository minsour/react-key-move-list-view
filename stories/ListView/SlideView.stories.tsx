import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ListView from '../../src/components/organisms/ListView';
import {useFetch} from '../apis/fetchUrl';
import ShowDocs from '../utils/ShowDocs';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = "https://yts.am/api/v2/list_movies.json?genre=action&sort_by=download_count";

interface ISlideViewDemoProps {
  width?:number,
  height?:number,
  widthNum?:number,
  totalWidthNum?:number,
  title?:string,
  theme?:"light"|"dark"
};

const SlideViewDemo = (props:ISlideViewDemoProps) => {
  const list = useFetch(proxyUrl, targetUrl)
  if(list.loading) return <div>Loading...</div>
  return <ListView
           list={list.datas}
           type="slide"
           width={props.width}
           height={props.height}
           widthNum={props.widthNum}
           totalWidthNum={props.totalWidthNum}
           title={props.title}
           theme = {props.theme}
        />;
}

storiesOf('ListView|SlideView', module)
  .add('docs', () => 
    <ShowDocs md={require('../docs/SlideView.md')} />
  )
  .add('default', () => {
    return <SlideViewDemo/>;
  })
  .add('custom component shape', () => {
    return <SlideViewDemo width = {800} height = {400}/>;
  })
  .add('custom number of contents on page', () => {
    return <SlideViewDemo widthNum = {3}/>;
  })
  .add('custom theme of focusbox', ()=> {
    return <SlideViewDemo theme ={"dark"}/>;
  })
  .add('set title of slideview', () => {
    return <SlideViewDemo title ={"Action"}/>;
  })