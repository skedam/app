import { Image, Heading, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { SelectBox } from "../components/SelectBox";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CaseDataSection() {
  return (
    <>
      {/* Case Data Section */}
      <Flex 
        gap="12px" 
        alignSelf="stretch" 
        flexDirection="column" 
        alignItems="flex-start"
      >
        <Heading 
          size="headinglg" 
          as="h6" 
          ml={{ md: "120px", base: "0px" }} 
          fontSize="16px" 
          fontWeight={600}
          color="gray.800"
        >
          Case Data
        </Heading>
        <Flex
          alignSelf="flex-end"
          bg="white.a700"
          boxShadow="md"
          w={{ md: "84%", base: "100%" }}
          justifyContent="center"
          px="16px"
          py="20px"
          borderRadius="8px"
          border="1px solid"
          borderColor="gray.200"
        >
          <Flex 
            mb="16px" 
            gap="36px" 
            w="100%" 
            flexDirection="column"
          >
            <Flex 
              gap="40px" 
              flexDirection={{ md: "row", base: "column" }}
            >
              <Flex 
                w={{ md: "28%", base: "100%" }} 
                flexDirection="column" 
                alignItems="flex-start"
              >
                <Heading 
                  as="h6" 
                  fontSize="14px" 
                  fontWeight={500}
                  color="gray.700"
                  mb="6px"
                >
                  Categorization
                </Heading>
                <Flex 
                  alignSelf="stretch" 
                  flexDirection="column" 
                  alignItems="center"
                >
                  <Heading 
                    size="textmd" 
                    as="h6" 
                    pl="12px" 
                    pr={{ base: "24px", sm: "36px" }} 
                    bg="gray.200_02"
                    py="6px"
                    fontSize="14px"
                    fontWeight={500}
                    w="100%"
                    textAlign="left"
                    borderRadius="4px"
                  >
                    Yes
                  </Heading>
                  <SelectBox
                    shape="square"
                    indicator={<Image src="images/img_favorite.svg" alt="Favorite" w="12px" h="12px" />}
                    name="favorite_five"
                    placeholder={`Asymptomatic`}
                    options={dropDownOptions}
                    style={{ 
                      fontWeight: 500, 
                      gap: "18px", 
                      alignSelf: "stretch", 
                      fontSize: "14px",
                      mt: "8px",
                      borderRadius: "6px",
                      border: "1px solid",
                      borderColor: "gray.300",
                      p: "4px"
                    }}
                  />
                </Flex>
              </Flex>
              <Flex 
                w={{ md: "28%", base: "100%" }} 
                flexDirection="column" 
                alignItems="flex-start"
              >
                <Heading 
                  as="h6" 
                  fontSize="14px" 
                  fontWeight={500}
                  color="gray.700"
                  mb="6px"
                >
                  Travelling
                </Heading>
                <Input 
                  placeholder={`Yes`} 
                  fontWeight={500} 
                  alignSelf="stretch" 
                  fontSize="14px"
                  borderRadius="6px"
                  border="1px solid"
                  borderColor="gray.300"
                  p="8px"
                  mb="8px"
                />
                <SelectBox
                  shape="square"
                  indicator={<Image src="images/img_favorite.svg" alt="Favorite" w="12px" h="12px" />}
                  name="optionCounter"
                  placeholder={`Option 1`}
                  options={dropDownOptions}
                  style={{ 
                    fontWeight: 500, 
                    gap: "18px", 
                    alignSelf: "stretch", 
                    fontSize: "14px",
                    borderRadius: "6px",
                    border: "1px solid",
                    borderColor: "gray.300",
                    p: "4px"
                  }}
                />
              </Flex>
              <Flex 
                flex={1} 
                flexDirection="column" 
                alignItems="flex-start" 
                alignSelf={{ md: "auto", base: "stretch" }}
              >
                <Heading 
                  as="h6" 
                  fontSize="14px" 
                  fontWeight={500}
                  color="gray.700"
                  mb="6px"
                >
                  Active Duty
                </Heading>
                <Flex 
                  alignSelf="stretch" 
                  flexDirection="column" 
                  alignItems="flex-start"
                >
                  <Input 
                    placeholder={`Yes`} 
                    fontWeight={500} 
                    w="66%" 
                    fontSize="14px"
                    borderRadius="6px"
                    border="1px solid"
                    borderColor="gray.300"
                    p="8px"
                    mb="8px"
                  />
                  <Flex
                    bg="gray.200_02"
                    w={{ md: "66%", base: "100%" }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap="24px"
                    px="12px"
                    py="8px"
                    borderRadius="6px"
                  >
                    <Heading 
                      size="textmd" 
                      as="h6"
                      fontSize="14px"
                      fontWeight={500}
                    >
                      Option 1
                    </Heading>
                    <Image 
                      src="images/img_favorite.svg" 
                      alt="Favorite" 
                      h="12px" 
                      borderRadius="2px" 
                    />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex 
              gap="44px"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Flex 
                w={{ md: "26%", base: "100%" }} 
                flexDirection="column" 
                alignItems="flex-start"
              >
                <Heading 
                  as="h6" 
                  fontSize="14px" 
                  fontWeight={500}
                  color="gray.700"
                  mb="6px"
                >
                  Pre-intent
                </Heading>
                <SelectBox
                  shape="square"
                  indicator={<Image src="images/img_favorite.svg" alt="Favorite" w="12px" h="12px" />}
                  name="optionCounter"
                  placeholder={`Option 1`}
                  options={dropDownOptions}
                  style={{ 
                    fontWeight: 500, 
                    gap: "18px", 
                    alignSelf: "stretch", 
                    fontSize: "14px",
                    borderRadius: "6px",
                    border: "1px solid",
                    borderColor: "gray.300",
                    p: "4px"
                  }}
                />
              </Flex>
              <Flex 
                flex={1} 
                flexDirection="column" 
                alignItems="flex-start"
              >
                <Heading 
                  as="h6" 
                  fontSize="14px" 
                  fontWeight={500}
                  color="gray.700"
                  mb="6px"
                >
                  High Risk
                </Heading>
                <SelectBox
                  shape="square"
                  indicator={<Image src="images/img_favorite.svg" alt="Favorite" w="12px" h="12px" />}
                  name="optionCounter"
                  placeholder={`Option 1`}
                  options={dropDownOptions}
                  style={{ 
                    fontWeight: 500, 
                    gap: "18px", 
                    w: "36%", 
                    fontSize: "14px",
                    borderRadius: "6px",
                    border: "1px solid",
                    borderColor: "gray.300",
                    p: "4px"
                  }}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}