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

function FrequencyRow({ item }) {
  return (
    <Tr key={`${item.character}-${item.count}`}>
      <Td>{item.character}</Td>
      <Td>{item.count}</Td>
    </Tr>
  );
}

function FrequencyTable() {
  const [frequency, setFrequency] = useState([]);

  console.log(frequency);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchData = async () => {
      const { data } = await axios.get(`/frequency.json`, { cancelToken: source.token });
      setFrequency(data.data);
    };

    fetchData();

    return () => {
      source.cancel('Operation cancelled');
    }
  }, []);

  return (
    <Table variant="simple" size="md">
      <Thead>
          <Tr>
            <Th>Character</Th>
            <Th>Count</Th>
          </Tr>
      </Thead>
      <Tbody>
        {frequency.map((item) => <FrequencyRow item={item} />)}
      </Tbody>
    </Table>
  );
}

export default FrequencyTable;
