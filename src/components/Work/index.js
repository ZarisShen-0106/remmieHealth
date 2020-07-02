import React, { useEffect } from 'react';
import {
    Flex
} from '@chakra-ui/core'
import Overview from './overview.js';
import Contact from '../Common/Contact.js';
import SymptomsAndFeatures from './SympthomsFeatures.js';
import HowItWorks from './HowItWorks.js';
import Faq from './Faq.js';
const Work = () => {
    useEffect(() => {
        let target = document.getElementById('work');
        if (target) {
            target.scrollIntoView();
        }
    })
    return (
        <Flex flexDirection="column" id="work">
            <Overview />
            <SymptomsAndFeatures />
            <HowItWorks />
            <Faq />
            <Contact />
        </Flex>
    )
}

export default Work;