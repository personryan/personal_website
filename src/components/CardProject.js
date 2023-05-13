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

const CardProject = ({
    projectLanguage,
    projectTitle,
    projectDescription,
    projectLink,
}) => {
    const bgColor = useColorModeValue('white', 'gray.700');
    const textColor = useColorModeValue('black', 'white');
    const borderColor = useColorModeValue('black', 'white');
    const boxShadowColor = useColorModeValue('black', 'gray');
    const subTextColor = useColorModeValue('gray.500', 'gray.300')
    const boxShadow = `6px 6px 0 ${boxShadowColor}`;
    const languageStyles = {
        Python: {
            bg: 'blue.700',
            text: 'white',
        },
        SQL: {
            bg: 'teal.700',
            text: 'white',
        },
        Hadoop: {
            bg: 'yellow.700',
            text: 'white',
        },
        PowerBI: {
            bg: 'orange.700',
            text: 'white',
        },
        Vue: {
            bg: 'cyan.700',
            text: 'white',
        },
        MongoDB: {
            bg: 'green.500',
            text: 'white',
        },
        Excel: {
            bg: 'green.700',
            text: 'white',
        },
        'R Programming': {
            bg: 'blue.800',
            text: 'white',
        },
        Tableau: {
            bg: 'red.800',
            text: 'white',
        },
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
                        {projectLanguage.map((language, index) => (
                            <Box
                                key={index}
                                bg={languageStyles[language].bg}
                                display={'inline-block'}
                                px={2}
                                py={1}
                                color={languageStyles[language].text}
                                mr={2}
                                mb={2}
                                borderRadius="sm">
                                <Text fontSize={'xs'} fontWeight="medium">
                                    {language}
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                    <Heading color={textColor} fontSize={'2xl'} mb={2}>
                        <Flex justifyContent={'space-between'}>
                            {projectTitle}
                        </Flex>
                    </Heading>
                    <Text color={subTextColor} noOfLines={2} mt={2}>
                        {projectDescription}
                    </Text>
                </Box>
                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                    <HStack borderTop={'1px'} color={textColor}>
                        <Flex
                            p={4}
                            alignItems="center"
                            justifyContent={'space-between'}
                            roundedBottom={'sm'}
                            _hover={{ cursor: 'pointer', textDecoration: 'underline' }}
                            w="full">

                            <Text fontSize={'md'} fontWeight={'semibold'}>
                                View more
                            </Text>
                            <BsArrowUpRight />
                        </Flex>
                    </HStack>
                </a>
            </Box>
        </Center>
    );
}

export default CardProject