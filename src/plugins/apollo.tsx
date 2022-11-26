import { ApolloClient, InMemoryCache } from '@apollo/client';
import { env } from '../../env';
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${env.GITHUB_BEARER}`,
  },
});

export default client;
