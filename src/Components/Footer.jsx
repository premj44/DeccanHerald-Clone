import { Box, Divider, HStack, Text, Link, Flex, Image, GridItem, Grid } from "@chakra-ui/react";
import "../App.css"

export default function Footer() {

    return (
        <>
            <Box mt='55px' p='50px' bg='#0087a8'>
                <Box ml='50px' fontSize={'14px'} lineHeight='24px' color='white' gap='25px' display='flex' textAlign='left'>
                    <Box >
                        <Text className="listitem" fontWeight={'bold'}>NATIONAL</Text>
                        <Divider orientation='horizontal' />
                        <ul >
                            <Text className="listitem">Politics</Text>
                            <Text className="listitem">North and Central</Text>
                            <Text className="listitem">South</Text>
                            <Text className="listitem">East and Northeast</Text>
                            <Text className="listitem">West</Text>

                        </ul>
                    </Box>
                    <Box ml='10px'>
                        <Text className="listitem" fontWeight={'bold'}>KARNATAKA</Text>
                        <Divider orientation='horizontal' />

                        <ul>
                            <Text className="listitem">Top Stories</Text>
                            <Text className="listitem">Politics</Text>
                            <Text className="listitem">Districts</Text>
                        </ul>
                    </Box>
                    <Box ml='10px'>
                        <Text className="listitem" fontWeight={'bold'}>BENGALURU</Text>
                        <Divider orientation='horizontal' />

                        <ul>
                            <Text className="listitem">Top Stories</Text>
                            <Text className="listitem">Bengaluru Crime</Text>
                            <Text className="listitem">Politics</Text>
                            <Text className="listitem">Infrastructure</Text>
                            <Text className="listitem">Life in the City</Text>
                        </ul>
                    </Box>
                    <Box ml='10px'>
                        <Text className="listitem" fontWeight={'bold'}>SPORTS</Text>
                        <Divider orientation='horizontal' />

                        <ul>
                            <Text className="listitem">Cricket</Text>
                            <Text className="listitem">Formula 1 with DH</Text>
                            <Text className="listitem">Football</Text>
                            <Text className="listitem">Sportscene</Text>
                            <Text className="listitem">Other Sports</Text>
                        </ul>
                    </Box>
                    <Box ml='10px'>
                        <Text className="listitem" fontWeight={'bold'}>BUSINESS</Text>
                        <Divider orientation='horizontal' />

                        <ul>
                            <Text className="listitem">Business News</Text>
                            <Text className="listitem">Family Finance</Text>
                            <Text className="listitem">Technology</Text>
                            <Text className="listitem">DH Wheels</Text>
                        </ul>
                    </Box>
                    <Box ml='10px'>
                        <Text className="listitem" fontWeight={'bold'}>MULTIMEDIA</Text>
                        <Divider orientation='horizontal' />

                        <ul>
                            <Text className="listitem">Videos</Text>
                            <Text className="listitem">Photos</Text>
                        </ul>
                    </Box>
                    <Box ml='10px'>
                        <Text className="listitem" fontWeight={'bold'}>OPINION</Text>
                        <Divider orientation='horizontal' />

                        <ul>
                            <Text className="listitem">DH Views</Text>
                            <Text className="listitem">Editorials</Text>
                            <Text className="listitem">Panorama</Text>
                            <Text className="listitem">Comment</Text>
                            <Text className="listitem">In Perspective</Text>
                            <Text className="listitem">Right in the Middle</Text>
                        </ul>
                    </Box>
                    <Box ml='10px'>
                        <Text className="listitem" fontWeight={'bold'}>ENTERTAINMENT</Text>
                        <Divider orientation='horizontal' />

                        <ul>
                            <Text className="listitem">Entertainment News</Text>
                            <Text className="listitem">DH Showtime</Text>
                            <Text className="listitem">DH Talkies</Text>
                            <Text className="listitem">Arts,Books & Culture</Text>
                            <Text className="listitem">West</Text>
                        </ul>
                    </Box>

                </Box>
                <HStack fontWeight={"bold"} fontSize={'12px'} color='white' p='15px' spacing='24px' ml='32px' mt='35px'>
                    <Box p='4px' borderRadius='5px' bg='#00788e'>
                        GHULAM NABI AZAD QUITS CONGRESS
                    </Box>
                    <Box p='4px' borderRadius='5px' h='28px' bg='#00788e'>
                        CJI N V RAMANA APOLOGISES
                    </Box>
                    <Box p='4px' borderRadius='5px' h='28px' bg='#00788e'>
                        GOA'S 'CURLIES' BACK IN LIMELIGHT
                    </Box>
                    <Box p='4px' borderRadius='5px' h='28px' bg='#00788e'>
                        DH PHOTO GALLERIES
                    </Box>
                </HStack>
            </Box>

            {/* *********************************************** */}


            <Box bg='#f6f6f6' p='10px' border={'1px solid'} padding='25px'>
                <Box ml='40px' fontSize={'13px'} lineHeight='25px' color='black' gap='25px' display='flex' textAlign='left'>
                    <Box width={'295px'}>
                        <Text className="listitem" color={'gray.700'} fontWeight={'bold'}>DH PICKS</Text>
                        <Divider fontWeight={'bolder'} orientation='horizontal' />
                        <ul >
                            <Text className="listitem">After Congress exit, buzz over Azad floating new party</Text>
                            <Text className="listitem">UGC declares 21 varsities as 'fake'; maximum in Delhi</Text>
                            <Text className="listitem">Strict digital lending rules to see pushback from firms</Text>
                            <Text className="listitem">WhatsApp privacy policy forces users into agreement: HC</Text>
                            <Text className="listitem">I'm sorry: CJI on lack of attention to listing of cases</Text>
                            <Text className="listitem">'Khokha' vs 'dhokha': AAP, BJP fight it out in Assembly</Text>
                            <Text className="listitem">FIFA lifts AIFF ban, clearing decks for women's U-17 WC</Text>
                            <Text className="listitem">Varanasi ghats submerged, cremation on streets, terrace</Text>


                        </ul>
                    </Box>
                    <Box width={'295px'}>
                        <Text className="listitem" color={'gray.700'} fontWeight={'bold'}>LATEST STORIES</Text>
                        <Divider orientation='horizontal' />

                        <ul>
                            <Text className="listitem">Assam vs Delhi schools: Kejriwal, Himanta spar online</Text>
                            <Text className="listitem">UGC declares 21 varsities as 'fake'; maximum in Delhi</Text>
                            <Text className="listitem">US suspends Chinese airline flights in Covid-19 dispute</Text>
                            <Text className="listitem">Air India to restore staff salaries to pre-Covid level</Text>
                            <Text className="listitem">Two earthquakes in 40 minutes jolt Jammu and Kashmir</Text>
                            <Text className="listitem">Aniruddha: They never heard my side of the story</Text>
                            <Text className="listitem">Anand Rao: I loved translating ‘Dance Like a Man’</Text>


                        </ul>
                    </Box>
                    <Box width={'295px'}>
                        <Text className="listitem" color={'gray.700'} fontWeight={'bold'}>TRENDING NEWS</Text>
                        <Divider orientation='horizontal' />

                        <ul>
                            <Text className="listitem">'Back-breaking' flyover closed a week after launch</Text>
                            <Text className="listitem">Person who retires has no value in country: CJI</Text>
                            <Text className="listitem">Woman sexually abused for 7 years by Bengaluru couple</Text>
                            <Text className="listitem">B'luru: Newlywed killed in accident, husband critical</Text>
                            <Text className="listitem">Russia slams Quad after India defends it</Text>
                            <Text className="listitem">Azad's exit brings frozen J&K politics into focus</Text>
                            <Text className="listitem">RBI reviews economic situation ahead of GDP data</Text>
                        </ul>
                    </Box>
                    <Box height='400px'>
                        <Divider orientation='vertical' />
                    </Box>
                    <Box width={'150px'} lineHeight='30px'>
                        <Text className="listitem" color={'gray.700'} fontWeight={'bold'}>DOWNLOAD DH APP</Text>
                        <Divider orientation='horizontal' />

                        <Flex gap='15px' m='10px'>
                            <Image src='https://www.deccanherald.com/sites/deccanherald.com/modules/dynamicfooter/images/android.svg' />
                            <Image src='https://www.deccanherald.com/sites/deccanherald.com/modules/dynamicfooter/images/ios.svg' />
                        </Flex>

                        <Text className="listitem" fontWeight={'bold'}>SERVICES</Text>
                        <Divider orientation='horizontal' />

                        <Flex display={'flex'} gap='10px'>
                            <Text className="listitem">About</Text>
                            <Text className="listitem">Epaper</Text>
                            <Text className="listitem">Archives</Text>
                            <Text className="listitem">Sitemap</Text>
                        </Flex>
                        <Flex gap='15px'>
                            <Text className="listitem">Archives</Text>
                            <Text className="listitem">Sitemap</Text>
                        </Flex>

                        <Text className="listitem" fontWeight={'bold'}>OUR GROUP SITES</Text>
                        <Divider orientation='horizontal' />

                        <Flex display={'flex'} gap='10px'>
                            <Text className="listitem">Printers_Mysore</Text>
                            <Text className="listitem">Prajavani</Text>
                            <Text className="listitem">Sudha</Text>
                        </Flex>
                        <Flex gap='15px'>
                            <Text className="listitem">Mayura </Text>
                            <Text className="listitem">Exam_Mastermind</Text>
                        </Flex>

                        <Box lineHeight='22px' w='180px' fontSize={'13px'} color='gray.400'>
                            <Box className="listitem"> Privacy-Policy</Box>
                            <Box className="listitem">Terms</Box>
                            <Box className="listitem">Disclaimer</Box>
                            <Box className="listitem">Grievance Redressal</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Grid p='7px' width='100%' templateColumns='repeat(5, 1fr)' gap={'280px'} bg='#0087a8'>
                <GridItem ml='60px' fontSize={'14px'} color='white' colSpan={2}  >
                    <Text>© 2022 The Printers (Mysore) Private Ltd.</Text>
                </GridItem >
                <GridItem colStart={4} colEnd={6} ml='190px'>
                    <Flex gap='10px'>
                        <Link href='https://www.facebook.com/deccanherald/'><Image w='16px' bg='#0087a8' src='https://www.deccanherald.com/sites/deccanherald.com/modules/dynamicfooter/images/fb-white.svg' /></Link>
                        <Link href='https://twitter.com/deccanherald/'> <Image w='16px' bg='#0087a8' src='https://www.deccanherald.com/sites/deccanherald.com/modules/dynamicfooter/images/twit-white.svg' /></Link>
                        <Link href='https://www.instagram.com/deccanherald/' >  <Image w='16px' bg='#0087a8' src='https://www.deccanherald.com/sites/deccanherald.com/modules/dynamicfooter/images/insta-white.svg' /></Link>
                        <Link href='https://www.youtube.com/channel/UCHDXXHPrz-1GVbK_qk82hBQ'  > <Image w='16px' bg='#0087a8' src='https://www.deccanherald.com/sites/deccanherald.com/modules/dynamicfooter/images/youtube-white.svg' /></Link>
                    </Flex>
                </GridItem >
            </Grid>
        </>
    )
}