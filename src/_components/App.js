import React from 'react';
import { Box, Grommet } from 'grommet';

import PageHeader from './routing/PageHeader';
import Routing from './routing';
import { themes } from '../utilities';

function App() {
  return (
    <Grommet theme={themes.awsmcolor}>
      <PageHeader />

      <Box pad="medium">
        <Routing />
      </Box>
    </Grommet>
  );
}

export default App;
