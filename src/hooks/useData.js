import { useQuery } from '@apollo/client';
import { GET_USERS } from '../apollo/queries';

export const useData = () => {
  const { data: users } = useQuery(GET_USERS);
  return { users };
}
