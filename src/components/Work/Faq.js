import React from 'react';
import {
    Text,
    Heading,
    Box,
    Flex,
    Accordion,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    AccordionItem
} from '@chakra-ui/core';
import Icon1 from '../../static/img/work-faq.svg';
import { AiOutlinePlus } from 'react-icons/ai';
const Faq = () => {
    const usageItem = [
        {
            title: 'Is Remmie FDA approved?',
            description: 'Remmie is FDA Class 1 registered and listed, medical-graded product.',
        },
        {
            title: 'Can I use Remmie on newborns?',
            description: 'Remmie should not be used on children 18 months or younger.',
        },
        {
            title: 'How do I connect to telemedicine?',
            description: 'There are two ways to connect to telemedicine: 1. Through your insurance or medical benefits affiliated telemedicine provider. 2. Through build-in telemedicine service in Remmie. Please refer to the guide and user instruction if you use your own telemedicine service provider, Remmie could assist you with symptom sharing over telemedicine visits where you could directly share symptoms captured and upload to the service portals. In using Remmie’s built in telemedicine services, you could select “Talk to a doctor” and select _____________. You will have 30 days of included service period for unlimited visits with ____________ and monthly subscription fee will be ___________ after 30 days. Using Remmie’s telemedicine service partner allows real-time visualization in video chat with the health care providers. ',
        },
        {
            title: 'I have a question. Where do I reach customer service?',
            description: 'Please send all customer inquiries to remmie@remmiehealth.com or call (805) 338-8724 to leave a message. A customer service representative will return your email or call within 24 hours.',
        },
        {
            title: 'How much is Remmie?',
            description: 'Remmie is priced at $149 including the monitor and free 30 day telemedicine visit for __________ . ',
        },
        {
            title: 'Is Remmie covered by insurance?',
            description: 'Remmie is currently not covered by insurance',
        },
        

    ]
    return (
        <Box>
            <Text pb="5rem" fontSize="3.6rem" fontWeight="bold" lineHeight="5rem" color="orange" my="0px" textAlign="center">
                Frequently Asked Questions
            </Text>
            <Accordion allowMultiple mx="24rem">
                {
                    usageItem.map((item, index) => {
                        return (
                            <AccordionItem mb="1.5rem">
                                <AccordionHeader border="none">
                                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                                        <Box textAlign="left">
                                            <Heading my="3.5rem" fontSize="2rem" fontWeight="500" lineHeight="3rem" color="orange">
                                                {item.title}
                                            </Heading>
                                        </Box>
                                        <Box as={AiOutlinePlus} size="2rem" color="orange" mr="3.5rem" />
                                    </Flex>
                                </AccordionHeader>
                                <AccordionPanel pb={4}>
                                    <Text my="0px" fontSize="1.8rem" fontWeight='normal' lineHeight="3.2rem" color="#5A7184">{item.description}</Text>
                                </AccordionPanel>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </Box>
    )
}

export default Faq;