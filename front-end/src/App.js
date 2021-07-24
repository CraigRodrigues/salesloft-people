import React, { useState, useEffect } from 'react';
import {
  theme,
  ChakraProvider,
  Box,
  Grid,
  ButtonGroup,
  Button,
  Table
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const [dataType, setDataType] = useState('all');

  useEffect(() => {
    console.log(dataType);
  }, [dataType]);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <ColorModeSwitcher justifySelf="flex-end" />
        <Grid minH="100vh" templateRow="repeat(2, 1fr)">
          <ButtonGroup varient="outline" spacing="6" align="center">
            <Button colorScheme="blue" variant="outline" onClick={() => setDataType('all')}>
              All People
            </Button>
            <Button colorScheme="blue" variant="outline" onClick={() => setDataType('frequency')}>
              Character Frequency
            </Button>
            <Button colorScheme="blue" variant="outline" onClick={() => setDataType('duplicates')}>
              Possible Duplicates
            </Button>
          </ButtonGroup>
          <Table></Table>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
