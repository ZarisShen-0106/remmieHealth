import React from 'react';
import {
    Text,
    Box,
    Flex,
    Grid,
    Image
} from '@chakra-ui/core';
import { ButtonSolid, ButtonOutline } from '../Common/Button';
import icon from '../../static/img/SampleDeviceCombo.png';
import './index.css';
const Overview = () => {
    return (
        <Flex className="overview-container" mt="9.2rem" mb="15.2rem" flexDirection="column" textAlign="center" alignItems="center">
            <Text mb="1.9rem" fontSize="3.6rem" fontWeight="bold" lineHeight="4.8rem" letterSpacing="0.02rem" color="#062721">
                Real-Time Monitor and Connection
            </Text>
            <Text width="80rem" mb="3.4rem" fontSize="1.8rem" lineHeight="3.2rem" color="#062721">
                The first monitor for parents to connect with Professionals about ear-nose-throat symptoms safely at home
            </Text>
            <Flex mb="3.4rem">
                <a href="https://remmie-health.myshopify.com/products/remmie-monitor-for-ear-nose-and-throat"
                    target="_blank" rel="noopener noreferrer"
                >
                    <ButtonSolid text="Pre-order Now"/>
                </a>
                {/* <Box>
                    <ButtonOutline text="Crowfund Us!" />
                </Box> */}
            </Flex>
            <Grid mb="5rem" templateColumns="28rem auto 28rem" templateRows="repeat(2,auto)" fontSize="2rem" fontWeight="bold" lineHeight="3rem" color="#062721">
                <Box textAlign="right">
                    <Text mt="5rem">
                        Easy to visualize
                    </Text>
                    <Text fontWeight="500">
                        Real time symptom visualization of ear, nose, and throat
                    </Text>
                </Box>
                <Image src={icon} className="overview-grid" width="39.2rem" height="auto" mx="4rem" />
                <Box textAlign="left">
                    <Text mt="5rem">
                        Easy to visualize
                    </Text>
                    <Text fontWeight="500">
                        Real time symptom visualization of ear, nose, and throat
                    </Text>
                </Box>
                <Box textAlign="right">
                    <Text mt="5rem">
                        Easy to visualize
                    </Text>
                    <Text fontWeight="500">
                        Real time symptom visualization of ear, nose, and throat
                    </Text>
                </Box>
                <Box textAlign="left">
                    <Text mt="5rem">
                        Easy to visualize
                    </Text>
                    <Text fontWeight="500">
                        Real time symptom visualization of ear, nose, and throat
                    </Text>
                </Box>
            </Grid>
        </Flex>
    )
}

export default Overview;