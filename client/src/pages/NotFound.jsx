import { Container, Box } from '@chakra-ui/react'
import skull from '/assets/Bone.jpg'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar/index';
import Footer from '../components/Footer/Footer'

const NotFound = () => {
    return (
        <ChakraProvider>
                <>
                    <Header />
                    <div className='mainCont'>
                        <Sidebar />
                        <Container className='errCont'>
                            <h1 className='errTitle'>TURN BACK !</h1>
                            <img src={skull} alt="" />
                            <h3 className='errMsg'> 404 PAGE NOT FOUND!</h3>
                        </Container>
                    </div>
                    <Footer />
                </>
        </ChakraProvider>

    )
};

export default NotFound;