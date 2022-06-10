import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { BaseLayout } from '~/layouts';
import style from './style.scss';

const Main: FC = () => {
  return (
    <BaseLayout>
      <div>新建脚手架</div>
    </BaseLayout>
  );
};

export default observer(Main);
