import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Text,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

export const NavMenuItem = ({ to, title }) => (
  <Box my="2" _hover={{ color: "purple.400", fontWeight: "bold" }}>
    <Link href={to} passHref>
      <Text>{title}</Text>
    </Link>
  </Box>
);
const Navbar = () => (
  <Flex
    flexDirection="row"
    p="2"
    borderBottom="1px"
    borderColor="gray.100"
    justifyContent="flex-start"
    gap={{ lg: "96", md: "48", sm: "24" }}
  >
    <Box fontSize="3xl" color="purple.400" fontWeight="bold">
      <Link href="/" paddingLeft="2">
        Estatery
      </Link>
    </Box>
    <Box display={{ base: "none", md: "none", lg: "initial" }} p="2">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        gap={12}
        cursor="pointer"
      >
        {/* <Link href="/" passHref>
          <Text>Home</Text>
        </Link> */}
        <NavMenuItem to="/" title="Home" />
        <NavMenuItem to="/search" title="Search" />
        <NavMenuItem to="/search?purpose=for-sale" title="Buy" />
        <NavMenuItem to="/search?purpose=for-rent" title="Rent" />

        {/* <Link href="/search" passHref>
          <Text>Search</Text>
        </Link>

        <Link href="/search?purpose=for-sale" passHref>
          <Text>Buy</Text>
        </Link>

        <Link href="/search?purpose=for-rent" passHref>
          <Text>Rent</Text>
        </Link> */}
      </Flex>
    </Box>
    <Spacer />
    <Box display={{ base: "initial", md: "initial", lg: "none" }}>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outline"
          color="red.400"
        />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
