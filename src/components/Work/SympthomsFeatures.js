import React from 'react';
import {
    Box,
    Flex,
    Text,
    Image
} from '@chakra-ui/core';

import icon1 from '../../static/img/work-symptom1.svg';
import icon2 from '../../static/img/work-symptom2.svg';
import icon3 from '../../static/img/work-symptom3.svg';
import icon4 from '../../static/img/work-feature1.svg';
import icon5 from '../../static/img/work-feature2.svg';
import icon6 from '../../static/img/work-feature3.svg';


const SymptomsAndFeatures = () => {
    return (
        <Flex flexDirection="column">
            <Symptom />
            <Feature />
        </Flex>
    )
}



const Symptom = () => {
    const symptom = [
        {
            imgSrc: icon1,
            description: 'ear infection, pinkeye'
        },
        {
            imgSrc: icon2,
            description: 'sinusitus, common cold'
        },
        {
            imgSrc: icon3,
            description: 'pharyngitis, strep throat, hand-foot-mouth disease'
        },
    ]
    return (
        <Box textAlign="center">
            <Text my="0px" fontSize="3.6rem" lineHeight="7.4rem" fontWeight="bold" color="orange">Target Symptoms</Text>
            <Text my="0px" fontSize="2.4rem" fontWeight="500" lineHeight="3.6rem" color="#8E8986">
                Real time symptom visualization of ear, nose, and throat.
            </Text>
            <Flex justifyContent="center" mt="3.6rem" mb="15.9rem" width="auto">
                {
                    symptom.map((item, index) => {
                        return (
                            <Box key={index} width="36.5rem" className="sympthoms-item" borderTop="0.1rem solid orange" borderRight={index !== 2 ? "0.1rem solid #979797" : ""}
                                borderBottomLeftRadius={index === 0 && "1.6rem"} borderBottomRightRadius={index === 2 && "1.6rem"}
                                borderTopLeftRadius={index === 0 && "0.8rem"} borderTopRightRadius={index === 2 && "0.8rem"}
                            >
                                <Image src={item.imgSrc} width="15rem" height="15rem" mt="4.3rem" />
                                <Text fontSize="2.4rem" fontWeight='bold' lineHeight="3.5rem" color="#183B56">
                                    {item.description}
                                </Text>
                            </Box>
                        )
                    })
                }
            </Flex>
        </Box>
    )
}

const Feature = () => {
    const features = [
        {
            imgSrc: icon4,
            title: 'Built-in Telemedicine',
            description: 'Reaching doctors directly and instantly with symptoms in-hand'
        },
        {
            imgSrc: icon5,
            title: 'Symptom Tracking',
            description: 'Monitor symptoms and recovery pre- and post-visit; Saving time and cost from unnecessary visits'
        },
        {
            imgSrc: icon6,
            title: 'AI diagnostics (Coming Soon)',
            description: 'Support doctor’s diagnosis through symptom recognition'
        }
    ]
    return (
        <Box textAlign="center">
            <Text my="0px" fontSize="3.6rem" lineHeight="7.4rem" fontWeight="bold" color="orange">Features</Text>
            <Flex justifyContent="center" mt="8.4rem" mb="15.3rem" width="auto">
                {
                    features.map((item, index) => {
                        return (
                            <Box key={index} width="36.5rem" mr={index !== 2 && "1rem"}>
                                <Image src={item.imgSrc} width="auto" height="18.2rem" mt="4.3rem" />
                                <Text my="1rem" fontSize="2rem" fontWeight='500' lineHeight="3rem" color="#183B56">
                                    {item.title}
                                </Text>
                                <Text my="0px" width="34rem" fontSize="1.8rem" fontWeight='normal' lineHeight="3.2rem" color="#5A7184">
                                    {item.description}
                                </Text>
                            </Box>
                        )
                    })
                }
            </Flex>
        </Box>
    )
}




export default SymptomsAndFeatures;