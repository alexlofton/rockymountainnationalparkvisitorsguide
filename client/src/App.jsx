
import * as React from 'react'
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';

import { ChakraProvider } from '@chakra-ui/react' // Imports Chakra UI
import { setContext } from '@apollo/client/link/context'

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar/index';
import Footer from './components/Footer/Footer'; //Added footer component

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ChakraProvider>
            <ApolloProvider client={client}>
                <>
                    <Header />
                    <div className='mainCont'>
                        <Sidebar />
                        <Outlet />
                    </div>
                    <Footer />
                </>
            </ApolloProvider>
        </ChakraProvider>
    );
}

export default App;
