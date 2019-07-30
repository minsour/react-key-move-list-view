import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ListView from '../../src/components/organisms/ListView';

import {useFetch} from '../apis/fetchUrl';

const DefaultMatrixViewDemo = () => {
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  let targetUrl = "https://yts.am/api/v2/list_movies.json?sort_by=download_count";
  const list = useFetch(proxyUrl,targetUrl)
  if(list.loading) return <div>Loading...</div>
  return <ListView list={list.datas} type="matrix" width = {1000} height = {800} widthNum = {4} heightNum={2} totalWidthNum = {5}/>
}

storiesOf('ListView|MatrixView', module)
.add('default', () => (
  <DefaultMatrixViewDemo/>
));