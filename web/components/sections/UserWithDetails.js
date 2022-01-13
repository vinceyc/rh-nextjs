import React from 'react';
import {
  chakra,
  Box,
  Image,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'

import { MdHeadset, MdEmail, MdLocationOn } from 'react-icons/md';
import { BsFillBriefcaseFill } from 'react-icons/bs';

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

function UserWithDetails (props) {
  const {heading, backgroundImage, tagline} = props

  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={50}
      w='full'
      alignItems='center'
      justifyContent='center'
    >
      <Box
        w='sm'
        mx='auto'
        bg={useColorModeValue('white', 'gray.800')}
        shadow='lg'
        rounded='lg'
        overflow='hidden'
      >
        <Image
          w='full'
          h={56}
          fit='cover'
          objectPosition='center'
          src={urlFor(backgroundImage)
            .width(2000)
            .auto('format')
            .url()}
          alt='avatar'
        />

        <Flex alignItems='center' px={6} py={3} bg='gray.900'>
          <Icon as={MdHeadset} h={6} w={6} color='white' />

          <chakra.h1 mx={3} color='white' fontWeight='bold' fontSize='lg'>
            Focusing
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          <chakra.h1
            fontSize='xl'
            fontWeight='bold'
            color={useColorModeValue('gray.800', 'white')}
          >
            {heading}
          </chakra.h1>

          <chakra.p py={2} color={useColorModeValue('gray.700', 'gray.400')}>
            static text
          </chakra.p>

          <div>{tagline && <SimpleBlockContent blocks={tagline} />}</div>

          <Flex
            alignItems='center'
            mt={4}
            color={useColorModeValue('gray.700', 'gray.200')}
          >
            <Icon
              as={BsFillBriefcaseFill}
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h1 px={2} fontSize='sm'>
              Choc UI
            </chakra.h1>
          </Flex>

          <Flex
            alignItems='center'
            mt={4}
            color={useColorModeValue('gray.700', 'gray.200')}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize='sm'>
              California
            </chakra.h1>
          </Flex>
          <Flex
            alignItems='center'
            mt={4}
            color={useColorModeValue('gray.700', 'gray.200')}
          >
            <Icon as={MdEmail} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize='sm'>
              patterson@example.com
            </chakra.h1>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

UserWithDetails.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array
}

export default UserWithDetails