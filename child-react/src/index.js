import './public-path'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './index.css';
import App from './App';

 let root = null
function render(props) {
  const { container } = props;
  root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.querySelector('#root'));
  root.render(
    <HashRouter>
      <App/>
    </HashRouter>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  root.unmount()
  root = null
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
