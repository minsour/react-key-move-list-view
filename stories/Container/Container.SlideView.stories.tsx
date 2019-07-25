import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ListView from '../../src/components/ListView';
import ViewContainer from '../../src/components/ViewContainer';
import data from '../../data';
  
storiesOf('Container|SlideView', module)
.add('default', () => {
  const renderListViews = (actions: boolean[] = []) => (
    <>
      {console.log(actions)}
      <ListView list={data} type="slide" height='150px' action={actions[0]}/>
      <ListView list={data} type="slide" height='150px' action={actions[1]}/>
    </>
  );

  return (
    <ViewContainer render={renderListViews}/>
  );
});