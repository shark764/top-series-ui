import React, { createContext, useState } from 'react';

export const ContainerContext = createContext();

function ContainerProvider({ children }) {
  const open = useState(false);
  const entityData = useState({});

  return (
    <ContainerContext.Provider value={{ open, entityData }}>
      {children}
    </ContainerContext.Provider>
  );
}

export default ContainerProvider;
