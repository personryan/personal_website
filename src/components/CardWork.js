import { useState, React } from 'react';
import {
    Box,
    Heading,
    Text,
    Img,
    Flex,
    Center,
    useColorModeValue,
    HStack,
    Collapse,
} from '@chakra-ui/react';
import { BsArrowUpRight, } from 'react-icons/bs';

const listItemStyles = {
    fontSize: '14px', /* Base font size */
    marginBottom: '1.5rem',
    '@media (min-width: 768px)': {
      fontSize: '16px', /* Font size for small (sm) breakpoint and above */
    }
  };

const CardWork = ({
    workSkill,
    workTitle,
    workDescription,
    workDuration,
    workHighlight,
    workCompany,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const bgColor = useColorModeValue('white', 'gray.700');
    const textColor = useColorModeValue('black', 'white');
    const borderColor = useColorModeValue('black', 'white');
    const boxShadowColor = useColorModeValue('black', 'gray');
    const subTextColor = useColorModeValue('gray.500', 'gray.300')
    const boxShadow = `6px 6px 0 ${boxShadowColor}`;
    const skillStyles = {
        'Data Analysis': {
            bg: 'blue.700',
            text: 'white',
        },
        Communication: {
            bg: 'teal.700',
            text: 'white',
        },
        'Problem Solving': {
            bg: 'yellow.700',
            text: 'white',
        },
        Presentation: {
            bg: 'orange.700',
            text: 'white',
        },
        Excel: {
            bg: 'green.700',
            text: 'white',
        },
        Design: {
            bg: 'teal.500',
            text: 'white',
        },
        UI: {
            bg: 'yellow.500',
            text: 'white',
        }
    };
    return (
        <Center py={6}>
            <Box
                w={{ base: 'xs', sm: '6xl' }}
                rounded={'sm'}
                my={5}
                mx={[0, 5]}
                overflow={'hidden'}
                bg={bgColor}
                color={textColor}
                border={'1px'}
                borderColor={borderColor}
                boxShadow={boxShadow}>
                <Box p={4}>
                    <Flex flexWrap="wrap" mb={2}>
                        {workSkill.map((skill, index) => (
                            <Box
                                key={index}
                                bg={skillStyles[skill].bg}
                                display={'inline-block'}
                                px={2}
                                py={1}
                                color={skillStyles[skill].text}
                                mr={2}
                                mb={2}
                                borderRadius="sm">
                                <Text fontSize={'xs'} fontWeight="medium">
                                    {skill}
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems="center">
                        <Heading color={textColor} fontSize={{base: 'sm', sm: 'md'}} mb={2}>
                            <Box>{workTitle}</Box>
                        </Heading>
                        <Box as='b' fontSize={{base: 'xs', sm: 'sm'}} mb={2} pr={1}>{workDuration}</Box>
                    </Flex>
                    <Text as={'b'} color={subTextColor} mt={2} fontSize={{base: 'xs', sm: 'sm'}}> {workCompany}</Text>
                    <Text color={subTextColor} noOfLines={2} mt={2} fontSize={{base: 'xs', sm: 'sm'}}>
                        {workDescription}
                    </Text>
                    <Collapse in={isExpanded} startingHeight={0} fontSize={{base: 'xs', sm: 'sm'}}>
                        <Box mt={4}>
                            <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
                                {workHighlight.map((highlight, index) => (
                                    <li style={listItemStyles} >{highlight}</li>
                                ))}
                            </ul>
                        </Box>
                    </Collapse>
                </Box>

                <HStack borderTop={'1px'} color={textColor}>
                    <Flex
                        p={4}
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        _hover={{ cursor: 'pointer', textDecoration: 'underline' }}
                        w="full"
                        onClick={handleToggle}
                    >
                        <Text fontSize={'md'} fontWeight={'semibold'}>
                            {isExpanded ? 'View less' : 'View more'}
                        </Text>
                        <BsArrowUpRight />
                    </Flex>
                </HStack>

            </Box>
        </Center>
    );
}

export default CardWork