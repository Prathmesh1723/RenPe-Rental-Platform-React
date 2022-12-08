import { Link } from 'react-router-dom';
import {Flex, Box, Text, Avatar} from '@chakra-ui/react';
// import {FaBed, FaBath} from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faBed} from '@fortawesome/free-solid-svg-icons';
import '../../fontawesome';
import { BsGridFill } from 'react-icons/bs';
import {GoVerified } from 'react-icons/go';
import millify from 'millify';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID  } }) => (
    <Link href={`/property/${externalID}`} passHref>
      <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
        <Box>
          <img src={coverPhoto ? coverPhoto.url : "assets/house3.jpg"} width={400} height={260} />
        </Box>
        <Box w='full'>
          <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center'>
              <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
              <Text fontWeight='bold' fontSize='lg'>AED {price}{rentFrequency && `/${rentFrequency}`}</Text>
            </Flex>
            <Box>
              <Avatar size='sm' src={agency?.logo?.url}></Avatar>
            </Box>
          </Flex>
          <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
            {rooms}
            <FontAwesomeIcon icon= "fa-bed"/> | {baths} | {millify(area)} sqft <BsGridFill />
          </Flex>
          <Text fontSize='lg'>
            {title.length > 30 ? title.substring(0, 30) + '...' : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
  
  export default Property;