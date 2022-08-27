import { Link, useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, Button, Box, Text, Flex, Grid, Heading, } from "@chakra-ui/react";
import "../App.css"

export default function YouMayLikeNational(){
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("https://deccannews.herokuapp.com/articles?_limit=12")
            .then((res) => {
                console.log(res)
                setNews(res.data)
            })

    }, []);
    console.log("news", news);

    return(
        <>
          <Box bg='white' mt='35px' mb="35px" >
                    <Heading textAlign='left' ml='44px' size='md'>You May Like</Heading>
                    <Grid templateColumns="repeat(4,1fr)" m={"auto"} gap="5px" w="95%" textAlign="left" >
                        {news.map((item) => (
                            <Box value={item.id} name={item.id} key={item.id} p="10px" rounded="md" bg="white" >
                               <Link  to={`/specials/${item.id}`}><Image className="mainbox" w="97%" h="190px" src={item.urlToImage} /></Link>

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
        </>
    )
}