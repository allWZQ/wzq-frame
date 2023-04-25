import 'regenerator-runtime/runtime';
import React, { FC, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style.scss';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

const Main = lazy(() => import('~/routes/Main'));

const App: FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Suspense fallback={<div>请稍等...</div>}>
          <Main />
        </Suspense>
      </BrowserRouter>
    </ConfigProvider >
  );
};

ReactDOM.createRoot(
  document.getElementById('root')
).render(<App />);
