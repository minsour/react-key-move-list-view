import * as React from 'react';

import { storiesOf } from '@storybook/react';
import ListView from '../src/components/ListView';
  
storiesOf('ListView', module)
.add('test', () => (
  <ListView />
)).add('test1', () => (
  <ListView />
)).add('test2', () => (
  <ListView />
));