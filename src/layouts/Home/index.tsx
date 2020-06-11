/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Search } from './components/Search';
import { Foundation } from './components/Foundation';
// import { Patterns } from './components/Patterns';
import { News } from './components/News';

const HomeLayout: React.FC = () => {
  return (
    <>
      <Search />
      <Foundation />
      {/* <Patterns /> */}
      <News />
    </>
  );
};

export default HomeLayout;
