import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { themes } from '@storybook/theming';
// import { withBackgrounds } from '@storybook/addon-backgrounds/register';

// automatically import all files ending in *.stories.js
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
  withInfo({
    inline:true,
  })
);

configure(loadStories, module);
