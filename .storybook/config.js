import { configure, addDecorator } from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
const req = require.context(
  '../stories',
  true,
  /\.stories\.(ts|tsx)$/,
);

function loadStories() {
  req.keys().forEach(filename => {
    req(filename)
  });
};
addDecorator(
  withInfo({ header:null
  })
);

configure(loadStories, module);
