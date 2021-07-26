import React, { useState, useEffect } from 'react';

import axios from 'axios';
import {
  Box,
  List,
  ListItem,
  Stack,
  Progress,
  Fade
} from '@chakra-ui/react';

function Group({ group, index }) {
  return (
    <Box key={index} p={5} shadow="sm" borderWidth="1px" maxW="sm">
      <List key={index} spacing={1}>
        {group.map((item, i) => <ListItem key={i}>{`${item.name} - ${item.email}`}</ListItem>)}
      </List>
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

  if (!duplicates.length) {
    return <Progress size="xs" isIndeterminate />
  }

  return (
    <Fade in={duplicates.length}>
      <Stack spacing={8}>
        { duplicates.map((group, i) => <Group index={i} group={group} />) }
      </Stack>
    </Fade>
  );
}

export default Duplicates;
