import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  HStack,
  Code,
  Grid,
  theme,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <HStack as="nav" alignItems="center" justifyContent="space-between" spacing={8}>
            <Heading>Test</Heading>
          </HStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
