import { ReactNode } from 'react';
import { AiFillHome } from 'react-icons/ai';
import {
  IconButton,
  useBreakpointValue,
  Box,
  Flex,
  Text,
  Avatar,
  Link as ChakraLink,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import {Link} from 'react-router-dom'
const NavLink = ({ children, to }: { children: ReactNode }) => (
  <ChakraLink
  as={Link}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    to={to}>
    {children}
  </ChakraLink>
);

export function NavBar() {
  const isMobile = useBreakpointValue({ base: true, sm: false }); // true for base, false for sm and above
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex h={16} alignItems={'left'}>
            <Box padding={2}>
              <NavLink to="/">
                <IconButton icon={<AiFillHome />} aria-label="Home"
                  variant="ghost"
                  size={'lg'}
                />
              </NavLink>
            </Box>
            {isMobile ? (
              <Box padding={2}>
                <IconButton
                  aria-label="Open menu"
                  variant="ghost"
                  size={'lg'}
                  icon={<HamburgerIcon cursor="pointer" as={isOpen ? 'close' : 'menu'} />}
                  onClick={isOpen ? onClose : onOpen}
                />
              </Box>

            ) : (
              <Flex alignItems="center">
                <Stack direction={['column', 'row']} spacing={4}>
                  <Box padding={2}>
                    <NavLink to="/projects">
                      <Text as={'b'}>Projects</Text>
                    </NavLink>
                  </Box>
                  <Box padding={2}>
                    <NavLink to="/experiences">
                      <Text as={'b'}>Work Experiences</Text>
                    </NavLink>
                  </Box>
                </Stack>
              </Flex>
            )}
          </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>

        {isMobile && (
          <Box pb={4}>
            {isOpen && (
              <Stack as="nav" spacing={4}>
                <Box padding={2}>
                  <NavLink to="/projects">
                    <Text as={'b'}>Projects</Text>
                  </NavLink>
                </Box>
                <Box padding={2}>
                  <NavLink to="/experiences">
                    <Text as={'b'}>Work Experiences</Text>
                  </NavLink>
                </Box>
              </Stack>
            )}
          </Box>
        )}
      </Box>
    </>
  );
}

export default NavBar