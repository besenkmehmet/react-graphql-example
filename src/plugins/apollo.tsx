import fetch from 'cross-fetch';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client';

const authLink = new ApolloLink((operation, forward) => {
  const token = import.meta.env.VITE_GITHUB_BEARER;
  operation.setContext({
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return forward(operation);
});

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GITHUB_GRAPHQL_BASE_URL,
  fetch,
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri: import.meta.env.VITE_GITHUB_GRAPHQL_BASE_URL,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_GITHUB_BEARER}`,
  },
});

export default client;
