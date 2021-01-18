import React, { useContext } from 'react';
import { useMutation } from '@apollo/client';
import Layout from './layout';
import { ContainerContext } from '../context';
import {
  CREATE_ACTOR_MUTATION,
  GET_ALL_QUERY,
  UPDATE_ACTOR_MUTATION,
} from '../queries';

const defaultValues = {
  name: '',
  imageUrl: '',
};

function Form({ handleRemove, onClose }) {
  const {
    entityData: [entity],
  } = useContext(ContainerContext);

  const isAddMode = !entity.id;

  const [addActor] = useMutation(CREATE_ACTOR_MUTATION, {
    refetchQueries: [
      {
        query: GET_ALL_QUERY,
      },
    ],
  });

  const [updateActor] = useMutation(UPDATE_ACTOR_MUTATION);

  const onSubmit = (values) => {
    const { createdAt, updatedAt, cast, __typename, ...variables } = values;

    if (isAddMode) {
      addActor({
        variables,
      });
    } else {
      updateActor({
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
