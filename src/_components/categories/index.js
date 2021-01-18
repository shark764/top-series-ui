import React from 'react';
import List from './List';
import ContainerProvider from './context';

function Categories() {
  return (
    <ContainerProvider>
      <List />
    </ContainerProvider>
  );
}

export default Categories;
