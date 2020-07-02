import React, { useEffect } from 'react';
// import Banner from '../Common/CovidBanner.js';
import Overview from './Overview.js';
import Usage from './Usage.js';
import Technology from './Technology.js';
import InfectionMeetRemmie from './InfectionMeetRemmie.js';
import OurStory from './OurStory.js';
import Partner from './Partner.js';
import PeopleSay from './PeopleSay.js';
import ParentsSay from './ParentsSay.js';
import JoinOur from './JoinOur.js';
import './index.css';
import {
    Flex,
} from '@chakra-ui/core';
const Home = () => {
    useEffect(() => {
        let target = document.getElementById('home');
        if (target) {
            target.scrollIntoView();
        }
    })
    return (
        <Flex flexDirection="column" id="home">
            {/* <Banner /> */}
            <Overview />
            <Usage />
            <Technology />
            <InfectionMeetRemmie />
            <OurStory />
            <Partner />
            <PeopleSay />
            <ParentsSay />
            <JoinOur />
        </Flex>
    )
}

export default Home;