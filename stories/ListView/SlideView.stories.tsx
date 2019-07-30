import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ListView from '../../src/components/organisms/ListView';
//import data from '../data';
import {useFetch} from '../apis/fetchUrl';

const Demo = () => {
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  let targetUrl = "https://yts.am/api/v2/list_movies.json?sort_by=download_count";
  const demo = useFetch(proxyUrl,targetUrl)
  console.log('datas',demo.datas);
  if(demo.loading) return <div />
  return <ListView list={demo.datas} type="slide" width={1000} height={150} widthNum={5}/>
}
storiesOf('ListView|SlideView', module)
.add('default', () => <Demo/>
);
