import React, { useContext } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Box, Button, Text } from 'grommet';

import TableList from './TableList';
import { ContainerContext } from '../context';
import { AddCircle, Refresh, StatusCritical } from 'grommet-icons';
import Form from '../Form';
import { GET_ALL_QUERY, REMOVE_ENTRY_MUTATION } from '../queries';

function List() {
  const {
    open: [open, setOpen],
    entityData: [entity, setEntity],
  } = useContext(ContainerContext);

  const { loading, error, data, refetch } = useQuery(GET_ALL_QUERY, {
    // pollInterval: 30000,
  });

  const [removeEntry] = useMutation(REMOVE_ENTRY_MUTATION, {
    refetchQueries: [
      {
        query: GET_ALL_QUERY,
      },
    ],
  });

  const handleRemoveEntry = async (id) => {
    await removeEntry({
      variables: {
        id,
      },
    });
    if (id === entity.id) {
      onClose();
    }
  };

  const onOpen = () => {
    setEntity({});
    setOpen(true);
  };

  const onClose = () => {
    setEntity({});
    setOpen(undefined);
  };

  const setCurrentEntity = (row) => {
    setEntity(row);
    setOpen(true);
  };

  if (loading) {
    return (
      <Text color="accent-2">
        <Refresh color="dark-1" /> Loading...
      </Text>
    );
  }

  if (error) {
    return (
      <Text color="status-critical">
        <StatusCritical color="dark-1" /> {error.message}
      </Text>
    );
  }

  const list = data ? data.getCategories : [];

  return (
    <Box margin="medium" pad="medium" elevation="medium" gap="small">
      <Box
        direction="row"
        gap="medium"
        margin={{ vertical: 'medium' }}
        alignSelf="end">
        <Button plain icon={<AddCircle />} label="Add" onClick={onOpen} />
        <Button
          plain
          icon={<Refresh />}
          label="Refetch"
          onClick={() => refetch()}
        />
      </Box>
      <TableList
        data={list}
        handleRemove={handleRemoveEntry}
        setCurrentEntity={setCurrentEntity}
      />

      {open && <Form handleRemove={handleRemoveEntry} onClose={onClose} />}
    </Box>
  );
}

export default List;
