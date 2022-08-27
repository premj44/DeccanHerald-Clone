import { Link, useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, Button, Box, Text, Flex, Grid, Heading, } from "@chakra-ui/react";
import "../App.css"
import SpecialInsight from "../SpecialsData/SpecialInsight";
import PointBlank from "../SpecialsData/PointBlank";
import SundaySpotlight from "../SpecialsData/SundaySpotlight";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../App.css"
import {
    Breadcrumb,
    BreadcrumbItem,
    HStack,
} from '@chakra-ui/react'


export default function Specials() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("https://deccannews.herokuapp.com/articles?_limit=12")
            .then((res) => {
                console.log(res)
                setNews(res.data)
            })

    }, []);


    return (
        <>
            <Navbar />

            <Box mt='25px' ml='-1000px' fontSize={'13px'}>
                <Breadcrumb>
                    <BreadcrumbItem color='#15a2b8'>
                        <Link to='/'>Home</Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Link to='/specials'>Specials Page</Link>
                    </BreadcrumbItem>
                </Breadcrumb>


            </Box>

            <HStack ml='98px' spacing='25px' fontSize={'12px'} >
                <Box fontWeight='bold' fontSize={'30px'} color='white' w='170px' p='5px' bg='#ee9e18'>
                   Specials
                </Box>
                <Box className="listitem">
                INSIGHT
                </Box>
                <Box className="listitem">
                POINT BLANK
                </Box>
                <Box className="listitem">
                SUNDAY SPOTLIGHT
                </Box>
            </HStack>


            <SpecialInsight />
            <PointBlank />
            <SundaySpotlight />

            <Box bg='white' mt='35px' mb="35px" >
                <Heading textAlign='left' ml='44px' size='md'>You May Like</Heading>
                <Grid templateColumns="repeat(4,1fr)" m={"auto"} gap="5px" w="95%" textAlign="left" >
                    {news.map((item) => (
                        <Box value={item.id} name={item.id} key={item.id} p="10px" rounded="md" bg="white" >
                            <Link to={`/specials/${item.id}`}><Image className="mainbox" w="97%" h="190px" src={item.urlToImage} /></Link>

                            <Box h={120}>
                                <Flex fontSize='md' color={"gray.800"} fontWeight="bold">
                                    <Text className="listitem" >{item.title}</Text>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex justifyContent={"space-between"}>
                                    <Text color={"gray.500"} fontSize='xs' fontWeight={"semibold"} >{item.name}</Text>
                                    <Button colorScheme='black' padding={3} size='xs' variant='outline'>{item.author}</Button>
                                </Flex>
                            </Box>

                        </Box>

                    ))}

                </Grid>

            </Box>

            <Footer />

        </>
    )
}