import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../../SimpleBlockContent'
import Cta from '../../Cta'

import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  HStack
} from '@chakra-ui/react'

function SimpleCentered(props) {
  const { subtext, heading, description, ctas } = props
  
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

        {description && (
          <chakra.div mb={5} color='gray.500' fontSize={{ md: 'lg' }}>
            <SimpleBlockContent blocks={description} />
          </chakra.div>
        )}

        {ctas && (
          <HStack>
            {ctas.map(cta => (
              <Cta {...cta} key={cta._key} />
            ))}
          </HStack>
        )}
      </Box>
    </Flex>
  );
};

SimpleCentered.propTypes = {
  subtext: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.object),
  ctas: PropTypes.arrayOf(PropTypes.object)
}

export default SimpleCentered