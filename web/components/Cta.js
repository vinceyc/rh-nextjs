import React from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { Button, Link as ChakraLink } from '@chakra-ui/react'

function cta (props) {
  const {title, route, link, variant, size} = props

  if (route && route.slug && route.slug.current) {
    return (
      <NextLink
        href={{
          pathname: '/LandingPage',
          query: {slug: route.slug.current}
        }}
        as={`/${route.slug.current}`}
      >
        <Button
          variant={variant}
          size={size}
          colorScheme='brand'
          w={{ base: 'full', sm: 'auto' }}
          mb={{ base: 2, sm: 0 }}
          cursor='pointer'
        >
          {title}
        </Button>
      </NextLink>
    )
  }

  if (link) {
    return (
      <NextLink href={link} passHref>
        <ChakraLink style={{ textDecoration: 'none' }}>
          <Button
            variant={variant}
            size={size}
            colorScheme='brand'
            w={{ base: 'full', sm: 'auto' }}
            mb={{ base: 2, sm: 0 }}
            cursor='pointer'
          >
            {title}
          </Button>
        </ChakraLink>
      </NextLink>
    )
  }

  return (
    <Button
      variant={variant}
      size={size}
      as='a'
      w={{ base: 'full', sm: 'auto' }}
      colorScheme='brand'
      mb={{ base: 2, sm: 0 }}
      cursor='pointer'
    >
      {title}
    </Button>
  )
}

cta.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string
    })
  }),
  link: PropTypes.string
}

export default cta
