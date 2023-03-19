import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://xn--80aaak7ahkw3ae9h8a.xn--p1ai/api',
    cache: new InMemoryCache(),
  });