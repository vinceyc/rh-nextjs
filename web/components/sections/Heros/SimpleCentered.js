import React from 'react';
import PropTypes from 'prop-types'
import SimpleBlockContent from '../../SimpleBlockContent'

import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Button,
  HStack,
} from '@chakra-ui/react';

function SimpleCentered(props) {
    const { subtext, heading, description, ctas } = props;
    
    return (
      <Flex px={4} py={32} mx='auto'>
        <Box mx='auto' w={{ lg: 8 / 12, xl: 5 / 12 }}>
          <chakra.p
            mb={2}
            fontSize='xs'
            fontWeight='semibold'
            letterSpacing='wide'
            color='gray.400'
            textTransform='uppercase'
          >
            {subtext}
          </chakra.p>
          <chakra.h1
            mb={3}
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight='bold'
            lineHeight='shorter'
            color={useColorModeValue('gray.900', 'white')}
          >
            {heading}
          </chakra.h1>

        {
            description && 
            <chakra.p mb={5} color='gray.500' fontSize={{ md: 'lg' }}>
                <SimpleBlockContent blocks={description} />
            </chakra.p>
        }
          <HStack>
            <Button
              as='a'
              w={{ base: 'full', sm: 'auto' }}
              variant='solid'
              colorScheme='brand'
              size='lg'
              mb={{ base: 2, sm: 0 }}
              cursor='pointer'
            >
              Call to Action
            </Button>
            <Button
              as='a'
              w={{ base: 'full', sm: 'auto' }}
              mb={{ base: 2, sm: 0 }}
              size='lg'
              cursor='pointer'
            >
              Read our blog
            </Button>
          </HStack>
        </Box>
      </Flex>
    );
  };

  SimpleCentered.propTypes = {
    subtext: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.object)
}

export default SimpleCentered;