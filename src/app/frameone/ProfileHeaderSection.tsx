import { Image, IconButton, Flex, Heading, Box } from "@chakra-ui/react";
import React from "react";

export default function ProfileHeaderSection() {
  return (
    <>
      {/* Profile Header Section */}
      <Box 
        ml={{ md: "16px", base: "0px" }}
      >
        <Flex
          bg="black.900"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p="24px"
          borderRadius="24px"
          boxShadow="lg"
        >
          <IconButton
            size="lg"
            icon={<Image src="images/img_image_11.svg" h="24px" w="24px" />}
            aria-label="1:431-imageeleven_one"
            alignSelf="flex-end"
            w="44px"
            h="44px"
            borderRadius="22px"
            bg="gray.800"
            _hover={{ bg: "gray.700" }}
          />
          <Image 
            src="images/img_image.png" 
            alt="Image" 
            h="120px" 
            mt="60px" 
            w="28%" 
            fit="contain" 
            borderRadius="60px"
            border="2px solid"
            borderColor="white.a700"
          />
          <Heading 
            size="textxl" 
            as="h6" 
            color="white.a700" 
            mt="12px"
            fontSize="18px"
            fontWeight={600}
          >
            Jonathan Banks
          </Heading>
          <Heading 
            size="textxl" 
            as="h6" 
            color="white.a700" 
            mt="10px"
            fontSize="16px"
            fontWeight={400}
          >
            0:32
          </Heading>
          <Flex 
            mt="120px" 
            ml={{ md: "6px", base: "0px" }} 
            alignSelf="stretch" 
            justifyContent="center"
            gap="16px"
          >
            <IconButton
              size="xl"
              icon={<Image src="images/img_setting_1_svgrepo_com.svg" h="24px" w="24px" />}
              aria-label="1:434-settingone_one"
              w="48px"
              h="48px"
              borderRadius="24px"
              bg="gray.800"
              _hover={{ bg: "gray.700" }}
            />
            <Flex 
              gap="12px" 
              flex={1} 
              justifyContent="center" 
              px={{ md: "60px", base: "24px" }}
            >
              <IconButton
                size="xl"
                icon={<Image src="images/img_mute_2_svgrepo_com.svg" h="24px" w="24px" />}
                aria-label="1:439-mute2svgrepo"
                w="48px"
                h="48px"
                borderRadius="24px"
                bg="gray.800"
                _hover={{ bg: "gray.700" }}
              />
              <IconButton
                size="xl"
                icon={<Image src="images/img_video_slash_svgrepo_com.svg" h="24px" w="24px" />}
                aria-label="1:454-videoslash_one"
                w="48px"
                h="48px"
                borderRadius="24px"
                bg="gray.800"
                _hover={{ bg: "gray.700" }}
              />
              <Image 
                src="images/img_close.svg" 
                alt="Close" 
                h="48px" 
                w="48px"
                borderRadius="24px"
                bg="gray.800"
                p="12px"
                _hover={{ bg: "gray.700" }}
              />
            </Flex>
            <Image 
              src="images/img_user.svg" 
              alt="User" 
              h="48px" 
              w="48px"
              borderRadius="24px"
              bg="gray.800"
              p="12px"
              _hover={{ bg: "gray.700" }}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}