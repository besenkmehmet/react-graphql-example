import fetch from 'cross-fetch';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client';
import { env } from '../../env';

const authLink = new ApolloLink((operation, forward) => {
  const token = env.GITHUB_BEARER;
  operation.setContext({
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return forward(operation);
});

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql', fetch });

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${env.GITHUB_BEARER}`,
  },
});

export default client;
