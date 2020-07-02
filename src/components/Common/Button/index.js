import React from 'react';
import {
    Button,
    Text
} from "@chakra-ui/core";
export const ButtonSolid = (props) => {
    return (
        <Button bg={props.bgColor || "orange"} variant="solid" height="auto" width="22.5rem" borderWidth="0px" cursor="pointer" mr={props.marginR} borderRadius="0.4rem">
            <Text color="white" my="1.4rem" lineHeight="2.8rem">
                {props.text}
            </Text>
        </Button>

    )
}

export const ButtonOutline = (props) => {
    return (
        <Button variant="solid" height="auto" width="22.5rem" borderColor={props.bColor || "orange"} cursor="pointer" borderWidth="0.1rem" bg="white" borderRadius="0.4rem">
            <Text color={props.bColor || "orange"} my="1.4rem" lineHeight="2.8rem">
                {props.text}
            </Text>
        </Button>
    )
}

