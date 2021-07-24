import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

function DuplicatesTable() {
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

  const Row = ({ item, key }) => (
        <Tr key={key}>
            <Td>{item.name}</Td>
            <Td>{item.title}</Td>
            <Td>{item.email}</Td>
        </Tr>
    );

  return (
    <Table variant="simple" size="md">
        <Thead>
            <Tr>
                <Th>Character</Th>
                <Th>Count</Th>
            </Tr>
        </Thead>
        <Tbody>
            {duplicates.map((item, i) => <Row key={i} item={item} />)}
        </Tbody>
    </Table>
  );
}

export default DuplicatesTable;
