import { Box, Container, MenuButton, Menu, HStack, Image, Stack, Text, IconButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon, Search2Icon } from "@chakra-ui/icons"
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <Box>
            <Box ml={"90px"}>
                <Image boxSize='130px' src='https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/logo/d-logo-new.svg'
                    alt='Dan Abramov' />
            </Box>

            <Box display={"flex"}>
                <HStack ml={"195px"} mt={"-50px"} fontWeight={"bold"} fontSize={"11px"} spacing='-12px'>
                    <Box w='210px' color='gray.600'>
                        <Text>WEDNESDAY 24 AUG 2022</Text>
                    </Box>
                    <Box w='170px' color='gray.600'>
                        <Text ml={"-75px"}>UPDATED: 4:39 PM IST</Text>
                    </Box>
                    <Box w='80px' color='gray.600'>
                        <Text ml={"-115px"}>E-PAPER</Text>
                    </Box>
                    <Box w='90px' color='gray.600'>
                        <Text ml={"-130px"}>CLASSIFIEDS</Text>
                    </Box>
                </HStack>



                <HStack mt={"-50px"} fontWeight={"bold"} fontSize={"11px"} spacing='8px'>
                    <Box mt={"-4px"} >
                        <Image boxSize='13px' src='https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/weather/04d.svg'
                            alt='weather-icon' />
                    </Box>
                    <Box color='gray.600'>
                        <Text> BLR 27 ° C Clouds</Text>
                    </Box>
                    <Box color='gray.600'>
                        <Text >Sensex: 59085.43+54.13</Text>
                    </Box>
                    <Box mt={"-100px"}>
                        <Image boxSize='12px' src='https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/up-arrow.svg'
                            alt='up-icon' />
                    </Box>
                    <Box color='gray.600'>
                        <Text >Nifty: 17604.95+27.45</Text>
                    </Box>
                    <Box mt={"-100px"}>
                        <Image boxSize='12px' src='https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/up-arrow.svg'
                            alt='up-icon' />
                    </Box>
                    <Box mt={"-100px"} >
                        <Image ml={"20px"} boxSize='16px' src='https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/fb-nav.svg'
                            alt='facebook-icon' />
                    </Box>
                    <Box mt={"-100px"}>
                        <Image boxSize='16px' src='https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/twitter-nav.svg'
                            alt='twitter-icon' />
                    </Box>
                    <Box mt={"-100px"}>
                        <Image boxSize='16px' src='https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/ig-nav.svg'
                            alt='insta-icon' />
                    </Box>
                </HStack>
            </Box>

            <HStack fontSize='sm' height='32px' color="white" bg='#0087a8' spacing='15px'>
                <Box ml={"75px"} width='30px' color="white">
                    <Menu>
                        <MenuButton height='29px'
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                    </Menu>
                </Box>
                <Box bg='#0087a8'>
                    <Menu >
                        <Link to="/" ><MenuButton as={Text} rightIcon={<ChevronDownIcon />}>Home</MenuButton></Link>
                    </Menu>
                </Box>
                <Box >
                <Menu >
                       <MenuButton as={Text} rightIcon={<ChevronDownIcon />}>Bengaluru</MenuButton>
                        
                        <MenuList bg='#0087a8'>
                            <MenuItem>Top Stories</MenuItem>
                            <MenuItem>Crime</MenuItem>
                            <MenuItem>Politics</MenuItem>
                            <MenuItem>Infrastructure</MenuItem>
                            <MenuItem>Life In The City</MenuItem>
                            <MenuItem>Bengaluru 2040</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Menu >
                        <MenuButton as={Text} rightIcon={<ChevronDownIcon />}>Karnataka</MenuButton>
                        
                        <MenuList bg='#0087a8'>
                            <MenuItem>Top Stories</MenuItem>
                            <MenuItem>Politics</MenuItem>
                            <MenuItem>Districts</MenuItem>
                            <MenuItem>22in22</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Menu >
                        <MenuButton as={Text} rightIcon={<ChevronDownIcon />}>National</MenuButton>
                        
                        <MenuList bg='#0087a8'>
                        <Link to="/national" > <MenuItem>Politics</MenuItem></Link>
                            <MenuItem>Coronavirus</MenuItem>
                            <MenuItem>North and Central</MenuItem>
                            <MenuItem>East and Northeast</MenuItem>
                            <MenuItem>South</MenuItem>
                            <MenuItem>West</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Menu >
                        <MenuButton as={Text} rightIcon={<ChevronDownIcon />}>Sports</MenuButton>
                        
                        <MenuList bg='#0087a8'>
                        <Link to="/" ><MenuItem>Cricket</MenuItem></Link>
                            <MenuItem>Football</MenuItem>
                            <MenuItem>Tennis</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Sportscene</MenuItem>

                            <MenuItem>Other Sports</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Menu >
                        <MenuButton as={Text} rightIcon={<ChevronDownIcon />}>Business</MenuButton>
                        
                        <MenuList bg='#0087a8'>
                        <Link to="/" ><MenuItem>Business News</MenuItem></Link>
                            <MenuItem>Family Finance</MenuItem>
                            <MenuItem>Technology</MenuItem>
                            <MenuItem>DH Wheels</MenuItem>
                            <MenuItem>Budget 2022</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Menu >
                        <MenuButton as={Text} rightIcon={<ChevronDownIcon />}>Opinion</MenuButton>
                        
                        <MenuList bg='#0087a8'>
                        <Link to="/" ><MenuItem>DH Views</MenuItem></Link>
                            <MenuItem>Editorials</MenuItem>
                            <MenuItem>Panorama</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Comment</MenuItem>
                            <MenuItem>In Perspective</MenuItem> 
                            <MenuItem>Right in the Middle </MenuItem> 
                              
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Menu >
                        <MenuButton as={Text} rightIcon={<ChevronDownIcon />}>Features</MenuButton>
                        
                        <MenuList bg='#0087a8'>
                        <Link to="/" ><MenuItem>Metrolife</MenuItem></Link>
                            <MenuItem>Entertainment</MenuItem>
                            <MenuItem>Travel</MenuItem>
                            <MenuItem>Spectrum</MenuItem>
                            <MenuItem>Sunday Herald</MenuItem>
                            <MenuItem>Living</MenuItem>
                            <MenuItem>DH Education</MenuItem>

                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Menu >
                       <MenuButton as={Text} rightIcon={<ChevronDownIcon />}>Videos</MenuButton>
                        
                        <MenuList bg='#0087a8'>
                        <Link to="/" ><MenuItem>Latest Videos</MenuItem></Link>
                            <MenuItem>Bengaluru</MenuItem>
                            <MenuItem>Karnataka</MenuItem>
                            <MenuItem>People</MenuItem>
                            <MenuItem>Popular</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Menu >
                        <Link to="/" ><MenuButton as={Text} rightIcon={<ChevronDownIcon />}>Brandspot</MenuButton></Link>
                    </Menu>
                </Box>
                <Box>
                    <Menu >
                        <MenuButton as={Text} rightIcon={<ChevronDownIcon />}>Specials</MenuButton>
                        
                        <MenuList bg='#0087a8'>
                            <MenuItem>Insight</MenuItem>
                            <MenuItem>Point Blank</MenuItem>
                            <MenuItem>Sunday Spotlight</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box fontWeight='10px' textAlign='left' w='110px' lineHeight='15px' height='33px' bg='#f8c242'>
                    <Text fontSize='12px' ml='10px' fontWeight='bold' color="red">New</Text>
                    <Text fontSize='12px' ml='10px' fontWeight='bold' color="black">NewsLetters</Text>
                </Box>
                <Box >
                    <Search2Icon ml={"270px"} />
                </Box>
            </HStack>


            <HStack borderBottom='1px solid #0087a8' bg='#f6f6f6' h='35px' fontSize='14px' spacing='10px'>
                <Box color='#0087a8' fontWeight='bold' ml='45px' w='70px' h='-8px'>
                    <Text>IN BRIEF:</Text>
                </Box>
                <Box w='172px' h='-8px' >
                    <Text>BTS free concert on Oct 15</Text>
                </Box>
                <Box w='182px' h='-8px'>
                    <Text>Disha Patani in Tamil Cinema</Text>
                </Box>
                <Box w='190px' h='-8px'>
                    <Text>Clash outside Maha Assembly</Text>
                </Box>
                <Box w='200px' h='-8px'>
                    <Text>Rage over T'gana MLA remarks</Text>
                </Box>
                <Box w='175px' h='-8px'>
                    <Text>BigB tests positive for Covid</Text>
                </Box>
                <Box w='180px' h='-8px'>
                    <Text>Climate impact visible across</Text>
                </Box>
            </HStack>
        </Box>
    )
}