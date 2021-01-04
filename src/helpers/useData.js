import { gql, useQuery } from '@apollo/client';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
    }
  }
`;

export const useData = () => {
  const { data } = useQuery(GET_BOOKS);
  return { data };
}
