import React, { FC } from 'react';
import style from './style.scss';

interface IProps {
  children: React.ReactChild;
}

const BaseLayout: FC<IProps> = (props: IProps) => {
  return (
    <div className={style.layout}>
      <div className={style.body}>{props.children}</div>
    </div>
  );
}
export default BaseLayout;
