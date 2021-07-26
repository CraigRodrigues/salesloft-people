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

function PeopleRow({ item }) {
  return (
    <Tr key={item.email}>
      <Td>{item.name}</Td>
      <Td>{item.title}</Td>
      <Td>{item.email}</Td>
    </Tr>
  );
}

function PeopleTable() {
  const [people, setPeople] = useState([]);

  console.log(people);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchData = async () => {
      const { data } = await axios.get(`/people.json`, { cancelToken: source.token });
      setPeople(data.data);
    };

    fetchData();

    return () => {
      source.cancel('Operation cancelled');
    }
  }, []);

  if (!people.length) {
    return <Progress size="xs" isIndeterminate />
  }

  return (
    <Fade in={people.length}>
      <Table variant="simple" width="80%">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Title</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {people.map((item, i) => <PeopleRow key={i} item={item} />)}
          </Tbody>
      </Table>
    </Fade>
  );
}

export default PeopleTable;
