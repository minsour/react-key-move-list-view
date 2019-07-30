module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options:{parser:'typescript'},
      }
    ],
  });
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      require.resolve('style-loader'),
      require.resolve('css-loader'),
      require.resolve('sass-loader'),
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};