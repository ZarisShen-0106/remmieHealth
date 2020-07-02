import React from 'react';
import { ButtonSolid } from '../Common/Button';
import {
    Text,
    Box,
    Flex,
    Image,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import Teachnology from '../../static/img/home-technology.svg';
const Technology = () => {
    const title = 'Our Technologies';
    const Introduction = 'Real time symptom visualization of ear, nose, and throat.';
    const description = 'The first CONNECTED MONITOR for parents to receive professional evaluation of ear-nose-throat symptoms safely at home.';
    return (
        <Flex ml="13rem" mb="15.2rem">
            <Box width="54.5rem">
                <Text fontSize="3.6rem" fontWeight="bold" lineHeight="5rem" color="orange" my="0px">
                    {title}
                </Text>
                <Text fontSize="2.4rem" fontWeight="500" lineHeight="3.5rem" color="#8E8986" my="1.5rem">{Introduction}</Text>
                <Text fontSize="2.4rem" fontWeight="500" lineHeight="3.5rem" color="#183B56" my="0px" mb="2.4rem">{description}</Text>
                <Link to="about">
                    <ButtonSolid text="Learn More" />
                </Link>
            </Box>
            <Image src={Teachnology} width="58rem" height="auto"></Image>
        </Flex>
    )
}

export default Technology;