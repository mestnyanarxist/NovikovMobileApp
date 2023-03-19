import { ApolloClient, InMemoryCache} from '@apollo/client'

export const apolloClient = new ApolloClient({
    uri: 'https://xn--80aaak7ahkw3ae9h8a.xn--p1ai/api',
    cache: new InMemoryCache(),
  });