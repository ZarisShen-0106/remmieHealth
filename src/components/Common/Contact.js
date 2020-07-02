import React, { useState, useEffect } from 'react';
import {
    Text,
    Box,
    Flex,
    FormControl,
    FormLabel,
    Textarea,
    Input,
} from '@chakra-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonSolid } from '../Common/Button';
import emailjs from 'emailjs-com';
const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLatName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [contactDone, setContactDone] = useState(false);

    const error = (info) => toast.error(info, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const success = () =>
        toast.success('success!', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    const handleSubmit = () => {
        const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

        if(!(firstName&&lastName)){
            error('inpput your name');
            return;
        }
        if(!email){
            error('input your email address');
            return;
        }
        if(!message){
            error('input correct email address');
            return;
        } 
        if (reg.test(email)) {
            setEmailValid(true);
        }
        else {
            setEmailValid(false);
        }
    }
    useEffect(() => {
        const formData = {};
        formData['name'] = firstName + '' + lastName;
        formData['email'] = email;
        formData['message'] = message;
               
        if (emailValid) {
            emailjs.send('gmail', 'template_KRd3m1jz', formData, 'user_kDhVfsaDjw0KvCOEwWWX9')
                .then(function (response) {
                    setContactDone(true);
                    success();
                }, function (err) {
                    setContactDone(false)
                });
        }
    },[emailValid])
    return (
        <Flex bg="#12B2B3">
            <Box width="60rem" mb="12.1rem" ml="7.9rem" fontWeight="normal">
                <Text mt="5.6rem" mb="8.4rem" fontWeight="bold" fontSize="4.8rem" lineHeight="6rem" color="white">
                    Contact Us
                </Text>
                <Text my="0px" mb="7.3rem" fontSize="1.8rem" lineHeight="3.1rem" color="#E5EAF4">
                    We would love to hear about your project and discuss how we can help. Please fill the form on the
                    right side to schedule a call or discussion and meeting on the your convenient time.</Text>
                <Text my="0px" mb="2.4rem" fontWeight="bold" fontSize="2.0rem" lineHeight="2.4rem" color="#FAFAFB">
                    You can contact us on :
                </Text>
                <Text my="0px" mb="3.1rem" fontWeight="bold" fontSize="1.6rem" lineHeight="2.7rem" color="#E5EAF4">
                    +44 (0)20 7686 3445<br />
                    contact@remmiehealth.com
                </Text>
                <Text width="55rem" my="0px" fontWeight="bold" fontSize="1.6rem" lineHeight="2.0rem" color="white">
                    *Your information will only be used by Remmie Health Inc. to get in touch you about your needs.
                </Text>
            </Box>
            <Box width="auto" mt="5.6rem" mb="12.1rem" ml="5rem" bg="white" borderRadius="0.8rem">
                <Text ml="3.3rem" my="3rem" fontSize="2.8rem" fontWeight="bold" lineHeight="3.6rem" color="#12B2B3">
                    Let's Connect!
                </Text>
                <Flex mx="3.3rem" color="#5A7184" fontSize="1.6rem" lineHeight="2.2rem" fontWeight="600">
                    <FormControl >
                        <Box mr="1.7rem" display="inline-block" >
                            <FormLabel htmlFor="first-name" >First Name</FormLabel>
                            <Input type="text" id="first-name" height="4.8rem" width="20rem" px="2rem" border="0.1rem solid #12B2B3" borderColor="#C3CAD9" placeholder="Your Name" borderRadius="0.8rem"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Box>
                        <Box display="inline-block" mb="2rem">
                            <FormLabel htmlFor="last-name">Last Name</FormLabel>
                            <Input type="text" id="last-name" height="4.8rem" width="20rem" px="2rem" border="0.1rem solid #12B2B3" borderColor="#C3CAD9" placeholder="Your Name" borderRadius="0.8rem"
                                onChange={(e) => setLatName(e.target.value)}
                            />
                        </Box>
                        <Box mb="2rem">
                            <FormLabel htmlFor="email">Your Email</FormLabel>
                            <Input type="email" id="email" height="4.8rem" width="45.7rem" px="2rem" border="0.1rem solid #12B2B3" borderColor="#C3CAD9" placeholder="Yourname@mail.com" borderRadius="0.8rem"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Box>
                        <Box mb="2rem">
                            <FormLabel htmlFor="needs">Tells Us Your Needs</FormLabel>
                            <Textarea id="needs" height="14.6rem" width="45.7rem" px="2rem" border="0.1rem solid #12B2B3" borderColor="#C3CAD9" placeholder="Hi Remmie, I am interested in your product and would like to know more!" borderRadius="0.8rem"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Box>
                    </FormControl>
                </Flex>
                <Box mb="2rem" textAlign="center"
                    onClick={handleSubmit}
                >
                    <ButtonSolid text="Submit" />
                    <ToastContainer />
                </Box>
            </Box>
        </Flex>
    )
}
export default Contact;