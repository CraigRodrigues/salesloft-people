import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  ButtonGroup,
  Button,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <ColorModeSwitcher justifySelf="flex-end" />
        <Grid minH="100vh" templateRow="repeat(2, 1fr)">
          <ButtonGroup varient="outline" spacing="6" align="center">
            <Button colorScheme="blue" variant="outline">
              All People
            </Button>
            <Button colorScheme="blue" variant="outline">
              Character Frequency
            </Button>
            <Button colorScheme="blue" variant="outline">
              Possible Duplicates
            </Button>
          </ButtonGroup>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
