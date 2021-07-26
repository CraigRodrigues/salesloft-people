import React from 'react';
import {
  theme,
  ChakraProvider,
  Box,
  Heading,
  Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import PeopleTable from './PeopleTable';
import FrequencyTable from './FrequencyTable';
import Duplicates from './Duplicates';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <ColorModeSwitcher />
        <Heading as="h1" size="2xl">SalesLoft People</Heading>
      </Box>
      <Tabs isLazy>
        <TabList>
          <Tab>All People</Tab>
          <Tab>Character Frequency</Tab>
          <Tab>Possible Duplicates</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <PeopleTable />
          </TabPanel>
          <TabPanel>
            <FrequencyTable />
          </TabPanel>
          <TabPanel>
            <Duplicates />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
}

export default App;
