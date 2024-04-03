
import * as React from 'react'
import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './components/Header';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react' // Imports Chakra UI

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

// Nested Appollo in Chakra 

function App() {
    return (
        <ChakraProvider>
            <ApolloProvider client={client}>
                <div className="">
                    <Header />
                    {/* <RMNP /> */}
                    <Outlet />
                </div>
            </ApolloProvider>
        </ChakraProvider>
    );
}

export default App;
