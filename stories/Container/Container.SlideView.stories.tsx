import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ListView from '../../src/components/organisms/ListView';
import ViewContainer from '../../src/components/organisms/ViewContainer';
import data from '../../data';
  
storiesOf('Container|SlideView', module)
.add('default', () => {
  const renderListViews = () => (
    <React.Fragment>
      <ListView index={0} title="인기 영화" list={data} type="slide" width={1000} widthNum={5} height={170}/>
      <ListView index={1} title="인기 드라마" list={data} type="slide" width = {1000} widthNum = {5} height = {170}/>
      <ListView index={2} title="인기 예능" list={data} type="slide" width = {1000} widthNum = {5} height = {170}/>
    </React.Fragment>
  );

  return (
    <ViewContainer render={renderListViews}/>
  );
});