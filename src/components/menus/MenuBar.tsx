/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

import { MenuData } from '../../types';
import { Container } from '../basics/Container';
import { Flex } from '../basics/Flex';
import { MenuItem } from './MenuItem';
import { Submenu } from './Submenu';

export interface MenuBarProps {
  data: MenuData;
}

export const MenuBar: React.VFC<MenuBarProps> = (props) => {
  const [isExpand, setIsExpand] = useState(false);
  const [seleteIndex, setSeleteIndex] = useState(0);

  return (
    <div onMouseLeave={() => setIsExpand(false)}>
      <Flex direction="row">
        {props.data.submenus.map((submenu, index) => (
          <Submenu
            title={submenu.title}
            isHover={isExpand && seleteIndex === index}
            onMouseEnter={() => {
              setSeleteIndex(index);
              setIsExpand(true);
            }}
          />
        ))}
      </Flex>
      <div
        css={{
          display: isExpand ? 'block' : 'none',
          position: 'absolute',
          left: 0,
          top: 120,
          width: '100%',
          paddingTop: 20,
          paddingBottom: 20,
          backgroundColor: '#2C2A29',
        }}
      >
        <Container>
          <div css={{ display: 'flex', flexFlow: 'row wrap' }}>
            {props.data.submenus[seleteIndex].items.map((item) => (
              <MenuItem title={item.title} subitems={item.subitems} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};
