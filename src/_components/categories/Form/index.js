import React, { useContext } from 'react';
import { useMutation } from '@apollo/client';
import Layout from './layout';
import { ContainerContext } from '../context';
import {
  CREATE_CATEGORY_MUTATION,
  GET_ALL_QUERY,
  UPDATE_CATEGORY_MUTATION,
} from '../queries';

const defaultValues = {
  name: '',
};

function Form({ handleRemove, onClose }) {
  const {
    entityData: [entity],
  } = useContext(ContainerContext);

  const isAddMode = !entity.id;

  const [addCategory] = useMutation(CREATE_CATEGORY_MUTATION, {
    refetchQueries: [
      {
        query: GET_ALL_QUERY,
      },
    ],
  });

  const [updateCategory] = useMutation(UPDATE_CATEGORY_MUTATION);

  const onSubmit = (values) => {
    const { createdAt, updatedAt, series, __typename, ...variables } = values;

    if (isAddMode) {
      addCategory({
        variables,
      });
    } else {
      updateCategory({
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
