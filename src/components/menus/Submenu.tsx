/** @jsxImportSource @emotion/react */
import React from 'react';

export interface SubmenuProps {
  title: string;
  isHover?: boolean;
  onMouseEnter: () => void;
}

export const Submenu: React.VFC<SubmenuProps> = (props) => {
  return (
    <a
      href="/"
      css={{
        height: 56,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: props.isHover ? '#2C2A29' : 'transparent',
        color: props.isHover ? '#669900' : '#333',
        fontSize: 13,
        fontFamily: 'Avenir, Arial, georgia',
        textDecoration: props.isHover ? 'underline' : 'none',
      }}
      onMouseEnter={props.onMouseEnter}
    >
      {props.title}
    </a>
  );
};
