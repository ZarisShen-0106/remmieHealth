import React from 'react';
import {
    Text,
    Heading,
    Box,
    Flex,
    Image,
} from '@chakra-ui/core';
import YoutePlaceholder from '../../static/img/youtube-placeholder.svg';

const Usage = () => {
    const usageItem = [
        {
            title: 'Peace of mind',
            decription: 'Remmie is the healthcare partner for busy parents who want to do the best for the families.',
        },
        {
            title: 'Connected',
            decription: 'No more suffering through ear-nose-throat aches but share them with a doctor, 24/7',
        },
        {
            title: 'Empowered',
            decription: 'Keep a log of your conditions and kow what to do for a speedy recovery.',
        },

    ]
    return (
        <Box>
            <Flex mx="13rem" alignItems="center"  mb="17.8rem">
                <Box width="56.2rem">
                    <Image src={YoutePlaceholder} width="56.2rem" />
                </Box>
                <Box ml="4rem">
                    <Text fontSize="3.6rem" fontWeight="bold" lineHeight="5rem" color="orange" my="0px">
                        Our Mission:<br />
                            empower family health
                            and improve telemedicine
                    </Text>
                    {
                        usageItem.map((item, index) => {
                            return (
                                    <Box mt="2rem" key={index}>
                                        <Heading fontSize="2rem" fontWeight="500" lineHeight="3rem" mt="0px" mb="1.2rem">{item.title}</Heading>
                                        <Text fontSize="1.6rem" lineHeight="2.5rem" fontWeight="bold" color="#57586E" my="0px">{item.decription}</Text>
                                    </Box>
                            )
                        })
                    }
                </Box>
            </Flex>
        </Box>
    )
}

export default Usage