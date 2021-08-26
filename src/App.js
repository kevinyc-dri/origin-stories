import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Stack,
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
          <Stack as="nav" direction={["row"]} spacing={8} justifyContent="space-between">
            <Heading justifyContent="left">Test</Heading>
            <div>Manifesto</div>
            <div>Services</div>
            <div>Portfolio</div>
            <div>Join</div>
            <div>Hire</div>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Stack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
