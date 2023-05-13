import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    Box,
    IconButton,
    VStack,
    useToast,
} from '@chakra-ui/react';
import '../style.css';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { AiFillLinkedin } from 'react-icons/ai';

export function Home() {
    const toast = useToast();
    const email = 'rlim31449@gmail.com';
    const phoneNo = '+65 9694 5284'

    const copyToClipboard = async (event) => {
        const selected = event.target.innerText;
        var copiedText = ""
        if (selected == "E-mail") {
            copiedText = email
        } else {
            copiedText = phoneNo
        }
        console.log(copiedText)
        try {
            await navigator.clipboard.writeText(copiedText);
            toast({
                title: `${selected} copied to clipboard`,
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        } catch (error) {
            console.error('Error copying to clipboard:', error);
            toast({
                title: `Failed to copy ${selected}`,
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        }
    };
    return (
        <Container maxW={'5xl'}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '5xl', sm: '6xl', md: '7xl' }}
                    lineHeight={'110%'}>
                    Hello! I am{' '}
                    <Box>
                        <Text className="typing-text" as={'span'} color={'blue.400'}>
                            Lim Ryan
                        </Text>
                    </Box>
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'}>
                    A software engingeering student at Singapore Institute of Technology.
                    I am interested in <strong style={{ color: 'orange.400' }}>data analytics</strong> and <strong style={{ color: 'orange.400' }}>web development</strong>. I recently finished a Google
                    Data Analytics Specialisation course. My experiences from jobs and project works have taught
                    me the importance of teamwork, communication and presentation.
                </Text>
                <Stack spacing={6} direction={'row'}>
                    <a href={'https://www.linkedin.com/in/ryan-lim-b3730724b/'} target="_blank" rel="noopener noreferrer">
                        <Button display="flex" alignItems="center" rounded="full">
                            <AiFillLinkedin
                                cursor={"pointer"}
                                aria-label="Open Linkedin"
                                variant="ghost"
                                size={'20px'}
                                mt={0.5}
                            >
                            </AiFillLinkedin>
                            <Text as={'b'} ml={2}>Linkedin</Text>
                        </Button>
                    </a>
                    <VStack spacing={2}>
                        <Button display="flex" alignItems="center" rounded="full" onClick={copyToClipboard}>
                            <EmailIcon
                                cursor={"pointer"}
                                aria-label="Open Email"
                                variant="ghost"
                                size={'lg'}
                                mt={0.5}
                            />
                            <Text as={'b'} ml={2}>E-mail</Text>
                        </Button>
                    </VStack>
                    <Button display="flex" alignItems="center" rounded="full" onClick={copyToClipboard}>
                        <PhoneIcon
                            cursor={"pointer"}
                            aria-label="Open Phone Number"
                            variant="ghost"
                            size={'lg'}
                            mt={0.5}
                        />
                        <Text as={'b'} ml={2}>Phone No.</Text>
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
}

export default Home