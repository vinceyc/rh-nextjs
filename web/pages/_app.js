import React from 'react'
import BaseApp from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

import client from '../client'

// import 'normalize.css'
import '../styles/shared.module.css'
import '../styles/layout.css'

const siteConfigQuery = `
  *[_id == 'global-config'] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      'title': page->title
    },
    footerNavigation[] -> {
      ...,
      'title': page->title
    }
  }[0]
  `

// Chakra UI Theming
const colors = {
  brand: {
    '50': '#E9F7FB',
    '100': '#C1E9F5',
    '200': '#9ADBEF',
    '300': '#72CCE8',
    '400': '#4BBEE2',
    '500': '#23B0DC',
    '600': '#1C8DB0',
    '700': '#156A84',
    '800': '#0E4658',
    '900': '#07232C'
  }
}

const theme = extendTheme({ colors })

class App extends BaseApp {
  static async getInitialProps ({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Add site config from sanity
    return client.fetch(siteConfigQuery).then(config => {
      if (!config) {
        return {pageProps}
      }
      if (config && pageProps) {
        pageProps.config = config
      }

      return {pageProps}
    })
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    )
  }
}

export default App
