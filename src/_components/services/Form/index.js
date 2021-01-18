import React, { useContext } from 'react';
import { useMutation } from '@apollo/client';
import Layout from './layout';
import { ContainerContext } from '../context';
import {
  CREATE_SERVICE_MUTATION,
  GET_ALL_QUERY,
  UPDATE_SERVICE_MUTATION,
} from '../queries';

const defaultValues = {
  name: '',
};

function Form({ handleRemove, onClose }) {
  const {
    entityData: [entity],
  } = useContext(ContainerContext);

  const isAddMode = !entity.id;

  const [addService] = useMutation(CREATE_SERVICE_MUTATION, {
    refetchQueries: [
      {
        query: GET_ALL_QUERY,
      },
    ],
  });

  const [updateService] = useMutation(UPDATE_SERVICE_MUTATION);

  const onSubmit = (values) => {
    const { createdAt, updatedAt, series, __typename, ...variables } = values;

    if (isAddMode) {
      addService({
        variables,
      });
    } else {
      updateService({
        variables,
      });
    }
  };

  const initialValues = { ...defaultValues, ...entity };

  return (
    <Layout
      isAddMode={isAddMode}
      initialValues={initialValues}
      onSubmit={onSubmit}
      key={initialValues.id}
      onClose={onClose}
      handleRemove={handleRemove}
    />
  );
}

export default Form;
