import React,{useEffect} from 'react';
import Overview from './Overview.js';
import Team from './Team.js';
import Contact from '../Common/Contact.js';
import {
    Flex
} from '@chakra-ui/core';
import './index.css';
const About = () => {
    useEffect(() => {
        let target = document.getElementById('about');
        if (target) {
            target.scrollIntoView();
        }
    })
    return (
        <Flex flexDirection="column" id="about">
            <Overview />
            <Team />
            <Contact />
        </Flex>
    )
}

export default About;