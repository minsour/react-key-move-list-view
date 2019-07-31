import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ListView from '../../src/components/organisms/ListView';
import {useFetch} from '../apis/fetchUrl';
import ShowDocs from '../utils/ShowDocs';

const DefaultSlideViewDemo = () => {
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  let targetUrl = "https://yts.am/api/v2/list_movies.json?sort_by=download_count";
  const list = useFetch(proxyUrl,targetUrl)
  if(list.loading) return <div>Loading...</div>
  return <ListView list={list.datas} type="slide" widthNum={5} width={1000} height={170}/>
}
storiesOf('ListView|SlideView', module)
.add('Docs', () => <ShowDocs md={require('../docs/a.md')} />)
.add('default', () => <DefaultSlideViewDemo/>
);
