import React from 'react';
import List from './List';
import ContainerProvider from './context';

function Services() {
  return (
    <ContainerProvider>
      <List />
    </ContainerProvider>
  );
}

export default Services;
