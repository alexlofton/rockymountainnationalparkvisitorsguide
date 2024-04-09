import React, { useState } from 'react';
import {
    Tabs, TabList, TabPanels, Tab, TabPanel, Box, Icon, useDisclosure, Stack, Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody
} from "@chakra-ui/react";
import { MdPerson3 } from "react-icons/md";
import LoginForm from '../components/LoginForm/index';
import SignupForm from '../components/SignupForm/index';
import Auth from '../utils/auth';
import compTrailData from '../../dummyData/dumCompTrials.json'

const Profile = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formType, setFormType] = useState('login');
    const openForm = (type) => {
        setFormType(type);
        onOpen();
    };

    return (
        <div className="BdyCntn">
            {Auth.loggedIn() ? (
                <div className="UserBox">
                    <Box className="UserIb">
                        <div className="Usericon">
                            <Icon as={MdPerson3} boxSize={40} />
                        </div>
                        {compTrailData.map((trail) => (
                            <h1 className="UserN">Welcome {trail.username}</h1>
                        ))}
                        <Tabs variant="soft-rounded" colorScheme="green">
                            <TabList>
                                <Tab>Completed Trails</Tab>
                                {/* <Tab>Completed Trails</Tab> */}
                                {/* <Tab>Wildlife</Tab> */}
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    {compTrailData.map((trail, index) => (
                                        <Box className='CompTrailInfo' key={index} mb={4}>
                                            <h3><b>Trail Name: </b>{trail.name}</h3>
                                            <p><b>Trail Description: </b>{trail.description}</p>
                                            <p><b>Length: </b>{trail.length}</p>
                                            <p><b>Comments: </b>{trail.trailComments}</p>
                                        </Box>
                                    ))}
                                </TabPanel>
                                {/* <TabPanel>
                                    <p>two!</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>three!</p>
                                </TabPanel> */}
                            </TabPanels>
                        </Tabs>
                    </Box>
                </div>
            ) : (
                <Box className='UserBtns'>
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
    )
};

export default Profile;