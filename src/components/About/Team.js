import React from 'react';
import {
    Text,
    Box,
    Heading,
    Flex,
    Image,
    Link,
    Grid
} from '@chakra-ui/core';
import linkedIn from '../../static/img/linkedIn.svg';
import proImg1 from '../../static/img/about-team1.png';
import proImg2 from '../../static/img/about-team2.png';
import proImg3 from '../../static/img/about-team3.png';
import proImg4 from '../../static/img/about-team4.png';
import proImg5 from '../../static/img/about-team5.png';


import aboutRocket from '../../static/img/about-rocket.svg';
import { ButtonSolid } from '../Common/Button/index';


const Team = () => {
    const joinUs = {
        imgSrc: aboutRocket,
        title: "JOIN US!",
        decsription: "We are looking for highly-motivated professionals to join our fast-growing team. If you are interested in Remmie and telemedicine, connect and tell us why you'd like to join our team and how you can contribute."
    }
    const teamInfo = [
        {
            imgSrc: proImg1,
            name: "Jane Zhang, Ph.D, MBA ",
            alt: "Jane Zhang's profile image",
            job: "Founder & CEO",
            linkInSrc: "https://www.linkedin.com/in/janeyzhang/",
            intro: "Jane Zhang founded Remmie when her young son suffered from recurring ear infections. Jane has 15 years of experience in healthcare product R&D and operations including in Becton Dickinson and Amgen. She is the an Affiliate Assistant Professor with University of Washington in biomedical diagnostic technologies. Jane has a Ph.D. in Biomedical Engineering from Boston University and MBA from UCLA. "
        },
        {
            imgSrc: proImg2,
            name: "Zhan Wang, M.S.",
            alt: "Jan Wang's profile image",
            job: "Technology",
            linkInSrc: "https://www.linkedin.com/in/zhan-wang-16953734/",
            intro: "Jan Wang has extensive machine learning, big data, software engineering experience. Professional with a spirit of teamwork and leadership. For the past 10 years, he is the data science and product lead in major technology companies such as Groupon and Concur. He has a MS in Computer Science and Computational Linguistics from the University of Utah and Tsinghua University. "
        },
        {
            imgSrc: proImg3,
            name: "Zaris Shen, M.S.",
            alt: "Zaris Shen's profile image",
            job: "Growth & Design",
            linkInSrc: "https://www.linkedin.com/in/henrywumd/",
            intro: "Zaris Shen is a serial entrepreneur and highly experienced in growth marketing for technology and consumer products. She has served technology and healthcare startups when working at Plug and Play Tech Center and Shenzhen Capital Group. She has proven track record of leading successfully campaigns and digital marketing programs in VC-backed early starge startups. She has a Master of Science degree in entreprenuership and a Bachelor degree in Information System from the University of Washington. "
        },
        {
            imgSrc: proImg4,
            name: "Henry Wu, M.D.",
            alt: "Henry Wu's profile image",
            job: "Medical Consultant",
            linkInSrc: "https://www.linkedin.com/in/henrywumd/",
            intro: "Henry Wu, MD, FAAP is a board-certified general pediatrician and medical consultant for Remmie. Dr. Wu earned his bachelor's degree in Neuroscience from USC and his medical degree from the USC Keck School of Medicine. Dr. Wu completed his General Pediatrics internship and residency training at Children's Hospital Los Angeles (CHLA). "
        },
        {
            imgSrc: proImg5,
            name: "Jason Owen, MBA",
            alt: "Jason Owen's profile image",
            job: "Founding Advisor",
            linkInSrc: "https://www.linkedin.com/in/jasonowen/",
            intro: "Jason Owen is an entrepreneurial leader with experience in developing and executing strategies to grow business in new markets and finding value in commodity markets. Having experience with several successful start ups, Mr. Owen founded Amped Wireless, a consumer Wi-Fi networking company in 2010, and led its successful exit in 2016."
        },
    ]
    return (
        <Box mt="14.9rem">
            <Heading  id="team" color="orange" fontSize="3.6rem" lineHeight="7.4rem" textAlign="center" mb="5.9rem" mt="0px">
                Team
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(3,auto)" gap="10rem" mx="16rem" mb="27rem" alignItems="start">
                {
                    teamInfo.map((item, index) => {
                        return (
                            <Person {...item} key={item.name} />
                        )
                    })
                }
                <JoinUs {...joinUs} />
            </Grid>
        </Box>
    )
}

const Person = (props) => {
    return (
        <Flex flexDirection="column" width="50rem" textAlign="center" justify="center">
            <Box textAlign="center">
                <Image rounded="full" src={props.imgSrc} alt={props.alt} borderRadius="50%" width="35.2rem" />
            </Box>
            <Flex mt="2.4rem" mb="0.5rem" align="center" justify="center">
                <Heading my="0px" color="orange" fontSize="2.4rem" lineHeight="3.5rem">{props.name}</Heading>
                <Link href={props.linkInSrc}>
                    <Image src={linkedIn} ml="1rem" width="3.5rem"/>
                </Link>
            </Flex>
            <Text my="0px" fontSize="2.4rem" lineHeight="3.5rem" mb="1rem">
                {props.job}
            </Text>
            <Text width="50rem" fontSize="1.6rem" lineHeight="3rem" fontWeight="500" textAlign="left" my="0px">
                {props.intro}
            </Text>
        </Flex>
    )
}

const JoinUs = (props) => {
    return (
        <Flex flexDirection="column" width="50rem" textAlign="center">
            <Box textAlign="center">
                <Image src={props.imgSrc} alt={props.alt} width="25rem" height="auto" mt="5rem" />
            </Box>
            <Heading mt="4.7rem" fontSize="3.6rem" lineHeight="4rem" fontWeight="bold" color="orange" >{props.title}</Heading>
            <Text color="#4A4E5A" width="50rem" fontSize="2.4rem" lineHeight="3.5rem" fontWeight="bold" textAlign="left" my="0px">
                {props.decsription}
            </Text>
            <Box mt="5.8rem ">
                <ButtonSolid text="Join our team" borderR="0.4rem" />
            </Box>
        </Flex>
    )
}

export default Team;