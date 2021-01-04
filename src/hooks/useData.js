import React, { useEffect } from 'react';
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

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
      username
      password
    }
  }
`;



export const useData = () => {
  const { data: books } = useQuery(GET_BOOKS);
  const { data: users } = useQuery(GET_USERS);

  return { books, users };
}
