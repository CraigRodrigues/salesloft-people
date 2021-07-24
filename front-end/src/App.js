import React, { useState } from 'react';
import {
  theme,
  ChakraProvider,
  Center,
  Heading,
  SimpleGrid,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import PeopleTable from './PeopleTable';
import FrequencyTable from './FrequencyTable';
import DuplicatesTable from './DuplicatesTable';

function App() {
  const [filter, setFilter] = useState('people');

  console.log(filter);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Heading as="h1">SalesLoft People App</Heading>
      <Center w="90%">
        <SimpleGrid rows={2} spacing={10}>
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
          </ButtonGroup>
          { filter === 'people' && <PeopleTable /> }
          { filter === 'frequency' && <FrequencyTable /> }
          { filter === 'duplicates' && <DuplicatesTable /> }
        </SimpleGrid>
      </Center>
    </ChakraProvider>
  );
}

export default App;
