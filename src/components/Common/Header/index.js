import React from 'react';
import { Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Box,
    Flex,
    Text,
    Button,
    Image
} from "@chakra-ui/core";
// import logo from '../../../static/img/logo.png';
import logo from '../../../static/img/Remmie-Logo.png'
import './header.css';
const Header = () => {
    const route = [
        { path: "/", routerName: "Home" },
        { path: "/work", routerName: "How It Works" },
        { path: "/about", routerName: "About" },
        { path: "/physicians", routerName: "For Professionals" },
    ]
    return (
        <header id="header">
            <Box>
                <Flex align="center" height="11rem" justifyContent="space-around">
                    {/* <Flex align="center">
                        <img className="logo" src={logo} alt="logo" />
                        <Text color="orange" fontSize="xl" mt="2.6rem" mb="3.4trm" ml="0.9rem">Remmie Health</Text>
                    </Flex> */}
                    <Link to="/"><Image src={logo} height="5rem"/></Link>
                    <Breadcrumb addSeparator={false} ml="15.6rem">
                        {
                            route.map((item, index) => {
                                return (
                                    <BreadcrumbItem mr="5.6rem" key={index + item.path}>
                                        <BreadcrumbLink as={Link} to={item.path}>
                                            <Text fontSize="2rem" fontWeight={index !== 3 ? "500" : "bold"} lineHeight="3rem" color={index === 3 && "#12B2B3"}>{item.routerName}</Text>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>)
                            })
                        }
                        <BreadcrumbItem>
                            <BreadcrumbLink href="https://remmie-health.myshopify.com/products/remmie-monitor-for-ear-nose-and-throat"
                            target="_blank" 
                            ><ButtonSolid text="Pre-Order"/></BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>
            </Box>
        </header>
    )
}

const ButtonSolid = (props) => {
    return (
        <Button px="1.4rem" py="0.7rem" bg="orange" variant="solid" height="auto" width="auto" borderWidth="0px" cursor="pointer"  borderRadius="0.4rem">
            <Text color="white" my="0rem" lineHeight="2.8rem">
                {props.text}
            </Text>
        </Button>

    )
}

export default Header;