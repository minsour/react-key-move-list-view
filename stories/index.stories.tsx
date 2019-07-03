import * as React from 'react';

import { storiesOf } from '@storybook/react';
import KeyboardListView from '../src/components/KeyboardListView/KeyboardListView';
  
storiesOf('KeyboardListView', module)
.add('test', () => (
  <KeyboardListView />
));