import { ChakraProps } from "@chakra-ui/react";
import { Text, Flex } from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  className?: string;
  primary?: React.ReactNode;
  userName?: React.ReactNode;
  dob?: React.ReactNode;
  userDOB?: React.ReactNode;
  assignment?: React.ReactNode;
  userAssignmentLocation?: React.ReactNode;
}

export default function UserProfile({
  primary = "Primary",
  userName = "John Smith",
  dob = "DOB",
  userDOB = "12/05/1991",
  assignment = "Assignment",
  userAssignmentLocation = "Fort Belvoir",
  ...props
}: Props) {
  return (
    <Flex {...props} flex={1} alignItems="center" alignSelf="stretch">
      <Flex gap="2px" flex={1} flexDirection="column" alignItems="flex-start">
        <Text fontSize="14px">{primary}</Text>
        <Text color="gray.500" fontSize="14px">
          {userName}
        </Text>
      </Flex>
      <Flex gap="2px" flexDirection="column" alignItems="flex-start">
        <Text fontSize="14px">{dob}</Text>
        <Text color="gray.500" fontSize="14px">
          {userDOB}
        </Text>
      </Flex>
      <Flex flexDirection="column" alignItems="flex-end">
        <Text fontSize="14px">{assignment}</Text>
        <Text color="gray.500" fontSize="14px">
          {userAssignmentLocation}
        </Text>
      </Flex>
    </Flex>
  );
}
