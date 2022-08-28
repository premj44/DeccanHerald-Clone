import { Button, Flex, Text, Input, Box, Grid, GridItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Alert, AlertTitle, AlertIcon } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ChevronRightIcon, TimeIcon } from '@chakra-ui/icons'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
const initValue = {
    email: "",
}


export default function Register() {
    const [data, setData] = useState(initValue)
    const [userExist, setuserExist] = useState(false)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    function handleChange(e) {
        const { name, value } = e.target
        setData(
            {
                ...data,
                [name]: value
            }
        )
    }

    setTimeout(() => {

    }, 2000);

    const { email } = data
    function getTodos() {
        console.log(data)

        fetch('https://yoox-4324.herokuapp.com/data')
            .then(res => res.json())

            .then(res => {
                console.log(res)
                res.forEach((item) => {

                    console.log(item, data)
                    if (item.email === data.email) {
                        setuserExist(true)
                        return;
                        
                    }


                })
            })
    }
    function addTodos() {
        if (userExist === true) {
            return;
        }
        return fetch("https://yoox-4324.herokuapp.com/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <>

            <Navbar/>
           
           <Box bg='#f6f6f6' border={'1px solid'} h='80px' w='90%' m='auto'>
              <Text fontWeight={'bold'} fontSize={'2xl'} p='25px'>DECCAN HERALD NEWSLETTERS : SIGN UP</Text>
           </Box>


            <Box >
                <Grid  templateColumns='repeat(3, 1fr)' gap={6} p='20px' textAlign={'left'}>
                    <GridItem w='100%' bg='#e5f3ff' p='25px'>
                        <Text m='7px' fontWeight={'semibold'} color='#2687a9' fontSize='2xl'>SIGN UP FOR ALL NEWSLETTERS</Text>
                        <Text m='15px' mb='55px' textAlign={'left'}>I give my consent to Deccan Herald to be in touch with me via email for the purpose of event marketing and corporate communications.</Text>
                        
                        {
                             userExist && <Alert status='error'>
                                <AlertIcon />
                                <AlertTitle>user alredy exit</AlertTitle>
                            </Alert>
                        }
                        <Flex gap='10px'>
                        <Input w='220px' mt='20px'
                            onChange={handleChange} value={email} name="email"
                            borderWidth="1px" borderColor="pink.100"  mb="10px" bg="white" focusBorderColor='pink.400' variant="outline" />
                        
                        <Flex alignItems="center">
                            <Button color='white' bg='#2688aa' mt='6px'
                                onClick={() => {
                                    getTodos()
                                    addTodos()
                                    setData(initValue)

                                    setLoading(true)
                                    setTimeout(() => {
                                        setLoading(false)
                                        if(userExist){
                                            navigate("/registered")
                                        }
                                       
                                    }, 1000);
                                }}
                                isLoading={loading}
                            >Sign Up For All</Button>
                        </Flex>
                        </Flex>
                    </GridItem>
                    <GridItem w='100%' bg='#e5f3ff' p='25px'>
                        <Text  m='7px' fontWeight={'semibold'} color='#2687a9' fontSize='2xl'>TOP NEWS OF THE DAY</Text>
                        <Text m='15px' mb='55px' textAlign={'left'}>A round-up of the most important stories of the day. Stay informed about the news that matters to you.</Text>
                        <Flex color='gray.500' fontSize={'13px'} gap='10px'>
                            <Box><TimeIcon/></Box>
                            <Box>Daily</Box>
                        </Flex>
                        <Flex  alignItems="center" justifyContent={'space-between'}>
                        <Box color='white' fontWeight={'semibold'} mt='20px' bg='black' p='10px 35px'>Sign Up</Box>
                        <Box color='black'  mt='20px' bg='white' p='10px 25px'>See Latest <ChevronRightIcon ml='20px'/></Box>
                        </Flex>
                       
                    </GridItem>


                    <GridItem w='100%' bg='#e5f3ff' p='25px'>
                        <Text  m='7px' fontWeight={'semibold'} color='#2687a9' fontSize='2xl'>POLITICAL THEATRE</Text>
                        <Text m='15px' mb='55px' textAlign={'left'}>A look at the political happenings of the week that shape the national conversation.</Text>
                        <Flex color='gray.500' fontSize={'13px'} gap='10px'>
                            <Box><TimeIcon/></Box>
                            <Box>Weekly</Box>
                        </Flex>
                        <Flex  alignItems="center" justifyContent={'space-between'}>
                        <Box color='white' fontWeight={'semibold'} mt='45px' bg='black' p='10px 25px'>Sign Up</Box>
                        <Box color='black'  mt='45px' bg='white'  p='10px 35px'>See Latest <ChevronRightIcon ml='20px'/></Box>
                        </Flex>
                       
                    </GridItem>

                    <GridItem w='100%' bg='#e5f3ff' p='25px'>
                        <Text  m='7px' fontWeight={'semibold'} color='#2687a9' fontSize='2xl'>THE DH SPORTSLETTER</Text>
                        <Text m='15px' mb='55px' textAlign={'left'}>The letter keeps you updated on all you need to know from the world of sports. During the IPL, it will arrive in your inboxes daily throughout the length of the tournament.</Text>
                        <Flex color='gray.500' fontSize={'13px'} gap='10px'>
                            <Box><TimeIcon/></Box>
                            <Box>Weekly</Box>
                        </Flex>
                        <Flex alignItems="center" justifyContent={'space-between'}>
                        <Box color='white' fontWeight={'semibold'} mt='20px' bg='black' p='10px 25px'>Sign Up</Box>
                        <Box color='black'  mt='20px' bg='white' p='10px 35px'>See Latest <ChevronRightIcon ml='20px'/></Box>
                        </Flex>
                       
                    </GridItem>
                    <GridItem w='100%' bg='#e5f3ff' p='25px'>
                        <Text  m='7px' fontWeight={'semibold'} color='#2687a9' fontSize='2xl'>DH VIDEO ON DEMAND</Text>
                        <Text m='15px' mb='55px' textAlign={'left'}>Spend time with the best video storytelling from DH. Delivered on weekends.</Text>
                        <Flex position={'absolute'} color='gray.500' fontSize={'13px'} gap='10px'>
                            <Box><TimeIcon/></Box>
                            <Box>Coming soon</Box>
                        </Flex>
                        <Flex  alignItems="center" justifyContent={'space-between'}>
                        <Box color='white' fontWeight={'semibold'} mt='85px' bg='black' p='10px 25px'>Sign Up</Box>
                        </Flex>
                       
                    </GridItem>
                    <GridItem w='100%' bg='#e5f3ff' p='25px'>
                        <Text  m='7px' fontWeight={'semibold'} color='#2687a9' fontSize='2xl'>TUNE IN TO DH RADIO</Text>
                        <Text m='15px' mb='55px' textAlign={'left'}>A special curated look at the audio stories that deserve your attention.</Text>
                        <Flex color='gray.500' fontSize={'13px'} gap='10px'>
                            <Box><TimeIcon/></Box>
                            <Box>Coming soon</Box>
                        </Flex>
                        <Flex  alignItems="center" justifyContent={'space-between'}>
                        <Box color='white' fontWeight={'semibold'} mt='65px' bg='black' p='10px 25px'>Sign Up</Box>
                        </Flex>
                       
                    </GridItem>
                    <GridItem w='100%' bg='#e5f3ff' p='25px'>
                        <Text  m='7px' fontWeight={'semibold'} color='#2687a9' fontSize='2xl'>BEST OF DH OPINION</Text>
                        <Text m='15px' mb='55px' textAlign={'left'}>Explore fresh perspectives, insightful analyses, fearless editorials and sharp arguments with this letter. We address the most pressing issues every single week.</Text>
                        <Flex color='gray.500' fontSize={'13px'} gap='10px'>
                            <Box><TimeIcon/></Box>
                            <Box>Coming soon</Box>
                        </Flex>
                        <Flex  alignItems="center" justifyContent={'space-between'}>
                        <Box color='white' fontWeight={'semibold'} mt='65px' bg='black' p='10px 25px'>Sign Up</Box>
                        </Flex>
                       
                    </GridItem>
                    <GridItem w='100%' bg='#e5f3ff' p='25px'>
                        <Text  m='7px' fontWeight={'semibold'} color='#2687a9' fontSize='2xl'>BEST OF DH ON WEEKENDS</Text>
                        <Text m='15px' mb='55px' textAlign={'left'}>Take time to pause, reflect and feed your brain with our weekend letter. Our selection covers a range of topics and is sure to spark friendly debates. Your weekends will never be the same again.</Text>
                        <Flex color='gray.500' fontSize={'13px'} gap='10px'>
                            <Box mt='-22px'><TimeIcon/></Box>
                            <Box mt='-22px'>Coming soon</Box>
                        </Flex>
                        <Flex  alignItems="center" justifyContent={'space-between'}>
                        <Box color='white' fontWeight={'semibold'} mt='55px' bg='black' p='10px 25px'>Sign Up</Box>
                        </Flex>
                       
                    </GridItem>
                    <GridItem w='100%' ></GridItem>

                </Grid>
            </Box>
              
           <Footer/>
        </>
    )
}

