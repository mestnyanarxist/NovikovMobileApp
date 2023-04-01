import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd-mobile';
import enUS from 'antd-mobile/es/locales/en-US'

import { apolloClient } from './services/ApolloClient';

import { Nav } from "./components/Navigator"

export default function App() {
  return(
    <ApolloProvider client={apolloClient}>
      <ConfigProvider locale={enUS}>
          <Nav/>             
      </ConfigProvider>
    </ApolloProvider>
    )
}