import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ListView from '../../src/components/ListView';
import ViewContainer from '../../src/components/ViewContainer';
import data from '../../data';
  
storiesOf('Container|SlideView', module)
.add('default', () => {
  const renderListViews = () => (
    <>
      <ListView index={0} list={data} type="slide" height='150px' />
      <ListView index={1} list={data} type="slide" height='150px' />
    </>
  );

  return (
    <ViewContainer render={renderListViews}/>
  );
});