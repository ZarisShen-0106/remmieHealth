import React from 'react';
import { ButtonSolid } from '../Common/Button';
import {
    Text,
    Box,
    Flex,
    Image,
} from '@chakra-ui/core';
import Background from '../../static/img/home-partners.svg';
const Partner = () => {
    const title = 'OUR PARTNERS';
    const Introduction = 'Hospitals and Institutions We Work With';
    const description = 'Polygon absolutely works great with tools in your other existing platform.';
    return (
        <Box position="relative" width="102.3rem" margin="0 auto" mb="11.3rem" height="65rem">
            <Image src={Background} width="102.3rem" height="auto" position="absolute" ></Image>
            <Flex width="102.3rem" mt="21.8rem" flexDirection="column" alignItems="center" textAlign="center">
                <Text width="50rem" fontSize="1.6rem" fontWeight="500" lineHeight="2.5rem" color="#ED7E31" my="0px" mb="1.5rem">
                    {title}
                </Text>
                <Text width="50rem" fontSize="3.6rem" fontWeight="bpld" lineHeight="4.8rem" color="#183B56" my="0rem" mb="1.5rem">{Introduction}</Text>
                <Text width="50rem" fontSize="1.6rem" fontWeight="bold" lineHeight="2.5rem" color="#5A7184" my="0px" mb="3.7rem">{description}</Text>
                <a href="https://healthy.kaiserpermanente.org" target="_blank" rel="noopener noreferrer">
                    <ButtonSolid text="Partner With Us" />
                </a>
            </Flex>
        </Box>
    )
}

export default Partner;