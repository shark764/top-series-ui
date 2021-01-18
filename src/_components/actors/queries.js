import { gql } from '@apollo/client';

export const GET_ALL_QUERY = gql`
  query {
    getActors {
      id
      name
      createdAt
      updatedAt
      imageUrl
      cast {
        serie {
          id
          name
          createdAt
          updatedAt
          imageUrl
          category {
            id
            name
          }
          service {
            id
            name
          }
        }
      }
    }
  }
`;

export const CREATE_ACTOR_MUTATION = gql`
  mutation AddActorMutation($name: String!, $imageUrl: String!) {
    addActor(name: $name, imageUrl: $imageUrl) {
      id
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_ACTOR_MUTATION = gql`
  mutation UpdateActorMutation($id: ID!, $name: String!, $imageUrl: String!) {
    updateActor(id: $id, name: $name) {
      id
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;

export const REMOVE_ENTRY_MUTATION = gql`
  mutation RemoveActorMutation($id: ID!) {
    removeActor(id: $id) {
      id
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
