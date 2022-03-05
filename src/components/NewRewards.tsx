/** @jsxImportSource @emotion/react */
import React from 'react';

import { Container } from './basics/Container';
import { Flex } from './basics/Flex';

export const NewRewards: React.VFC = () => {
  return (
    <div
      css={{
        paddingTop: 30,
        paddingBottom: 40,
        backgroundColor: 'rgb(30, 57, 50)',
        color: 'white',
        lineHeight: 1.4,
      }}
    >
      <Container>
        <Flex direction="row">
          <img
            css={{ width: 176, marginLeft: 40, marginRight: 40 }}
            src="https://image.istarbucks.co.kr/common/img/main/rewards-logo.png"
            alt="Starbucks Rewards"
          />
          <Flex direction="column">
            <h2 css={{ marginBottom: 12, fontSize: 26, fontWeight: 'normal' }}>
              스타벅스만의 특별한 혜택, 스타벅스 리워드
            </h2>
            <p css={{ fontSize: 17 }}>
              스타벅스 회원이세요? 로그인을 통해 나만의 리워드를 확인해보세요.
              <br />
              스타벅스 회원이 아니세요? 가입을 통해 리워드 혜택을 즐기세요.
            </p>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};
