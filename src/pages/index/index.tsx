import 'regenerator-runtime/runtime';
import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style.scss';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { superTool } from '~/utils/superTool';

const Main = superTool.getLoadableComponent(() => import('~/routes/Main'));

const App: FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ConfigProvider>
  );
};

ReactDOM.createRoot(
  document.getElementById('root')
).render(<App />);
