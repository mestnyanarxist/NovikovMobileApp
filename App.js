import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd-mobile';
import enUS from 'antd-mobile/es/locales/en-US'

import { WelcomeScreen } from './screens/WelcomeScreen';
import { SelectEventScreen } from './screens/SelectEventScreen';
import { apolloClient } from './services/ApolloClient';

export default function App() {
  return(
    <ApolloProvider client={apolloClient}>
      <WelcomeScreen/>
    </ApolloProvider>
  )
}

/*export default function App() {
  return(
    <ApolloProvider client={apolloClient}>
      <ConfigProvider locale={enUS}>
          <SelectEventScreen />
      </ConfigProvider>           
    </ApolloProvider>
  );
}*/