import React from 'react';
import Swiper from 'react-id-swiper';
import quote from '../../static/img/home-people-quote.svg';
import member1 from '../../static/img/profile-img.png';
// import member2 from '../../static/img/member-2.png';
// import member3 from '../../static/img/member-3.png';
// import linkedin from '../../static/img/Linkedin2.png';
import {
    Box,
    Flex,
    Image,
    Text
} from '@chakra-ui/core';

const PeopleSay = () => {
    const params = {
        // loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
          },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    }
    const members = [
        {
            id: 1,
            figure: member1,
            job: "Managing Director Kuva Koffie",
            name: "Luis Calvillo",
            words: '“There is high incentive for accountable care organizations, especially in a closed healthcare-payer system like Kaiser Permanente, to save time and costs from in-person visits”',
        },
        // {
        //     id: 2,
        //     figure: member1,
        //     job: "Managing Director Kuva Koffie",
        //     name: "Luis Calvillo",
        //     words: '“There is high incentive for accountable care organizations, especially in a closed healthcare-payer system like Kaiser Permanente, to save time and costs from in-person visits”',
        // },
        // {
        //     id: 3,
        //     figure: member1,
        //     job: "Managing Director Kuva Koffie",
        //     name: "Luis Calvillo",
        //     words: '“There is high incentive for accountable care organizations, especially in a closed healthcare-payer system like Kaiser Permanente, to save time and costs from in-person visits”',
        // },
        // {
        //     id: 4,
        //     figure: member1,
        //     job: "Managing Director Kuva Koffie",
        //     name: "Luis Calvillo",
        //     words: '“There is high incentive for accountable care organizations, especially in a closed healthcare-payer system like Kaiser Permanente, to save time and costs from in-person visits”',
        // },

    ]
    return (
        <Box width="100%" height="50rem" mb="15.2rem" bg="#FFF1E5">
            <Image src={quote} my="5rem" ml="19.8rem" />
            <Box width="100rem" ml="19.8rem" pl="10rem">
                <Swiper {...params}>
                    {
                        members.map((people, index) => {
                            return (
                                <Box key={index} width="93rem">
                                    <Box>
                                        <Text width="100%" my="0px" mb="5.5rem" fontSize="2.4rem" fontWeight="500" lineHeight="3.5rem" color="#183B56">{people.words}</Text>
                                        <Flex>
                                            <Image src={member1} width="6.25rem" height="auto"/>
                                            <Box ml="1rem" mr="30rem">
                                                <Text my="0px" fontSize="2.4rem" lineHeight="3.5rem" fontWeight="500" color="#12B2B3">{people.name}</Text>
                                                <Text my="0px" fontSize="1.8rem" lineHeight="2.5rem" fontWeight="normal" color="#183B56">{people.job}</Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Swiper>
            </Box>
        </Box >
    )
};

export default PeopleSay;
