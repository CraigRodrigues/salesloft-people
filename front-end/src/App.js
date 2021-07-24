import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  theme,
  ChakraProvider,
  Center,
  Container,
  Heading,
  SimpleGrid,
  ButtonGroup,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {

  const [dataType, setDataType] = useState('people');
  const [people, setPeople] = useState([]);
  const [frequency, setFrequency] = useState([]);
  const [duplicates, setduplicates] = useState([]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchData = async (type) => {
      const result = await axios.get(`http://localhost:8080/${type}.json`, { cancelToken: source.token });
      console.log(result);
      setPeople(result.data);
    };

    fetchData(dataType);

    return () => {
      source.cancel('Operation cancelled');
    }
  }, [dataType]);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Heading as="h1">SalesLoft People App</Heading>
      <Center>
        <Container>
          <SimpleGrid rows={2} spacing={10}>
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
            <Table variant="simple" size="md">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </SimpleGrid>
        </Container>
      </Center>
    </ChakraProvider>
  );
}

export default App;
