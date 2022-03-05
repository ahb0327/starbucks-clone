/** @jsxImportSource @emotion/react */
import React from 'react';

import { Header } from '../components/Header';
import { NewRewards } from '../components/NewRewards';

export const HomePage: React.VFC = () => {
  return (
    <>
      <Header />
      <NewRewards />
    </>
  );
};
