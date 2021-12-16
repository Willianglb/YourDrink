import { gql } from '@apollo/client';

const QUERY_PEDIDOS = gql`
query GetDogs {
    pedidos {
      id
      name
      bebidasId
    }
}
`;