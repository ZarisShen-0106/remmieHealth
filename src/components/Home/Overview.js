import React from 'react';
import {
    Text,
    Box,
    Flex,
    Image,
    Heading
} from '@chakra-ui/core';
import { ButtonSolid, ButtonOutline } from '../Common/Button';
import Award1 from '../../static/img/award-1.png';
import Award2 from '../../static/img/award-2.png';
import Supported1 from '../../static/img/supported-1.png';
import Supported2 from '../../static/img/supported-2.png';
import Supported3 from '../../static/img/supported-3.png';
import Supported4 from '../../static/img/supported-4.png';
import overview from '../../static/img/home-overview.png';



const Overview = () => {
    const title = 'Visualize and Connect to Health';
    const awardSupported = [
        {
            title: "Awards",
            imgSrc: [Award1, Award2],
            id: 0
        },
        {
            title: "Supported By",
            imgSrc: [Supported1, Supported2, Supported3, Supported4],
            id: 1
        }

    ]
    return (
        <Box mt="9.2rem">
            <Flex justifyContent="space-between" alignItems="center">
                <Box my="0px" ml="13.2rem" mb="12.6rem" width="55.2rem">
                    <Heading color="orange" py="0px" fontSize="4.8rem" lineHeight="7.4rem" fontWeight="bold">{title}</Heading>
                    <Text fontSize="2.4rem" lineHeight="3.5rem" fontWeight="500" my="3.6rem">
                        The first monitor for parents to <span className="inline-orange-text">connect</span> with <span className="inline-orange-text">Professionals</span>
                     about ear-nose-throat symptoms safely at <span className="inline-orange-text">home</span>
                    </Text>
                    <a href="https://remmie-health.myshopify.com/products/remmie-monitor-for-ear-nose-and-throat"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <ButtonSolid text="Pre-order Now" marginR="3.6rem" />
                    </a>
                    {/* <ButtonOutline text="Crowdfund Us!" /> */}
                </Box>
                <Image src={overview} height="55rem" width="auto" />

            </Flex>
            <Flex mb="24.8rem">
                {
                    awardSupported.map((item, index) => {
                        return (
                            <AwardSupported {...item} key={index} />
                        )
                    })
                }
            </Flex>
        </Box>
    )
}

const AwardSupported = (props) => {
    return (
        <Box ml={props.id === 0 ? "13.2rem" : "3.6rem"} borderRight={props.id === 0 ? "0.2rem solid #12B2B3" : ""} pr="1rem">
            <Text color="orange" fontSize="2.4rem" lineHeight="5rem" fontWeight="500" my="0px">
                {props.title}
            </Text>
            <Flex>
                {
                    props.imgSrc.map((item, index) => {
                        return (
                            <Image src={item} height="7rem" width="auto" mr="2rem" key={index} />
                        )
                    })
                }
            </Flex>
        </Box>
    )
}
export default Overview;