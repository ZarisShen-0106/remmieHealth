import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Image,
} from "@chakra-ui/core";
import { Link } from 'react-router-dom';
import { ButtonSolid, ButtonOutline } from '../Common/Button';
import overview from '../../static/img/about-overview.png'

const Overview = () => {
    const description = [
        'It all started when Jane(the founder)’s son started getting ear infections as soon as pre-school started. After a long year with 4 infections and 1 especially stubborn one that lasted 40 days, Jane decided to do something about it...',
        'We are passionate about empowering parents to evaluate these symptoms at home, and providing telemedicine doctors with a precise view of their patients’ symptoms and improving diagnostic accuracy.'
    ]
    const remmieDescription = [
        'Here at Remmie, we help families play a more active role in their health and transform primary care by putting digital tools into their hands. We use technology to target the #1 reason children go to the doctors office... ear, nose and throat symptoms. ',
        'We are passionate about empowering parents to evaluate these symptoms at home, and providing telemedicine doctors with a precise view of their patients’ symptoms and improving diagnostic accuracy.  We provide a two-part solution: an at-home digital monitor that allows families to visualize ENT (ear, nose, throat) symptoms and an app that tracks symptoms, images, and videos, which can be shared directly with a doctor. '
    ]
    const handleScrollToTeamSection=()=>{
        let teamId=document.getElementById('team');
        if(teamId){
            teamId.scrollIntoView();
        }
    }
    return (
        <>
            <Flex>
                <Box className="about-overview">
                    <Image src={overview} alt="idea"
                        width="60.4rem" height="auto"
                        mt="11.4rem" mr="6.4rem" mb="24.66rem" ml="4.5rem"
                    />
                </Box>
                <Box mt="20rem" ml="7.4rem">
                    <Heading fontSize="4.8rem" lineHeight="1.54">
                        By Parents, <br />
                        For Parents
                    </Heading>
                    {
                        description.map((item, index) => {
                            return (
                                <Text key={index} fontSize="1.6rem" lineHeight="2.0rem" fontWeight="300" width="52.5rem">
                                    {item}
                                </Text>
                            )
                        })
                    }
                    <ButtonSolid text="Contact Us" marginR="3.6rem" />
                    <Link to="/about" onClick={handleScrollToTeamSection}>
                        <ButtonOutline text="Join Our Team" />
                    </Link>
                </Box>
            </Flex>
            <Box mt="14.9rem">
                <Heading color="orange" fontSize="3.6rem" lineHeight="7.4rem" textAlign="center" mt="0px" mb="5.9rem">
                    About Remmie
                </Heading>
                {
                    remmieDescription.map((item, index) => {
                        return (
                            <Text key={index} fontSize="2.2rem" lineHeight="2.7rem" fontWeight="300" mx="21.7rem" my="0px" mb={index === 0 ? "3rem" : "0rem"}>
                                {item}
                            </Text>
                        )
                    })
                }
            </Box>
        </>
    )
}

export default Overview;