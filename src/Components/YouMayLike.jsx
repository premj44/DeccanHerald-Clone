import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, Button, Box, Text, Flex, Grid, Heading, } from "@chakra-ui/react";
import "../App.css"

export default function YouMayLike(){
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=3da128da75bb4e819bb876090635ca8f&pageSize=12")
            .then((res) => {
                console.log(res.data)
                setNews(res.data.articles)
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
                                <Image className="mainbox" w="97%" h="190px" src={item.urlToImage} />

                                <Box h={120}>
                                    <Flex fontSize='md' color={"gray.800"} fontWeight="bold">
                                        <Text className="listitem" >{item.title}</Text>
                                    </Flex>
                                </Box>
                                <Box>
                                    <Flex justifyContent={"space-between"}>
                                        <Text color={"gray.500"} fontSize='xs' fontWeight={"semibold"} >{item.source.name}</Text>
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