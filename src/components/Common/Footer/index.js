import React from 'react';
import {
    Text,
    Box,
    Flex,
    Image,
    Link
} from '@chakra-ui/core';
import appStore from '../../../static/img/footer-appstore.svg';
import googlePlay from '../../../static/img/footer-googleplay.svg';
import twittter from '../../../static/img/footer-twitter.svg';
import ins from '../../../static/img/footer-ins.svg';
import facebook from '../../../static/img/footer-facebook.svg';


const Footer = () => {
    return (
        <Box bg="footerbg" color="#E0E0E0" px="5rem" pt="2.8rem">
            <Flex justifyContent="space-between" alignItems="start" fontSize="1.6rem" lineHeight="3rem">
                <Text my="0px" mr="1rem" pr="1rem" lineHeight="3rem">Remmie is FDA Class 1 listed</Text>
                <Flex>
                    <Text my="0px" mr="1rem" pr="1rem" height="3rem" borderRight="0.2rem solid white">Download our app at </Text>
                    <Flex flexDirection="column">
                        <Image src={appStore} width="12rem" mb="1rem" />
                        <Image src={googlePlay} width="12rem" />
                    </Flex>
                </Flex>
                <Flex>
                    <Text my="0px" mr="1rem" pr="1rem" height="3rem" borderRight="0.2rem solid white">Contact Us</Text>
                    <Flex flexDirection="column" alignItems="start" fontSize="1.2rem" lineHeight="3rem">
                        <Text my="0px" >contact@remmiehealth.com</Text>
                        <Text my="0px">(805) 338-8724</Text>
                    </Flex>
                </Flex>

                <Flex>
                    <Text my="0px" mr="1rem" pr="1rem" height="3rem" borderRight="0.2rem solid white">Follow Us</Text>
                    <a href="https://www.linkedin.com/company/mivuehealth" target="_blank" rel="noopener noreferrer">
                        <Image src={twittter} mr="3.2rem" width="3.6rem" height="auto"/>
                    </a>
                    <a href="https://www.linkedin.com/company/mivuehealth" target="_blank" rel="noopener noreferrer">
                        <Image src={ins} mr="3.2rem" width="3.6rem" height="auto"/>
                    </a>
                    <a href="https://www.facebook.com/remmiehealth/" target="_blank" rel="noopener noreferrer">
                        <Image src={facebook} mr="3.2rem" width="3.6rem" height="auto"/>
                    </a>

                </Flex>
            </Flex>
            <Flex fontSize="1.2rem" lineHeight="3rem" justifyContent="space-between">
                <Text m="0px"  mb="1rem">@ 2020 Remmie Health Inc.</Text>
                <Text m="0px" mr="3.2rem"><span className="policy"><Link to="privacy">Privacy Policy</Link></span><span className="term"><Link to="term-of-use">Term of use</Link></span></Text>
            </Flex>
        </Box >

    )
}

export default Footer;