import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Text, Image, Button, Flex, Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    HStack,
} from '@chakra-ui/react'


function getUser(id) {
    return fetch("https://deccannews.herokuapp.com/articles/" + id).then((res) => res.json());
}

export default function SingleSpecials() {
    const [data, setData] = useState([]);

    const params = useParams()
    console.log(params)

    useEffect(() => {
        getUser(params.id).then((res) => {
            console.log(res)
            setData(res);
        });

    }, [params.id]);


    return (
        <>

            <Box mt='25px' ml='-960px' fontSize={'13px'}>
                <Breadcrumb>
                    <BreadcrumbItem color='#15a2b8'>
                        <Link to='/'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to='/national'>National</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to='/specials'>Specials</Link>
                    </BreadcrumbItem>
                </Breadcrumb>


            </Box>

            <HStack ml='98px' spacing='25px' fontSize={'12px'} >
                <Box fontWeight='bold' fontSize={'30px'} color='white' w='170px' p='5px' bg='#ee9e18'>
                 News
                </Box>
            </HStack>

            <Box m='50px' textAlign={'left'}>

                <Text letterSpacing={'4px'} fontSize='3xl' fontWeight={'bold'}>{data.title}</Text>
                <Text letterSpacing={'10px'} mt='2' color={'gray.500'}>{"AUTHOR:"} {data.author}</Text>
                <hr style={{ margin: "15px" }} />
                <Flex gap='15px'>
                    <Image ml='20px' src='https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/default_author_small.png' />
                    <Text color={'blue.400'}>{data.name}</Text>
                    <Box height='25px' >
                        <Divider orientation='vertical' />
                    </Box>
                    <Text fontWeight={'bold'}>{"PUBLISHED AT :"} {data.publishedAt}</Text>
                    <Link to='/specials'><Button variant='outline' m='-5px 10px' size='sm'><ArrowBackIcon /> GO BACK</Button></Link>
                </Flex>

                <Box ml='40px' mt='20px'>
                    <Image w={'500px'} src={data.urlToImage} />
                </Box>

                <Box w='80%'>
                    <Text color='#0087a8' fontSize='xl' m='20px 35px'>{data.description}</Text>

                    <Text fontSize='md' ml='35px'>{data.content}</Text>

                </Box>

            </Box>

        </>
    )
}