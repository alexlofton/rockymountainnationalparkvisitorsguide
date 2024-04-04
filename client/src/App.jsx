
import * as React from 'react'
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react' // Imports Chakra UI

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar/index';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

// Nested Appollo in Chakra 

function App() {
    return (
     <ChakraProvider> 
       <ApolloProvider client={client}>
            <>
                <Header />
                <Sidebar />
                <main>
                    <Outlet />
                </main>
            </>
        </ApolloProvider>
     </ChakraProvider>
    );
}

export default App;
