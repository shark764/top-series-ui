import { gql } from '@apollo/client';

export const GET_ALL_QUERY = gql`
  query {
    getServices {
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

export const CREATE_SERVICE_MUTATION = gql`
  mutation AddServiceMutation($name: String!) {
    addService(name: $name) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_SERVICE_MUTATION = gql`
  mutation UpdateServiceMutation($id: ID!, $name: String!) {
    updateService(id: $id, name: $name) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const REMOVE_ENTRY_MUTATION = gql`
  mutation RemoveServiceMutation($id: ID!) {
    removeService(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
