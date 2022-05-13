const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const config = {
  mode: 'production',
  entry: './src/index.ts',
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            configFile: '../tsconfig.json'
          }
        }
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
  },
  optimization: {
    nodeEnv: false
  }
}

module.exports = config
