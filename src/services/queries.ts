import { gql } from '@apollo/client';

export const QUERY_PEDIDOS = gql`
  query getPedidos {
      pedidos {
        id
        name
        bebidasId
      }
  }
`;