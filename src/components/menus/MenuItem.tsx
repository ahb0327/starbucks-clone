/** @jsxImportSource @emotion/react */
import React from 'react';

import { MenuSubitemData } from '../../types';
import { MenuSubitem } from './MenuSubitem';

export interface MenuItemProps {
  title: string;
  subitems?: MenuSubitemData[];
}

export const MenuItem: React.VFC<MenuItemProps> = (props) => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: 220,
      }}
    >
      <a
        href="/"
        css={{
          paddingTop: 3,
          paddingBottom: 12,
          fontSize: 14,
          color: 'white',
        }}
      >
        {props.title}
      </a>
      {props.subitems?.map((subitem) => (
        <MenuSubitem title={subitem.title} />
      ))}
    </div>
  );
};
