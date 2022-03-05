/** @jsxImportSource @emotion/react */
import React from 'react';
import { Global } from '@emotion/react';

import { HomePage } from './pages/HomePage';

const App: React.VFC = () => {
  return (
    <>
      <Global
        styles={{
          body: {
            background:
              'url(https://www.starbucks.co.kr/common/img/main/fav_prod_bg_new.jpg) center center fixed no-repeat #45434c',
            backgroundSize: 'auto 100%',
            height: 800,
          },
          a: {
            color: 'black',
            textDecoration: 'none',
            ':hover': {
              textDecoration: 'underline',
            },
          },
          '*, *::after, *::before': {
            margin: 0,
            padding: 0,
            border: 0,
            fontFamily:
              "NanumBarunGothic, '맑은 고딕', HelveticaNeue, DroidSans, Sans-serif, Helvetica",
          },
        }}
      />
      <HomePage />
    </>
  );
};

export default App;
