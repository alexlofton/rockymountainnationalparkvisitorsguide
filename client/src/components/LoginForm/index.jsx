import { useState } from 'react';
import { FormControl, FormLabel, Input, Button, FormErrorMessage, useToast } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ username: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);
  const [validated] = useState(false);
  const toast = useToast();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({ variables: { ...userFormData } });
      Auth.login(data.login.token);
      toast({
        title: "Login successful.",
        description: "You've been logged in.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
      setShowAlert(true);
      toast({
        title: "An error occurred.",
        description: error ? error.message : "Unable to login, please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <FormControl id="username" isRequired isInvalid={showAlert}>
          <FormLabel>Username</FormLabel>
          <Input 
            type="username" 
            name="username" 
            value={userFormData.username} 
            onChange={handleInputChange} 
            placeholder="Your username" 
          />
          <FormErrorMessage>Username is required.</FormErrorMessage>
        </FormControl>

        <FormControl id="password" isRequired isInvalid={showAlert}>
          <FormLabel>Password</FormLabel>
          <Input 
            type="password" 
            name="password" 
            value={userFormData.password} 
            onChange={handleInputChange} 
            placeholder="Your password" 
          />
          <FormErrorMessage>Password is required.</FormErrorMessage>
        </FormControl>

        <Button
          mt={4}
          colorScheme="green"
          type="submit"
          isDisabled={!(userFormData.username && userFormData.password)}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
