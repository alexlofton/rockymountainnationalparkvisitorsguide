import { useState, useEffect } from 'react';
import { FormControl, FormLabel, Input, Button, useToast, FormErrorMessage } from '@chakra-ui/react';

import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

const SignupForm = () => {
    const [userFormData, setUserFormData] = useState({ username: '', password: '' });
    const [validated] = useState(false);
    const toast = useToast();

    const [addUser, { error }] = useMutation(ADD_USER);

    useEffect(() => {
        if (error) {
            toast({
                title: "An error occurred.",
                description: "Something went wrong with your signup!",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }
    }, [error, toast]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addUser({
                variables: { ...userFormData }
            });
            console.log(data);

            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            username: '',
            password: '',
        });
    };

    return (
        <>
            <form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <FormControl id="username" isRequired mb={4}>
                    <FormLabel>Username</FormLabel>
                    <Input
                        type="text"
                        placeholder="Your username"
                        name="username"
                        onChange={handleInputChange}
                        value={userFormData.username}
                    />
                    <FormErrorMessage>Username is required!</FormErrorMessage>
                </FormControl>

                <FormControl id="password" isRequired mb={6}>
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        placeholder="Your password"
                        name="password"
                        onChange={handleInputChange}
                        value={userFormData.password}
                    />
                    <FormErrorMessage>Password is required!</FormErrorMessage>
                </FormControl>

                <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                    isDisabled={!(userFormData.username && userFormData.password)}
                >
                    Submit
                </Button>
            </form>
        </>
    );
};

export default SignupForm;