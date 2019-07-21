import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ListView from '../src/components/ListView';
import data from '../data';
  
storiesOf('SlideView', module)
.add('default', () => (
  <ListView list={data} type="slide"/>
));