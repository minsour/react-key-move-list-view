import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ListView from '../../src/components/organisms/ListView';

import {useFetch} from '../apis/fetchUrl';

const Demo = () => {
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  let targetUrl = "https://yts.am/api/v2/list_movies.json?sort_by=download_count";
  const demo = useFetch(proxyUrl,targetUrl)
  console.log('datas',demo.datas);
  if(demo.loading) return <div>Loading...</div>
  return <ListView list={demo.datas} type="matrix" width = {1000} height = {500} widthNum = {4} heightNum={2} contentCol = {5} contentRow = {4}/>
}

storiesOf('ListView|MatrixView', module)
.add('default', () => (
  <Demo/>
));