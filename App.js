import { ApolloProvider } from "@apollo/client";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { apolloClient } from './services/ApolloClient';

export default function App() {
  return(
    <ApolloProvider client={apolloClient}>
      <WelcomeScreen/>
    </ApolloProvider>
  )
}