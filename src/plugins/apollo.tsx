import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: 'Bearer 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',
  },
});

export default client;
