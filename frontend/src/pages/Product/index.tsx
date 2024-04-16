import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { logopreta, user, hearth, cart, cartshop, download, OceanRocks } from "../../assets";

export const Product = () => {
    return(
        <Box display={"flex"} alignItems={'center'} flexDirection={'column'} w={'100vw'} h={'100vh'}>
            <Box
                display={'flex'}
                alignItems={'center'}
                flexDirection={'row'}
                mt={'50px'}
                position="relative"
                w={"1700px"}
                h={"100px"}
                borderStyle="solid"
                borderColor="blue.500"
                borderWidth="2px"
                borderRadius={'30px'}
            >
                <Image
                    ml={'auto'}
                    position={'absolute'}
                    left={'20px'}
                    src={logopreta}
                    w={"200px"}
                    top={'25px'}
                />
                <Box
                    w={'40'}
                    h={'20'}
                    borderStyle="solid"
                    borderColor="red"
                    borderWidth="2px"
                    borderRadius={'30px'}
                    right={'40px'}
                    position={'absolute'}
                    alignContent={'center'}
                    display={'flex'}
                >
                    <Image src={user} w={"50px"} h={"50px"}/>
                    <Text fontFamily={"fantasy"}>Leonardo Hartmann</Text>
                </Box>
            </Box>
            <Box
                top={'150px'}
                position="relative"
                w={'1600px'}
                h={'100vh'}
            >
                <Flex>
                    <Box
                        display={'flex'}
                        w={'300px'}
                        h={'10vh'}
                        alignItems={'center'}
                        ml={'auto'}
                        mr={'auto'}
                    >
                        <Image src={user} h={'80px'}/>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'start'}
                        >
                            <Text color={'#000000'} whiteSpace={'nowrap'}/>Leonardo Hartmann
                            <Text color={'#000000'} whiteSpace={'nowrap'} />4.2M Followers
                        </Box>
                    </Box>
                    <Image
                        src={OceanRocks}
                        w={'40vw'}
                        h={'80vh'}
                        ml={'auto'}
                        mr={'auto'}
                        shadow={'10px 5px 20px #494949'}
                    />
                    <Flex
                        marginTop={'100px'}
                        marginLeft={'5%'}
                        flexDirection={'column'}
                    >
                        <Box
                            display={'flex'}
                            w={'300px'}
                            h={'80px'}
                        >
                            <Text
                                ml={'auto'}
                                mr={'auto'}
                                textDecoration={'underline'}
                                fontSize="3.5rem"
                                whiteSpace={'nowrap'}
                                color={'#29ABE2'}
                            >
                                R$ 499,00
                            </Text>
                        </Box>
                        <Box
                            display={'flex'}
                            flexDirection={'row'}
                            w={'300px'}
                            h={'80px'}
                            fontSize="3.5rem"
                            alignItems={'center'}
                        >
                            <Button
                                w={'230px'}
                                h={'40px'}
                                ml={'auto'}
                                mr={'auto'}
                                bgColor={'#29ABE2'}
                                borderRadius={'10px'}
                                fontSize="1.5rem"
                                alignContent={'baseline'}
                                display={'flex'}
                                >
                                <Flex
                                    ml={'auto'}
                                    mr={'auto'}
                                >
                                    <Image
                                        src={cart}
                                        h={'40px'}
                                        w={'40px'}
                                    />
                                    <Text
                                        ml={'auto'}
                                        mr={'auto'}
                                        fontSize="1.5rem"
                                        whiteSpace={'nowrap'}
                                        color={'white'}
                                    >
                                        Comprar
                                    </Text>
                                </Flex>
                            </Button>

                            <Button
                                w={'50px'}
                                h={'40px'}
                                ml={'auto'}
                                mr={'auto'}
                                bgColor={'#29ABE2'}
                                borderRadius={'10px'}
                                display={'flex'}
                            >
                                <Image
                                    src={cartshop}
                                    ml={'auto'}
                                    mr={'auto'}
                                    h={'40px'}
                                    w={'40px'}
                                />
                            </Button>

                        </Box>

                        <Box
                            display={'flex'}
                            flexDirection={'row'}
                            w={'300px'}
                            h={'80px'}
                            fontSize="3.5rem"
                            whiteSpace={'nowrap'}
                            alignItems={'center'}
                        >
                            <Image src={hearth} h={'5vh'}/>
                            <Button
                                w={'230px'}
                                h={'40px'}
                                ml={'auto'}
                                mr={'auto'}
                                bgColor={'#2bb900'}
                                borderRadius={'10px'}
                                fontSize="1.5rem"
                                display={'flex'}
                            >
                                <Flex
                                    alignItems={'center'}
                                >
                                    <Image
                                        src={download}
                                        ml={'auto'}
                                        mr={'auto'}
                                        h={'40px'}
                                        w={'40px'}
                                    />
                                    <Text
                                        ml={'auto'}
                                        mr={'auto'}
                                        fontSize="1.5rem"
                                        whiteSpace={'nowrap'}
                                        color={'white'}
                                    >
                                        Download
                                    </Text>
                                </Flex>
                            </Button>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}
