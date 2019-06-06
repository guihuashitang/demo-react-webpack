import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './pages/Main';
import { AppContainer } from 'react-hot-loader';


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// 模块热替换的 API
if (module.hot) {
  module.hot.accept('./pages/Main', () => {
    render(App)
  });
}

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
