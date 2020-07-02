import React from 'react';
import {
    Text,
    Box,
    Flex,
    Image,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { ButtonSolid } from '../Common/Button';
import Icon1 from '../../static/img/home-infection1.svg';
import Icon2 from '../../static/img/home-infection2.svg';
import Icon3 from '../../static/img/home-infection3.svg';
import App from '../../static/img/home-app.svg';


const InfectionMeetRemmie = () => {
    return (
        <Flex flexDirection="column" ml="13rem">
            <Infection />
            <MeetOur />
        </Flex>

    )
}

const Infection = () => {
    const title = 'Is your child suffering from an ear-nose-throat infection?';
    const problems = [
        {
            imgSrc: Icon1,
            description: 'Percentage of kids who develop an ear infection before the age of 3'
        },
        {
            imgSrc: Icon2,
            description: 'Ear infections are the most common reason for a sick child visit'
        },
        {
            imgSrc: Icon3,
            description: '20-30% of children experience 6 ear infections before age 7.'
        }
    ]
    return (
        <Box mb="19.4rem">
            <Text fontSize="3.6rem" fontWeight="bold" lineHeight="5rem" color="orange" my="0px">
                {title}
            </Text>
            <Flex mr="12.6rem" justifyContent="space-between">
                {
                    problems.map((item, index) => {
                        return (
                            <Flex key={index} flexDirection="column" alignItems="center" width="30rem" mt="4.4rem" justifyContent="center" border="0.2rem solid #ed7e31" borderRadius="1.6rem">
                                <Image src={item.imgSrc} width="12.4rem" height="12.4rem" mt="8rem" />
                                <Text width="19rem" mb="8rem" fontSize="1.6rem" fontWeight="500" lineHeight="2.5rem" textAlign="center">
                                    {item.description}
                                </Text>
                            </Flex>
                        )
                    })
                }
            </Flex>
        </Box>
    )
}
const MeetOur = () => {
    const title = 'Meet Remmie  Monitor & App';
    const subTitle = 'Knowing is the first step to healing.';
    return (
        <Box>
            <Text fontSize="3.6rem" fontWeight="bold" lineHeight="5rem" color="orange" my="0px" >
                {title}
            </Text>
            <Flex flexDirection="column" mr="12.6rem" mt="3.3rem" mb="15rem" alignItems="center" textAlign="center" fontWeight="500">
                <Image src={App} width="77.34rem" height="auto" mb="6.2rem" />
                <Text fontSize="2.4rem" lineHeight="3.5rem" color="#F2B829" mt="0px">
                    {subTitle}
                </Text>
                <Text fontSize="2rem" lineHeight="3rem" color="#8E8986" width="106rem" my="0px" mb="5rem" className="description-indent">
                    Remmie is the first FDA-registered ear-nose-throat monitor designed especially for parents!<br />
                    Our telemedicine-enabling app will provide real-time tracking and monitoring.
                    No more waiting for an appointment to find out if your child has (or doesn't have) an ENT infection.
                </Text>
                <Link to="about">
                    <ButtonSolid text="Learn More" />
                </Link>
            </Flex>
        </Box>
    )

}

export default InfectionMeetRemmie;