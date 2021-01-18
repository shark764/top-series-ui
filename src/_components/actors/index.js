import React from 'react';
import List from './List';
import ContainerProvider from './context';

function Actors() {
  return (
    <ContainerProvider>
      <List />
    </ContainerProvider>
  );
}

export default Actors;
