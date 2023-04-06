import React, { FC } from 'react';
import { BaseLayout } from '~/layouts';
import style from './style.scss';

const Main: FC = () => {
  return (
    <BaseLayout>
      <div className={style.body}>
        {process.env.API_ENV}新建脚手架{process.env.API_HOST}
      </div>
    </BaseLayout>
  );
};

export default Main;
