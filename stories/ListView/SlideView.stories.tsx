import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ListView from '../../src/components/ListView';
//import data from '../data';
import {useFetch} from '../../src/hooks';

const Demo = () => {
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  let targetUrl = "https://yts.am/api/v2/list_movies.json?sort_by=download_count";
  const demo = useFetch(proxyUrl,targetUrl)
  console.log('datas',demo.datas);
  if(demo.loading) return <div />
  return <ListView list={demo.datas} type="slide"/>
}
storiesOf('ListView|SlideView', module)
.add('default', () => <Demo/>
);
