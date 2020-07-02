import React from 'react';
import {
    Text,
    Heading,
    Box,
    Flex,
    Image,
} from '@chakra-ui/core';
import Work from '../../static/img/work-work.svg';


const HowItWorks = () => {
    const features= [
        {
            title: 'Power on & Connect',
            decription: 'After 15 seconds light will start flashing, go to Settings and connect with monitor',
        },
        {
            title: 'Capture',
            decription: 'Pre-view and record symptoms, including video and images',
        },
        {
            title: 'Share with Your Doctor',
            decription: 'Connect for telemedicine and share symptoms for better diagnosis',
        },

    ]
    return (
        <Box bg="rgba(237, 126, 49, 0.1)" mb="12rem">
            <Flex mx="13rem" my="8rem" alignItems="center">
                <Box width="56.2rem" mt="2rem" textAlign="center">
                    <Image src={Work} width="28.7rem" />
                </Box>
                <Box ml="4rem" mb="0rem">
                    <Text fontSize="3.6rem" fontWeight="bold" lineHeight="5rem" color="orange" my="0px">
                        How it Works
                    </Text>
                    {
                        features.map((item, index) => {
                            return (
                                <Flex key={index} alignItems="center">
                                    <Text mr="2rem" fontSize="2rem" lineHeight="3rem" fontWeight="bold" color="orange" >{index+1}</Text>
                                    <Box mt="2rem">
                                        <Heading fontSize="2rem" fontWeight="500" lineHeight="3rem" mt="0px" mb="1.2rem">{item.title}</Heading>
                                        <Text fontSize="1.6rem" lineHeight="2.5rem" fontWeight="bold" color="#57586E" my="0px">{item.decription}</Text>
                                    </Box>
                                </Flex>
                            )
                        })
                    }
                </Box>
            </Flex>
        </Box>
    )
}

export default HowItWorks;