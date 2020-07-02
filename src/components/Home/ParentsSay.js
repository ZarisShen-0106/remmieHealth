import React from 'react';
import {
    Box,
    Text,
    Flex,
    Image
} from '@chakra-ui/core';
import img from '../../static/img/profile-img.png';
const ParentsSay = () => {
    const title = 'What Parents Say about Us';
    const information = [
        {
            imgSrc: img,
            name: 'Kristen Duffy,',
            job: 'teacher',
            description: '"Remmie should be in every family\'s medicine cabinet.  This product will be a lifesaver for parents." '
        },
        {
            imgSrc: img,
            name: 'Kristen Duffy,',
            job: 'teacher',
            description: '"Remmie should be in every family\'s medicine cabinet.  This product will be a lifesaver for parents." '
        }
    ];
    return (
        <Box ml="12.8rem">
            <Text my="0px" fontSize="3.6rem" lineHeight="7.4rem" fontWeight="500" color="orange">{title}</Text>
            <Box position="relative" mb="22rem" mt="3rem">
                <Flex position="absolute">
                    {information.map((item, index) => {
                        return (
                            <Box key={index} mr={index === 0 && "3rem"} bg="white" border="0.1rem solid #E5EAF4" borderRadius="0.8rem" p="4rem">
                                <Flex>
                                    <Image src={item.imgSrc} height="5.6rem" mr="2rem" />
                                    <Box>
                                        <Text my="0px" fontSize="2.4rem" fontWeight="bold" lineHeight="3.2rem" letterSpacing="0.02rem" color="#183B56">{item.name}</Text>
                                        <Text my="0px" fontSize="1.6rem" lineHeight="2.8rem" color="#5A7184">{item.job}</Text>
                                    </Box>
                                </Flex>
                                <Text width="47.5rem" my="0px" mt="3rem" fontSize="1.8rem" lineHeight="3.2rem" color="#5A7184">
                                    {item.description}
                                </Text>
                            </Box>
                        )
                    })}
                </Flex>
            </Box>
        </Box>

    )
}

export default ParentsSay;