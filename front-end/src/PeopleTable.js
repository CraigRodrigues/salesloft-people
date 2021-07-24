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

  const peopleTable = people.map((person, i) => {
    return (
      <Tr key={i}>
        <Td>{person.name}</Td>
        <Td>{person.title}</Td>
        <Td>{person.email}</Td>
      </Tr>
    );
  });

  return (
    <Table variant="simple" size="md">
        <Thead>
            <Tr>
            <Th>Name</Th>
            <Th>Title</Th>
            <Th>Email</Th>
            </Tr>
        </Thead>
        <Tbody>
            {peopleTable}
        </Tbody>
    </Table>
  );
}

export default PeopleTable;
