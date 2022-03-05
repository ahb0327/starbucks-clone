/** @jsxImportSource @emotion/react */
import React from 'react';
import { Property } from 'csstype';

export interface FlexProps {
  direction?: Property.FlexDirection;
}

export const Flex: React.FC<FlexProps> = (props) => {
  return (
    <div css={{ display: 'flex', flexDirection: props.direction ?? 'row' }}>
      {props.children}
    </div>
  );
};
