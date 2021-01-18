import { gql } from '@apollo/client';

export const GET_ALL_QUERY = gql`
  query {
    getCategories {
      id
      name
      createdAt
      updatedAt
      series {
        id
        name
        createdAt
        updatedAt
        imageUrl
        service {
          id
          name
        }
      }
    }
  }
`;

export const CREATE_CATEGORY_MUTATION = gql`
  mutation AddCategoryMutation($name: String!) {
    addCategory(name: $name) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_CATEGORY_MUTATION = gql`
  mutation UpdateCategoryMutation($id: ID!, $name: String!) {
    updateCategory(id: $id, name: $name) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const REMOVE_ENTRY_MUTATION = gql`
  mutation RemoveCategoryMutation($id: ID!) {
    removeCategory(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
