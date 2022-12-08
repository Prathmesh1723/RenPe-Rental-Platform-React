import React from 'react'
import { Link } from 'react-router-dom';
import Image  from 'react';
import {Flex, Box, Text, Button, Img} from '@chakra-ui/react';
import { baseUrl, fetchApi} from '../../utils/fetchApi';
import { useEffect, useState } from "react";
import Property from '../../components/property/property';
import NProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import Search from '../search/search';


const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
        <img src={imageUrl} width="500" height="500" alt="banner"/>
        <Box p='5'>
            <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
            <Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
            <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br/>{desc2}</Text>
            <Button fontSize="xl" bg="blue.300" color="white">
                <Link href={linkName}>{buttonText}</Link>
            </Button>
        </Box>
    </Flex>
)
 
function Rent(myRental) {

    const [rental, setrental] = useState([]);

    const getRent = () => {
        fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
        .then((response) => {
            console.log(response.hits);
            setrental(response.hits);
        });
    };
    // useEffect(() => {
    //         const newData = fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`).then((res) => res.json())
    //         .then((data) => {
    //           setrental(propertyForRent);
    //         });
    //         console.log(newData);
    // }, []);

    useEffect(() => getRent(),[]);
    

  return (
    <div>
        <h1>RENT</h1>
        <br/>
        <br/>
        <br/>
        <Banner 
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Routing"
        linkName="/search?purpose=for-rent"
        imageUrl="https://managecasa.com/wp-content/uploads/2020/04/shutterstock_apartment-building-lowres-964x460.jpg"
        />
        <ChakraProvider>
            <Layout>
    <Flex flexWrap="wrap">
        {rental.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
    </Layout>
    </ChakraProvider>
    </div>
  )
}


export default Rent