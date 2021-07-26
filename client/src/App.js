import React, { useState } from 'react';
import {
  theme,
  ChakraProvider,
  Container,
  Heading,
  SimpleGrid,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import PeopleTable from './PeopleTable';
import FrequencyTable from './FrequencyTable';
import Duplicates from './Duplicates';

function App() {
  const [filter, setFilter] = useState('people');

  console.log(filter);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
        <Container maxW="container.lg">
          <SimpleGrid rows={3} spacing={10}>
            <Heading as="h1" size="2xl">SalesLoft People</Heading>
            <ButtonGroup varient="outline" spacing="6" align="center">
              <Button colorScheme="blue" variant="outline" onClick={() => setFilter('people')}>
                All People
              </Button>
              <Button colorScheme="blue" variant="outline" onClick={() => setFilter('frequency')}>
                Character Frequency
              </Button>
              <Button colorScheme="blue" variant="outline" onClick={() => setFilter('duplicates')}>
                Possible Duplicates
              </Button>
              <Button colorScheme="blue" variant="outline">
                Refresh
              </Button>
            </ButtonGroup>
            { filter === 'people' && <PeopleTable /> }
            { filter === 'frequency' && <FrequencyTable /> }
            { filter === 'duplicates' && <Duplicates /> }
          </SimpleGrid>
        </Container>
    </ChakraProvider>
  );
}

export default App;
