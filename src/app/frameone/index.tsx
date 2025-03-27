"use client";

import { CloseIcon } from "@chakra-ui/icons";
import {
  Image,
  Heading,
  Center,
  Flex,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Input,
  Box,
  Textarea,
  Button,
  Text,
  Container,
} from "@chakra-ui/react";
import React, { Suspense } from "react";
import UserProfile from "../components/UserProfile";
import { SelectBox } from "../components/SelectBox";
import AbdominalPainInfoRow from "../components/AbdominalPainInfoRow";
import CaseDataSection from "./CaseDataSection";
import NursesToolkitSection from "./NursesToolkitSection";
import ProfileHeaderSection from "./ProfileHeaderSection";

const medicalSymptomsList = [
  { initialLetter: "A", painDescription: "Abdominal Pain - Upper" },
  { initialLetter: "A", painDescription: "Abdomen Bloating - Swelling" },
  { initialLetter: "A", painDescription: "Diabetic - Male" },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function FrameOnePage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <Box 
      h={{ md: "1600px", base: "auto" }} 
      bg="white.a700" 
      w="100%" 
      position="relative" 
      alignContent="center"
    >
      <Container
        gap="28px"
        display="flex"
        flex={1}
        flexDirection="column"
        m="auto"
        maxW="1344px"
        w="100%"
        px={{ md: "0px", base: "20px" }}
        mx={{ md: "40px", base: "0px" }}
      >
        <Flex justifyContent="flex-end">
          <Flex
            bg="white.a700"
            boxShadow="xs"
            w={{ md: "90%", base: "100%" }}
            justifyContent="flex-end"
            borderRadius="4px"
            p="12px"
          >
            <Flex
              w="100%"
              justifyContent="flex-end"
              alignItems="flex-start"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Flex gap="6px" w={{ md: "44%", base: "100%" }} flexDirection="column">
                <Flex gap="6px" flexDirection="column">
                  <Flex ml={{ md: "10px", base: "0px" }} justifyContent="center">
                    <Heading as="h1" color="teal.400_01" fontWeight={400} fontSize="18px">
                      TK0922730A2
                    </Heading>
                    <Flex flex={1} justifyContent="flex-end" flexWrap="wrap">
                      <Heading fontWeight={400} fontSize="16px">Created April 13, 2025</Heading>
                      <Heading as="h3" fontWeight={400} fontSize="16px">
                        04:45 PM
                      </Heading>
                    </Flex>
                  </Flex>
                  <Flex
                    bgGradient="linear-gradient(90deg, #7c96d3,#389aad)"
                    alignItems="flex-start"
                    px="12px"
                    py="16px"
                    flexDirection={{ base: "column", sm: "row" }}
                  >
                    <Flex gap="24px" flex={1} alignItems="center" px="8px" alignSelf={{ base: "stretch", sm: "auto" }}>
                      <Heading
                        size="headingmd"
                        as="h4"
                        h="64px"
                        color="gray.700"
                        bg="blue_gray.100"
                        w="64px"
                        justifyContent="center"
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        borderRadius="32px"
                        fontSize="18px"
                      >
                        JB
                      </Heading>
                      <Flex flex={1} flexDirection="column" alignItems="flex-start">
                        <Heading size="headingxl" as="h5" color="white.a700" fontSize="18px">
                          Jonathan Banks
                        </Heading>
                        <Heading size="textmd" as="h6" color="white.a700" fontSize="14px">
                          773-832-9281
                        </Heading>
                      </Flex>
                    </Flex>
                    <Flex
                      gap="10px"
                      alignSelf="center"
                      w={{ base: "100%", sm: "40%" }}
                      flexDirection="column"
                      alignItems="flex-end"
                    >
                      <Flex
                        gap="12px"
                        bg="white.a700"
                        w={{ md: "50%", base: "100%" }}
                        alignItems="center"
                        px="12px"
                        borderRadius="4px"
                      >
                        <Image src="images/img_sms_svgrepo_com.svg" alt="Smssvgrepocom" h="14px" />
                        <Text fontSize="12px">SMS</Text>
                      </Flex>
                      <Flex
                        gap="12px"
                        bg="white.a700"
                        w={{ md: "50%", base: "100%" }}
                        alignItems="center"
                        px="12px"
                        borderRadius="4px"
                      >
                        <Flex alignSelf="flex-end" flexDirection="column">
                          <Image src="images/img_lock.svg" alt="Lock" h="10px" />
                        </Flex>
                        <Text fontSize="12px">Email</Text>
                      </Flex>
                      <Flex gap="12px" bg="white.a700" w={{ md: "50%", base: "100%" }} px="12px" borderRadius="4px">
                        <Image src="images/img_talk_svgrepo_com.svg" alt="Talksvgrepo" h="16px" />
                        <Text fontSize="12px">Chat</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Box mx={{ md: "10px", base: "0px" }}>
                  <Flex flexDirection="column" alignItems="flex-start">
                    <Flex alignSelf="stretch" justifyContent="space-between" alignItems="center" gap="24px">
                      <Text fontSize="12px" fontWeight={500} alignSelf="flex-end">
                        Patient Information
                      </Text>
                      <Flex
                        gap="12px"
                        borderColor="gray.700"
                        borderWidth="1px"
                        borderStyle="solid"
                        alignItems="center"
                        borderRadius="6px"
                        p="4px"
                      >
                        <Image src="images/img_patient_profile.svg" alt="Patientprofile" h="14px" />
                        <Text fontSize="12px" alignSelf="flex-end">
                          Patient Look Up
                        </Text>
                      </Flex>
                    </Flex>
                    <Text mt="12px" fontSize="12px" fontWeight={500}>
                      Full Name: Jonathan Banks
                    </Text>
                    <Flex gap="52px" alignSelf="stretch" flexWrap="wrap">
                      <Text fontSize="12px" fontWeight={500}>
                        DOB: 02/27/1973
                      </Text>
                      <Text fontSize="12px" fontWeight={500} alignSelf="flex-end">
                        Age: 52
                      </Text>
                    </Flex>
                    <Text fontSize="12px" fontWeight={500}>
                      Address: 123 Main St, Fort Belvoir, Virginia, USA
                    </Text>
                    <Text fontSize="12px" fontWeight={500}>
                      Military Relationship: Self
                    </Text>
                    <Flex gap="10px" alignSelf="stretch" alignItems="center">
                      <Text fontSize="12px" fontWeight={500}>
                        DOD ID: ***********
                      </Text>
                      <Image src="images/img_eye.svg" alt="Eye" h="14px" />
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
              <Box
                h={{ md: "300px", base: "auto" }}
                alignSelf={{ md: "center", base: "stretch" }}
                flex={{ md: 1, base: "unset" }}
                position="relative"
                w={{ md: "auto", base: "100%" }}
              >
                <Box ml={{ md: "20px", base: "0px" }} flex={1}>
                  <Flex zIndex={1} position="relative" alignItems="flex-start">
                    <Flex gap="4px" alignSelf="center" w="22%" flexDirection="column" alignItems="flex-start">
                      <Heading size="headingxs" as="h6" ml={{ md: "30px", base: "0px" }} fontSize="12px">
                        DEERs
                      </Heading>
                      <Box h="4px" bg="black.900" w="62%" />
                    </Flex>
                    <Text fontSize="12px">Medical History</Text>
                  </Flex>
                  <Box h="1px" mr={{ md: "28px", base: "0px" }} bg="blue_gray.100" />
                  <Flex mt="14px" gap="32px" alignItems="flex-start" flexDirection={{ md: "row", base: "column" }}>
                    <Flex gap="12px" alignSelf={{ md: "center", base: "stretch" }} flex={1} flexDirection="column">
                      <Flex gap="12px" flexDirection="column">
                        <UserProfile mr={{ md: "56px", base: "0px" }} />
                        <UserProfile
                          primary="Restriction"
                          userName="N/A"
                          dob="DOD ID"
                          userDOB="N/A"
                          assignment="Beneficiary First Name"
                          userAssignmentLocation="John"
                        />
                      </Flex>
                      <Flex justifyContent="space-between" gap="24px">
                        <Flex gap="10px" w="26%" flexDirection="column">
                          <Box>
                            <Flex gap="4px" flexDirection="column" alignItems="flex-start">
                              <Text fontSize="12px">Dependants</Text>
                              <Text color="gray.500" fontSize="12px" lineHeight="14px">
                                <>
                                  Mary Smith (Spouse),
                                  <br />
                                  Liam Smith (Child)
                                </>
                              </Text>
                            </Flex>
                            <Flex gap="6px" flexDirection="column" alignItems="flex-start">
                              <Text fontSize="12px">Branch Of Service</Text>
                              <Text color="gray.500" fontSize="12px">
                                Army
                              </Text>
                            </Flex>
                          </Box>
                          <Flex gap="4px" flexDirection="column" alignItems="flex-start">
                            <Text fontSize="12px">Status</Text>
                            <Text color="gray.500" fontSize="12px">
                              Active Duty
                            </Text>
                          </Flex>
                        </Flex>
                        <Flex gap="12px" w="64%" flexDirection="column">
                          <Flex justifyContent="space-between" gap="24px">
                            <Flex gap="4px" flex={1} flexDirection="column" alignItems="flex-start">
                              <Text fontSize="12px">DBN</Text>
                              <Text color="gray.500" fontSize="12px">
                                3427456723
                              </Text>
                            </Flex>
                            <Flex gap="4px" flexDirection="column" alignItems="flex-start">
                              <Text fontSize="12px">Beneficiary Last Name</Text>
                              <Text color="gray.500" fontSize="12px">
                                Smith
                              </Text>
                            </Flex>
                          </Flex>
                          <Flex justifyContent="center" alignItems="flex-start">
                            <Box alignSelf="center" flex={1}>
                              <Flex gap="4px" flexDirection="column" alignItems="flex-start">
                                <Text fontSize="12px">Benefits Type</Text>
                                <Text
                                  color="gray.500"
                                  fontSize="12px"
                                  w={{ md: "44%", base: "100%" }}
                                  lineHeight="14px"
                                >
                                  TRICARE Prime
                                </Text>
                              </Flex>
                              <Flex gap="6px" flexDirection="column" alignItems="flex-start">
                                <Text fontSize="12px">Enrollment Location</Text>
                                <Text color="gray.500" fontSize="12px">
                                  Virginia
                                </Text>
                              </Flex>
                            </Box>
                            <Flex gap="4px" flexDirection="column" alignItems="flex-start">
                              <Text fontSize="12px">Middle Initial</Text>
                              <Text color="gray.500" fontSize="12px">
                                A
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex gap="12px" w={{ md: "36%", base: "100%" }} flexDirection="column">
                      <Flex flexDirection="column" alignItems="flex-start">
                        <Text fontSize="12px">Category Code</Text>
                        <Text color="gray.500" fontSize="12px">
                          33
                        </Text>
                      </Flex>
                      <Flex gap="4px" flexDirection="column" alignItems="flex-start">
                        <Text fontSize="12px">PCM Clinic Name</Text>
                        <Text color="gray.500" fontSize="12px">
                          Dumfries Health Center
                        </Text>
                      </Flex>
                      <Flex gap="4px" flexDirection="column" alignItems="flex-start">
                        <Text fontSize="12px">PCM Name</Text>
                        <Text color="gray.500" fontSize="12px">
                          Dr. Selwyn Adams, MD
                        </Text>
                      </Flex>
                      <Flex gap="4px" flexDirection="column" alignItems="flex-start">
                        <Text fontSize="12px">Military Duty Status</Text>
                        <Text color="gray.500" fontSize="12px">
                          Active Duty
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
                <Flex
                  zIndex={2}
                  borderColor="gray.400"
                  borderLeftWidth="1px"
                  borderStyle="solid"
                  flex={1}
                  position="absolute"
                  justifyContent="flex-end"
                  left="0px"
                  bottom="0px"
                  right="0px"
                  top="0px"
                  h="max-content"
                  p="18px"
                  m="auto"
                >
                  <Button 
                    variant="outline" 
                    colorScheme="gray_700" 
                    mt="240px" 
                    minW="150px" 
                    borderRadius="6px"
                    fontSize="14px"
                  >
                    Save to Ticket
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex gap="16px" alignItems="center"  flexDirection={{ md: "row", base: "column" }} ml={4}>
          <Flex
            gap="44px"
            flex={1}
            flexDirection="column"
            alignItems="flex-end"
            alignSelf={{ md: "auto", base: "stretch" }}
          >
            <Flex gap="8px" w={{ md: "86%", base: "100%" }} flexDirection="column" alignItems="flex-start">
              <Heading size="headinglg" fontSize="16px">
                Case Information
              </Heading>
              <Box alignSelf="stretch">
                <Flex justifyContent="flex-end" flexDirection={{ base: "column", sm: "row" }} gap="8px">
                  <Button 
                    fontWeight={500} 
                    borderColor="gray.200" 
                    borderWidth="1px" 
                    borderStyle="solid" 
                    minW="76px"
                    fontSize="14px"
                  >
                    Split
                  </Button>
                  <Button 
                    fontWeight={500} 
                    borderColor="gray.200" 
                    borderWidth="1px" 
                    borderStyle="solid" 
                    minW="74px"
                    fontSize="14px"
                  >
                    Clones
                  </Button>
                  <Button 
                    fontWeight={500} 
                    borderColor="gray.200" 
                    borderWidth="1px" 
                    borderStyle="solid" 
                    minW="76px"
                    fontSize="14px"
                  >
                    Follow Up
                  </Button>
                  <Button 
                    fontWeight={500} 
                    borderColor="gray.200" 
                    borderWidth="1px" 
                    borderStyle="solid" 
                    minW="74px"
                    fontSize="14px"
                  >
                    Esclate
                  </Button>
                  <Button 
                    fontWeight={500} 
                    borderColor="gray.200" 
                    borderWidth="1px" 
                    borderStyle="solid" 
                    minW="76px"
                    fontSize="14px"
                  >
                    Transform
                  </Button>
                  <Button 
                    fontWeight={500} 
                    borderColor="gray.200" 
                    borderWidth="1px" 
                    borderStyle="solid" 
                    minW="74px"
                    fontSize="14px"
                  >
                    Close
                  </Button>
                </Flex>
                <Flex
                  borderTopLeftRadius="8px"
                  borderBottomLeftRadius="8px"
                  borderBottomRightRadius="8px"
                  gap="16px"
                  bg="white.a700"
                  flexDirection="column"
                  px="12px"
                  py="14px"
                >
                  <Flex mr={{ md: "6px", base: "0px" }} gap="10px" flexDirection="column">
                    <Flex gap="10px" alignItems="center">
                      <Heading as="h3" fontSize="14px" alignSelf="flex-end">
                        Case Status:
                      </Heading>
                      <SelectBox
                        shape="square"
                        indicator={<Image src="images/img_favorite.svg" alt="Favorite" w="12px" h="12px" />}
                        name="favorite"
                        placeholder={`Active`}
                        options={dropDownOptions}
                        style={{ fontWeight: 500, gap: "18px", w: "18%", fontSize: "14px" }}
                      />
                    </Flex>
                    <Box h="1px" bg="blue_gray.400" />
                  </Flex>
                  <Flex ml="8px" mr="14px" gap="32px" flexDirection="column" mx={{ md: 0, base: "0px" }}>
                    <Flex gap="24px" flexDirection="column">
                      <Flex gap="48px" flexDirection={{ md: "row", base: "column" }}>
                        <Flex w="100%" flexDirection="column" alignItems="flex-start">
                          <Heading as="h4" fontSize="14px">
                            Case Number:
                          </Heading>
                          <Input
                            placeholder={`039A830D0291`}
                            mr={{ md: "12px", base: "0px" }}
                            fontWeight={500}
                            alignSelf="stretch"
                            fontSize="14px"
                          />
                        </Flex>
                        <Flex w="100%" flexDirection="column" alignItems="flex-start">
                          <Heading as="h5" fontSize="14px">
                            Case Open:
                          </Heading>
                          <Input
                            placeholder={`03-12-2025`}
                            type="undefined"
                            mr={{ md: "12px", base: "0px" }}
                            fontWeight={500}
                            alignSelf="stretch"
                            fontSize="14px"
                          />
                        </Flex>
                        <Flex w="100%" flexDirection="column" alignItems="flex-start">
                          <Heading as="h6" fontSize="14px">
                            Best Callback Number
                          </Heading>
                          <Input
                            placeholder={`773-832-9281`}
                            mr={{ md: "12px", base: "0px" }}
                            fontWeight={500}
                            alignSelf="stretch"
                            fontSize="14px"
                          />
                        </Flex>
                        <Flex w="100%" flexDirection="column" alignItems="flex-start">
                          <Heading as="h6" fontSize="14px">
                            Case Owner
                          </Heading>
                          <Input 
                            placeholder={`Todd Landry`} 
                            fontWeight={500} 
                            alignSelf="stretch" 
                            fontSize="14px" 
                          />
                        </Flex>
                      </Flex>
                      <Flex alignItems="center" flexDirection={{ base: "column", sm: "row" }}>
                        <Flex
                          flex={1}
                          flexDirection="column"
                          alignItems="flex-start"
                          alignSelf={{ base: "stretch", sm: "auto" }}
                        >
                          <Heading as="h6" fontSize="14px">
                            Care Coordinate
                          </Heading>
                          <Input 
                            placeholder={`Sarah Martinez`} 
                            fontWeight={500} 
                            w="68%" 
                            fontSize="14px" 
                          />
                        </Flex>
                        <Flex
                          flex={1}
                          flexDirection="column"
                          alignItems="flex-start"
                          alignSelf={{ base: "stretch", sm: "auto" }}
                        >
                          <Heading as="h6" fontSize="14px">
                            Channel
                          </Heading>
                          <Input 
                            placeholder={`-`} 
                            fontWeight={500} 
                            w="68%" 
                            fontSize="14px" 
                          />
                        </Flex>
                        <Flex
                          flex={1}
                          flexDirection="column"
                          alignItems="flex-start"
                          alignSelf={{ base: "stretch", sm: "auto" }}
                        >
                          <Heading as="h6" fontSize="14px">
                            Contact Location
                          </Heading>
                          <Flex
                            bg="gray.200_02"
                            w={{ md: "68%", base: "100%" }}
                            justifyContent="space-between"
                            alignItems="center"
                            gap="24px"
                            px="12px"
                            py="4px"
                          >
                            <Heading as="h6" fontSize="14px">
                              Conus
                            </Heading>
                            <Image src="images/img_favorite.svg" alt="Favorite" h="12px" borderRadius="2px" />
                          </Flex>
                        </Flex>
                        <Flex w={{ base: "100%", sm: "18%" }} flexDirection="column" alignItems="flex-start">
                          <Heading as="h6" fontSize="14px">
                            Contact Location
                          </Heading>
                          <SelectBox
                            shape="square"
                            indicator={<Image src="images/img_favorite.svg" alt="Favorite" w="12px" h="12px" />}
                            name="location"
                            placeholder={`Virginia`}
                            options={dropDownOptions}
                            style={{ fontWeight: 500, gap: "18px", alignSelf: "stretch", fontSize: "14px" }}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex gap="12px" alignItems="center" flexDirection={{ base: "column", sm: "row" }}>
                      <Heading as="h6" fontSize="14px" alignSelf="flex-end">
                        Contact Reason
                      </Heading>
                      <Flex
                        bg="gray.200_02"
                        w={{ base: "100%", sm: "54%" }}
                        justifyContent="space-between"
                        alignItems="center"
                        gap="24px"
                        px="12px"
                        py="4px"
                      >
                        <Heading size="textmd" as="h6" fontSize="14px">
                          Prescription Update Request
                        </Heading>
                        <Image src="images/img_favorite.svg" alt="Favorite" h="12px" borderRadius="2px" />
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex mb="14px" ml="10px" mr="16px" gap="12px" flexDirection="column" mx={{ md: 0, base: "0px" }}>
                    <Flex gap="8px" flexDirection="column" alignItems="flex-start">
                      <Heading as="h6" fontSize="14px">
                        Reason For Call:
                      </Heading>
                      <Box color="black.900" fontWeight={500} borderColor="gray.200_01" alignSelf="stretch" h="1px" />
                    </Flex>
                    <Flex gap="6px" flexDirection="column" alignItems="flex-start">
                      <Heading as="h6" fontSize="14px">
                        Contact Summary:
                      </Heading>
                      <Box borderColor="gray.200_01" alignSelf="stretch" h="1px" />
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
            <Flex alignSelf="stretch" flexDirection="column" alignItems="flex-end">
              <CaseDataSection />
              <Flex
                mt="48px"
                bg="white.a700"
                boxShadow="sm"
                w={{ md: "84%", base: "100%" }}
                justifyContent="center"
                p="6px"
                borderRadius="6px"
              >
                <Flex mb="16px" gap="20px" w="100%" flexDirection="column">
                  <Flex ml={{ md: "8px", base: "0px" }} justifyContent="center" alignItems="center">
                    <Heading size="headinglg" as="h6" fontSize="16px">
                      Medical Notes
                    </Heading>
                    <Flex gap="56px" flex={1} justifyContent="flex-end" alignItems="flex-start">
                      <Flex
                        alignSelf="center"
                        borderColor="gray.400"
                        borderWidth="1px"
                        borderStyle="solid"
                        bg="white.a700"
                        borderRadius="4px"
                        p="4px"
                      >
                        <Image src="images/img_file_svgrepo_com.svg" alt="Filesvgrepo" h="16px" borderRadius="2px" />
                        <Heading as="h6" fontSize="14px">
                          General Medical Notes
                        </Heading>
                      </Flex>
                      <Image src="images/img_arrow_up.svg" alt="Arrowup" h="10px" mt="6px" borderRadius="2px" />
                    </Flex>
                  </Flex>
                  <Flex gap="24px" alignItems="flex-start" flexDirection={{ md: "row", base: "column" }}>
                    <Flex gap="14px" w={{ md: "48%", base: "100%" }} flexDirection="column">
                      <Flex flexDirection="column" alignItems="flex-start">
                        <Heading as="h6" fontSize="14px">
                          Justifications
                        </Heading>
                        <Input
                          size="lg"
                          placeholder={`Sample notes for this section`}
                          fontWeight={500}
                          alignSelf="stretch"
                          fontSize="14px"
                        />
                      </Flex>
                      <Flex flexDirection="column" alignItems="flex-start">
                        <Heading as="h6" fontSize="14px">
                          System Disposition
                        </Heading>
                        <SelectBox
                          shape="square"
                          indicator={<Image src="images/img_favorite.svg" alt="Favorite" w="12px" h="12px" />}
                          name="optionCounter"
                          placeholder={`Option 1`}
                          options={dropDownOptions}
                          style={{ fontWeight: 500, gap: "18px", alignSelf: "stretch", fontSize: "14px" }}
                        />
                      </Flex>
                      <Flex flexDirection="column" alignItems="flex-start">
                        <Heading as="h6" fontSize="14px">
                          Nurse Disposition
                        </Heading>
                        <SelectBox
                          shape="square"
                          indicator={<Image src="images/img_favorite.svg" alt="Favorite" w="12px" h="12px" />}
                          name="optionCounter"
                          placeholder={`Option 1`}
                          options={dropDownOptions}
                          style={{ fontWeight: 500, gap: "18px", alignSelf: "stretch", fontSize: "14px" }}
                        />
                      </Flex>
                    </Flex>
                    <Flex
                      mt="8px"
                      ml={{ md: "24px", base: "0px" }}
                      gap="8px"
                      alignSelf={{ md: "flex-end", base: "stretch" }}
                      borderColor="gray.200_02"
                      borderWidth="1px"
                      borderStyle="solid"
                      bg="white.a700"
                      flex={1}
                      flexDirection="column"
                      px="10px"
                      py="12px"
                      borderRadius="6px"
                    >
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {medicalSymptomsList.map((d, index) => (
                          <AbdominalPainInfoRow {...d} key={"lista" + index} />
                        ))}
                      </Suspense>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                mt="28px"
                borderColor="gray.400"
                borderWidth="1px"
                borderStyle="solid"
                bg="white.a700"
                w={{ md: "86%", base: "100%" }}
                justifyContent="space-between"
                alignItems="flex-start"
                gap="24px"
                px="24px"
                py="14px"
                borderRadius="4px"
              >
                <Heading size="headinglg" as="h6" fontSize="16px" alignSelf="center">
                  Care Coordinator Notes
                </Heading>
                <Image src="images/img_favorite_gray_600_01.svg" alt="Favorite" h="10px" borderRadius="2px" />
              </Flex>
              <Flex
                mt="28px"
                borderColor="gray.400"
                borderWidth="1px"
                borderStyle="solid"
                bg="white.a700"
                w={{ md: "86%", base: "100%" }}
                justifyContent="space-between"
                alignItems="flex-start"
                gap="24px"
                px="24px"
                py="14px"
                borderRadius="4px"
              >
                <Heading size="headinglg" as="h6" fontSize="16px" alignSelf="center">
                  Contract Records And Files
                </Heading>
                <Image src="images/img_favorite_gray_600_01.svg" alt="Favorite Eleven" h="10px" borderRadius="2px" />
              </Flex>
            </Flex>
          </Flex>
          <Flex gap="18px" w={{ md: "38%", base: "100%" }} flexDirection="column">
            <NursesToolkitSection />
            <ProfileHeaderSection />
          </Flex>
        </Flex>
      </Container>
      <Flex
        zIndex={3}
        flex={1}
        position={{ md: "absolute", base: "relative" }}
        alignItems="flex-start"
        left="0px"
        bottom="0px"
        right="0px"
        top="0px"
        h="max-content"
        m="auto"
        flexDirection={{ md: "row", base: "column" }}
      >
        <Box
          h={{ md: "1600px", base: "auto" }}
          alignSelf="center"
          bgImage="url(/images/img_group_2.png)"
          bgSize="cover"
          bgRepeat="no-repeat"
          w={{ md: "8%", base: "100%" }}
          py={{ md: "80px", base: "24px" }}
          px={{ md: 0, base: "24px" }}
        >
          <Flex mb="1300px" gap="16px" flexDirection="column" alignItems="flex-start">
            <Heading color="white.a700" ml={{ md: "32px", base: "0px" }} fontWeight={400} fontSize="16px">
              Dashboard
            </Heading>
            <Flex
              borderTopLeftRadius="6px"
              borderBottomLeftRadius="6px"
              alignSelf="flex-end"
              bg="white.a700"
              w={{ md: "84%", base: "100%" }}
              px="12px"
              py="8px"
            >
              <Heading as="h3" fontWeight={400} fontSize="16px">
                Tickets
              </Heading>
            </Flex>
            <Heading as="h4" color="white.a700" ml={{ md: "32px", base: "0px" }} fontWeight={400} fontSize="16px">
              Reports
            </Heading>
            <Heading 
              as="h5" 
              color="white.a700" 
              mr={{ md: "12px", base: "0px" }} 
              fontWeight={400} 
              alignSelf="flex-end" 
              fontSize="16px"
            >
              Provider Locator
            </Heading>
            <Heading as="h6" color="white.a700" ml={{ md: "32px", base: "0px" }} fontWeight={400} fontSize="16px">
              Settings
            </Heading>
          </Flex>
        </Box>
        <Flex
          ml={{ md: "-136px", base: "0px" }}
          position="relative"
          bg="gray.900_01"
          flex={1}
          justifyContent="flex-end"
          alignItems="center"
          px={{ md: "10px", base: "24px" }}
          py="12px"
          alignSelf={{ md: "auto", base: "stretch" }}
          flexDirection={{ base: "column", sm: "row" }}
        >
          <InputGroup w={{ base: "100%", sm: "30%" }} size="sm">
            <InputLeftElement>
              <Center w="14px" h="14px">
                <Image src="images/img_search_gray_900.svg" alt="Search" h="14px" w="14px" fit="contain" />
              </Center>
            </InputLeftElement>
            <Input
              colorScheme="white_A700"
              placeholder={`Search`}
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e.target.value)}
              color="black.900"
              fontWeight={700}
              gap="10px"
              borderRadius="4px"
              fontSize="14px"
            />
            <InputRightElement>
              {searchBarValue?.length > 0 ? <CloseIcon onClick={() => setSearchBarValue("")} /> : null}
            </InputRightElement>
          </InputGroup>
          <Flex w={{ base: "100%", sm: "16%" }} justifyContent="flex-end">
            <Flex w="100%" justifyContent="flex-end" alignItems="flex-end">
              <Image src="images/img_chat_square_arrow_svgrepo_com.svg" alt="Chatsquare" h="24px" />
              <Image src="images/img_trophy.svg" alt="Trophy" h="24px" ml="28px" />
              <Image src="images/img_notification_13_svgrepo_com.svg" alt="Notificationthi" h="24px" ml="28px" />
              <Flex alignSelf="center" w="38%" justifyContent="flex-end" alignItems="center">
                <Center h={{ md: "30px", base: "auto" }} bg="white.a700" w="30px" borderRadius="15px">
                  <Heading size="textxl" color="gray.800" fontSize="16px">
                    TL
                  </Heading>
                </Center>
                <Image
                  src="images/img_tick_circle_svgrepo_com.svg"
                  alt="Image"
                  h="12px"
                  mb="6px"
                  ml="-8px"
                  alignSelf="flex-end"
                  position="relative"
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}