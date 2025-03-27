import { ChakraProps } from "@chakra-ui/react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  className?: string;
  initialLetter?: React.ReactNode;
  painDescription?: React.ReactNode;
}

export default function AbdominalPainInfoRow({
  initialLetter = "A",
  painDescription = "Abdominal Pain - Upper",
  ...props
}: Props) {
  return (
    <Flex {...props} flex={1} justifyContent="center" alignItems="center" alignSelf="stretch">
      <Heading as="h6" color="white.a700" fontSize="12.15px" bg="blue.200" w="18px" h="18px" p="2px">
        {initialLetter}
      </Heading>
      <Flex bg="gray.200_02" flex={1} justifyContent="space-between" alignItems="center" gap="20px" px="10px">
        <Heading as="h6" fontSize="12.15px">
          {painDescription}
        </Heading>
        <Box h="1px" bg="blue_gray.700" w="12px" />
      </Flex>
    </Flex>
  );
}
