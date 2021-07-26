import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Progress,
  Fade
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

  if (!frequency.length) {
    return <Progress size="xs" isIndeterminate />
  }

  return (
    <Fade in={frequency.length}>
      <Table variant="simple" size="md" width="25%">
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
    </Fade>
  );
}

export default FrequencyTable;
