import { ApolloProvider } from '@apollo/client';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { SelectEventScreen } from './screens/SelectEventScreen';
import { apolloClient } from './services/ApolloClient';

export default function App() {
  return(
    <ApolloProvider client={apolloClient}>
      <SelectEventScreen/>
    </ApolloProvider>
  )
}