import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="">
                <Header />
                {/* <Outlet /> */}
            </div>
        </ApolloProvider>
    );
}

export default App;
