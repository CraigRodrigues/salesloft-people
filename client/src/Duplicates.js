import React, { useState, useEffect } from 'react';

import axios from 'axios';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Container,
} from '@chakra-ui/react';

function DuplicatesRow({ item }) {
  return (
    <Tr key={item.email}>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
    </Tr>
  );
}

function DuplicatesTable({ index, group }) {
  return (
    <Box margin={4} borderWidth="2px" borderRadius="lg">
      <Table variant="simple" size="md" key={index}>
        <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
            </Tr>
        </Thead>
        <Tbody>
          {group.map((item) => <DuplicatesRow item={item} />)}
        </Tbody>
      </Table>
    </Box>
  );
};

function Duplicates() {
  const [duplicates, setDuplicates] = useState([]);

  console.log(duplicates);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchData = async () => {
      const { data } = await axios.get(`/duplicates.json`, { cancelToken: source.token });
      setDuplicates(data.data);
    };

    fetchData();

    return () => {
      source.cancel('Operation cancelled');
    }
  }, []);

  return (
    <Container>
      <Heading as="h2" size="md">Possible Duplicates</Heading>
      {duplicates.map((group, i) => <DuplicatesTable index={i} group={group} />)}
    </Container>
  );
}

export default Duplicates;
