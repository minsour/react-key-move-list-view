import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ListView from '../../src/components/ListView';
import ViewContainer from '../../src/components/ViewContainer';
import data from '../../data';
  
storiesOf('Container|SlideView', module)
.add('default', () => {
  const renderListViews = () => (
    <>
      <ListView index={0} title="인기 영화" list={data} type="slide" height='15vw' />
      <ListView index={1} title="인기 드라마" list={data} type="slide" height='15vw' />
      <ListView index={2} title="인기 예능" list={data} type="slide" height='15vw' />
    </>
  );

  return (
    <ViewContainer render={renderListViews}/>
  );
});