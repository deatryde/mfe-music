const { ModuleFederationPlugin } = require('webpack').container;

const deps = require('./package.json').dependencies;
const domain = process.env.PRODUCTION_DOMAIN;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: 'auto',
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'playlist',
          filename: 'remoteEntry.js',
          remotes: {
            music: `music@${domain}/music/latest/remoteEntry.js`,
          },
          shared: {
            ...deps,
            store: {
              singleton: true,
            },
            tsconfig: {
              singleton: true,
            },
            ui: {
              singleton: true,
            },
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            'react-dom': {
              singleton: true,
              requiredVersion: deps['react-dom'],
            },
          },
        }),
      ],
    },
  },
});
