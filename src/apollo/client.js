import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphQLUrl = process.env.REACT_APP_GRAPHQL_ENDPOINT;
const client = new ApolloClient({
  uri: graphQLUrl,
  cache: new InMemoryCache()
});

export default client;
