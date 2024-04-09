
import * as React from 'react'
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import {setContext} from "@apollo/client/link/context"
import { ChakraProvider } from '@chakra-ui/react' // Imports Chakra UI

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar/index';
import Footer from './components/Footer/Footer'; //Added footer component

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
    uri: '/graphql',
    });
    
    // Construct request middleware that will attach the JWT token to every request as an `authorization` header
    const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
    headers: {
    ...headers,
    authorization: token ? `Bearer ${token}` : '',
    },
    };
    });
    
    const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    });

// Nested Appollo in Chakra 

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
