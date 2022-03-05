/** @jsxImportSource @emotion/react */
import React from 'react';

export interface MenuSubitemProps {
  title: string;
}

export const MenuSubitem: React.VFC<MenuSubitemProps> = (props) => {
  return (
    <a
      href="/"
      css={{
        paddingTop: 3,
        paddingBottom: 3,
        fontSize: 12,
        color: '#999',
      }}
    >
      {props.title}
    </a>
  );
};
