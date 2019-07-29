import { configure } from '@storybook/react';
// import { themes } from '@storybook/theming';
// import { withBackgrounds } from '@storybook/addon-backgrounds/register';

// automatically import all files ending in *.stories.js
const req = require.context(
  '../stories',
  true,
  /\.stories\.(ts|tsx)$/,
);

// addParameters({
//   options: {
//     theme: themes.light,
//   },
// });

function loadStories() {
  req.keys().forEach(filename => {
    req(filename)
  });
};

configure(loadStories, module);
