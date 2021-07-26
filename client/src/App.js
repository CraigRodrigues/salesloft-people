import React from 'react';
import logo from './landing_logo.svg';
import {
  theme,
  ChakraProvider,
  Image,
  Flex,
  Spacer,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Link,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import PeopleTable from './PeopleTable';
import FrequencyTable from './FrequencyTable';
import Duplicates from './Duplicates';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex margin="20px" flexDirection="column">
        <Flex margin="20px">
          <Image src={logo} />
          <Spacer />
          <ColorModeSwitcher />
        </Flex>
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
      </Flex>
      <Text marginBottom="10px" textAlign="center">
        Made for SalesLoft by {" "}
          <Link color="blue.500" href="https://www.linkedin.com/in/craigrodrigues" isExternal>Craig Rodrigues</Link>
        {" "} 🤘🏾
      </Text>
    </ChakraProvider>
  );
}

export default App;
