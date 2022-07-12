import { Box, Button, Flex, Text } from "@chakra-ui/react";
// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const Banner = ({
    purpose,
    title1,
    title2,
    desc1,
    imageUrl,
    linkName,
    buttonText,
  }) => (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      {/* <Image src={imageUrl} alt="Home" width={500} height={300} /> */}
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="bold" fontWeight="bold">
          {title1} <br /> {title2}
        </Text>
        <Text
          fontSize="lg"
          paddingTop="3"
          paddingBottom="3"
          fontWeight="medium"
          color="gray.700"
        >
          {desc1}
        </Text>
        <Button colorScheme="blue">
          <Link href={linkName}>
            <span>{buttonText}</span>
          </Link>
        </Button>
      </Box>
    </Flex>
  );

  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
      />
      <Flex flexWrap="wrap">
        {/* Fetch the properties and map over them */}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1="Find, buy and own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
      />
    </Box>
  );
}
