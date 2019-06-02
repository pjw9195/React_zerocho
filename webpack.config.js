const path = require('path');
module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', //실서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: ['./client'],
  }, //입력
  module: {
    rules: [
      {
        test: /\.jsx?/, //jsx와 js를 룰을적용 적용하겟다는 뜻
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'), //C;\users\jinwoo\desktop\zerocho
    filename: 'app.js',
  }, //출력
};
