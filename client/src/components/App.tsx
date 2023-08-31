import React from 'react';
import Redirect from './Redirect';
import { ChakraProvider } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Redirect />
    </ChakraProvider>
  );
};

export default App;
