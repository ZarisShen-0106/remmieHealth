import React from "react";
import { ButtonSolid } from "../Common/Button";
import { Text, Box, Flex, Image } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import Icon from "../../static/img/home-ourstory.svg";
const OurStory = () => {
  const title = "Our Story";
  const description =
    "It all started when Jane (our founder)'s son started getting ear infections as soon as pre-school started. After a long year with 4 infections and 1 especially stubborn one that lasted 40 days, Jane decided to do something about it... ";
  return (
    <Flex ml="13rem" mb="5.5rem">
      <Box width="60rem">
        <Text
          fontSize="3.6rem"
          fontWeight="bold"
          lineHeight="5rem"
          color="orange"
          my="0px"
          mb="3.6rem"
        >
          {title}
        </Text>
        <Text
          fontSize="2rem"
          lineHeight="3rem"
          color="#8E8986"
          width="60rem"
          my="0px"
          mb="5rem"
        >
          {description}
        </Text>
        <Link to="about">
          <ButtonSolid text="Learn More" />
        </Link>
      </Box>
      <Image src={Icon} width="60rem" height="auto"></Image>
    </Flex>
  );
};

export default OurStory;
