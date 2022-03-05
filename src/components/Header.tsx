/** @jsxImportSource @emotion/react */
import React from 'react';

import data from '../data/menu.json';
import { Container } from './basics/Container';
import { Flex } from './basics/Flex';
import { MenuBar } from './menus/MenuBar';

export const Header: React.VFC = () => {
  return (
    <div css={{ height: 120, backgroundColor: 'rgb(246, 245, 239)' }}>
      <Container>
        <Flex direction="row">
          <img
            css={{ marginTop: 'auto', marginBottom: 'auto' }}
            src="https://www.starbucks.co.kr/common/img/common/logo.png"
            alt="Logo"
          />
          <div css={{ marginLeft: 'auto' }}>
            <Flex direction="column">
              <div css={{ height: 54 }}></div>
              <MenuBar data={data} />
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};
