import { gql } from '@apollo/client';

export const ADD_PEDIDOS = gql`
  mutation AddPedido($name: String!, $bebidasId: String!) {
      addPedido(name: $name, bebidasId: $bebidasId) {
        id
      }
  }
`;