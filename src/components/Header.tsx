/** @jsxImportSource @emotion/react */
import React from 'react';

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
              <MenuBar
                data={{
                  submenus: [
                    {
                      title: 'COFFEE',
                      items: [
                        {
                          title: '커피',
                          subitems: [
                            { title: '스타벅스 원두' },
                            { title: '스타벅스 비아' },
                            { title: '스타벅스앳홈 by 캡슐' },
                          ],
                        },
                        { title: '나와 어울리는 커피' },
                        {
                          title: '스타벅스 리저브™',
                          subitems: [{ title: 'RESERVE MAGAZINE' }],
                        },
                        {
                          title: '에스프레소 음료',
                          subitems: [
                            { title: '도피오' },
                            { title: '에스프레소 마키아또' },
                            { title: '아메리카노' },
                            { title: '마키아또' },
                            { title: '카푸치노' },
                            { title: '라떼' },
                            { title: '모카' },
                          ],
                        },
                        {
                          title: '최상의 커피를 즐기는 법',
                          subitems: [
                            { title: '커피 프레스' },
                            { title: '푸어 오버' },
                            { title: '아이스 푸어 오버' },
                            { title: '커피 메이커' },
                            { title: '리저브를 매장에서 다양하게 즐기는 법' },
                          ],
                        },
                        {
                          title: '커피 이야기',
                          subitems: [
                            { title: '농장에서 우리의 손으로' },
                            { title: '최상의 아라비카 원두' },
                            { title: '스타벅스 로스트 스펙트럼' },
                            { title: '스타벅스 디카페인' },
                            { title: '클로버® 커피 추출 시스템' },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'MENU',
                      items: [
                        {
                          title: '음료',
                          subitems: [
                            { title: '콜드 브루' },
                            { title: '브루드 커피' },
                            { title: '에스프레소' },
                            { title: '프라푸치노' },
                            { title: '블렌디드' },
                            { title: '스타벅스 피지오' },
                            { title: '티(티바나)' },
                            { title: '기타 제조 음료' },
                            { title: '스타벅스 주스(병음료)' },
                          ],
                        },
                        {
                          title: '푸드',
                          subitems: [
                            { title: '브레드' },
                            { title: '케이크' },
                            { title: '샌드위치 & 샐러드' },
                            { title: '따뜻한 푸드' },
                            { title: '과일 & 요거트' },
                            { title: '스낵 & 미니 디저트' },
                            { title: '아이스크림' },
                          ],
                        },
                        {
                          title: '상품',
                          subitems: [
                            { title: '머그' },
                            { title: '글라스' },
                            { title: '플라스틱 텀블러' },
                            { title: '스테인리스 텀블러' },
                            { title: '보온병' },
                            { title: '액세서리' },
                            { title: '커피 용품' },
                            { title: '패키지 티(티바나)' },
                          ],
                        },
                        {
                          title: '카드',
                          subitems: [
                            { title: '실물카드' },
                            { title: 'e-Gift 카드' },
                          ],
                        },
                        {
                          title: '메뉴 이야기',
                          subitems: [
                            { title: '나이트로 콜드브루' },
                            { title: '콜드 브루' },
                            { title: '스타벅스 티바나' },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'STORE',
                      items: [
                        {
                          title: '매장 찾기',
                          subitems: [
                            { title: '퀵 검색' },
                            { title: '지역 검색' },
                          ],
                        },
                        {
                          title: '드라이브 스루 매장',
                        },
                        {
                          title: '스타벅스 리저브™ 매장',
                        },
                        {
                          title: '커뮤니티 스토어 매장',
                        },
                        {
                          title: '매장 이야기',
                          subitems: [{ title: '티바나 바 매장' }],
                        },
                      ],
                    },
                    {
                      title: 'RESPONSIBILITY',
                      items: [],
                    },
                    {
                      title: 'STARBUCKS REWARDS',
                      items: [],
                    },
                    {
                      title: "WHAT'S NEW",
                      items: [],
                    },
                  ],
                }}
              />
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};
