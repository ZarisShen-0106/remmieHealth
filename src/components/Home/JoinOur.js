import React from 'react';
import {
    Flex,
    Box,
    Text,
    Input,
} from '@chakra-ui/core';

import { AiOutlineMail } from 'react-icons/ai';
const JoinOur = () => {
    return (
        <Flex bg="#12B2B3" alignItems="center" pb="9.5rem" pt="10rem">
            <Box ml="15rem">
                <Text my="0px" fontSize="4.8rem" fontWeight="bold" lineHeight="6rem" letterSpacing="0.02rem" color="#fff">
                    Join Our Newsletter
                </Text>
                <Text my="0px" mt='1rem' width="52rem" fontSize="1.6rem" fontWeight="500" lineHeight="2.5rem" color="#fff">
                    To learn how you can get involved in taking greater control over your child's health and how you can get involved in bringing MiVUE to market.
                </Text>
            </Box>
            <Flex ml="11rem" bg="#fff" alignItems="center" border="0.1rem solid #C3CAD9" borderRadius="0.8rem">
                <Box ml="1rem" as={AiOutlineMail} size="3.5rem" color="gray"/>
                <Input type="email" placeholder="Your Emaill" p="0px" ml="1rem" width="25rem" height="3.5rem"/>
                <Box>
                    <Text my="0.3rem" mr="0.3rem" borderRadius="0.5rem" py="1rem" px="2rem" bg="orange" fontSize="1.8rem" fontWeight="bold" lineHeight="2.5rem" color="#fff">Subscribe</Text>
                </Box>
            </Flex>

        </Flex>
    )
}

export default JoinOur;