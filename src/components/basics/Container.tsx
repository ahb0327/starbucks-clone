/** @jsxImportSource @emotion/react */
import React from 'react';
import { Interpolation, Theme } from '@emotion/react';

export interface ContainerProps {
  css?: Interpolation<Theme>;
}

export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div css={{ maxWidth: 1100, height: '100%', margin: '0 auto 0 auto' }}>
      {props.children}
    </div>
  );
};
