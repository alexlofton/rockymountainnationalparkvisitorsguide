import React, { useState } from 'react';
import {
    Box,
    Button,
    Stack,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody
} from '@chakra-ui/react';
import LoginForm from '../components/LoginForm/index';
import SignupForm from '../components/SignupForm/index';
import '../App.css';
import Auth from '../utils/auth';


const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formType, setFormType] = useState('login');
    const openForm = (type) => {
        setFormType(type);
        onOpen();
    };

    return (
      <>

        <div className='HomeBd'>
            <img className="Logo" src="/assets/RMLOGO.png" alt="Rocky Mountains Logo" />

            <div className='Homelanding'>
                <h1> Discover Rocky Mountain's marvels, one adventure at a time.</h1>
                <p className='HomeDesc'>Nestled amidst the breathtaking beauty of the Rocky Mountains, our website
                    serves as a gateway to an unparalleled outdoor adventure. Here, you'll find
                    an extensive collection of resources and insights dedicated to the rugged
                    trails, thrilling activities, and diverse wildlife that call these mountains
                    home. Whether you're an avid hiker seeking to conquer new peaks, a wildlife
                    enthusiast eager to spot majestic creatures in their natural habitat, or
                    someone looking to immerse themselves in the serene beauty of mountain landscapes,
                    we've got you covered. Our comprehensive guides ensure that your exploration of
                    the Rockies is not just a journey, but a truly
                    unforgettable experience. Join us in celebrating the wild, the majestic,
                    and the awe-inspiring wonders of the Rocky Mountains.
                </p>
            </div>
            {!Auth.loggedIn() && (
                <Box className='HomeBtns'>
                    <Stack spacing={30} direction="row" textAlign="center" p={4}>
                        <Button
                            className='LoginButton'
                            size="md"
                            onClick={() => openForm('login')}
                        >
                            Log In
                        </Button>

                        <Button
                            className='SignupButton'
                            size="md"
                            onClick={() => openForm('signup')}
                        >
                            Sign Up
                        </Button>
                    </Stack>
                </Box>
            )}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{formType === 'login' ? 'Login' : 'Sign Up'}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        {formType === 'login' ? <LoginForm /> : <SignupForm />}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default Home;