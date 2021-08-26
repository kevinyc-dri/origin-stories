import React from 'react';
import Header from './components/Header'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Stack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme} >
      <Box 
        textAlign="center"
        fontWeight="700"
        fontFamily="Space Mono" 
        fontSize="21px"
        lineHeights="38px" 
        color='#FF3864' 
        backgroundColor='#190027'>
        <Grid minH="100vh" p={3}>
          <Header />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
