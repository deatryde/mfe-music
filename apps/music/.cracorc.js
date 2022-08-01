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
          name: 'music',
          filename: 'remoteEntry.js',
          remotes: {
            playlist: `playlist@${domain}/playlist/latest/remoteEntry.js`,
          },
          exposes: {
            './Music': './src/pages/MusicPage',
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
