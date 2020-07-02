import React from 'react';
import { ButtonSolid, ButtonOutline } from '../Common/Button';
import {
    Text,
    Box,
    Flex,
    Grid,
    Image,
} from '@chakra-ui/core';
import overview from '../../static/img/professional-overview.svg';
import icon1 from '../../static/img/professional-icon1.svg';
import icon2 from '../../static/img/professional-icon2.svg';
import icon3 from '../../static/img/professional-icon3.svg';
import icon4 from '../../static/img/professional-icon4.svg';
import icon5 from '../../static/img/work-symptom1.svg';
import icon6 from '../../static/img/work-symptom2.svg';
import icon7 from '../../static/img/work-symptom3.svg';

const Overview = () => {
    const title = 'Remmie Otoscope';
    const description = 'FDA Class 1 registered portable and wireless otoscope for high resolution images and videos.';
    const features = [
        {
            imgsrc: icon1,
            title: 'Visualize and record',
            description: 'Capture high resolution images and videos for the patient chart'
        },
        {
            imgsrc: icon2,
            title: 'Build trust',
            description: 'Share symptoms with patients and caregivers'
        },
        {
            imgsrc: icon3,
            title: 'Medical training',
            description: 'Educate students and fellows for case study'
        },
        {
            imgsrc: icon4,
            title: 'Use as you-go',
            description: 'Fits in your pocket without interrupting current clnical workflow'
        }
    ];
    return (
        <Box mt="9.2rem">
            <Flex ml="13rem" mb="2rem">
                <Image src={overview} width="60.8rem" height="auto" />
                <Box width="54.5rem" mt="9rem">
                    <Text fontSize="4.8rem" fontWeight="500" lineHeight="5rem" color="black" my="0px" mb="3rem" letterSpacing="0.2rem">
                        {title}
                    </Text>
                    <Text fontSize="2.4rem" fontWeight="500" lineHeight="3.5rem" color="black" my="0px" mb="10rem">{description}</Text>
                    <Flex>
                        <a href="https://remmie-health.myshopify.com/products/remmie-monitor-for-ear-nose-and-throat"
                        target="_blank" rel="noopener noreferrer"
                        >
                            <ButtonSolid text="Pre-Order" bgColor="#12B2B3" marginR="3.6rem" />
                        </a>
                        <Box>
                            <ButtonOutline text="Partner WIth Us" bColor="#12B2B3" />
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Grid mb="11.6rem" templateColumns="repeat(2,auto)" templateRows="repeat(2,auto)" fontSize="1.8rem"
                fontWeight="normal" lineHeight="3.2rem" color="#5A7184" justifyContent="center"
                gap="3.5rem"
            >
                {features.map((item, index) => {
                    return (
                        <Flex className="professonal-features" border="0.1rem solid #E5EAF4" borderRadius="1.6rem" py="2.4rem" pl="2.4rem" pr="4.2rem">
                            <Image src={item.imgsrc} alignSelf="start" mr="1.6rem" />
                            <Box>
                                <Text my="0px" mb="1rem" fontSize="2.4rem" lineHeight="3.2rem" fontWeight="bold" letterSpacing="0.02rem">{item.title}</Text>
                                <Text width="24.8rem">{item.description}</Text>
                            </Box>
                        </Flex>
                    )
                })}
            </Grid>
            <PortabilityClarity />
        </Box>
    )
}


const PortabilityClarity = () => {
    const features = [
        {
            imgSrc: icon5,
            description: '3.7 mm camera diameter disposable specula'
        },
        {
            imgSrc: icon6,
            description: 'video streaming up to 30fps 0.3 MPixel resolution'
        },
        {
            imgSrc: icon7,
            description: '10-90mm DOF, 80 FOV iOS and Android Compatible'
        },
    ]
    return (
        <Box textAlign="center">
            <Text my="0px" fontSize="3.6rem" lineHeight="7.4rem" fontWeight="bold" color="#12B2B3">Portability and Clarity</Text>
            <Text my="0px" fontSize="2.4rem" fontWeight="500" lineHeight="3.6rem" color="#8E8986">
                Simultaneous connectivity to multiple mobile devices
            </Text>
            <Flex justifyContent="center" mt="3.6rem" mb="15.9rem" width="auto">
                {
                    features.map((item, index) => {
                        return (
                            <Box key={index} width="36.5rem" className="sympthoms-item" borderTop="0.2rem solid #12B2B3" borderRight={index !== 2 ? "0.1rem solid #979797" : ""}
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
export default Overview;