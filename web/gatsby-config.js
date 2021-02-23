require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const config = require('./config')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

// Get Sanity config
const {
  api: { projectId, dataset }
} = requireConfig('../studio/sanity.json')

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    pathPrefix,
    title: config.siteTitle,
    titleAlt: config.siteTitleAlt,
    description: config.siteDescription,
    logo: config.siteLogo,
    defaultBanner: config.banner,
    headline: config.siteHeadline,
    siteLanguage: config.siteLanguage,
    ogLanguage: config.ogLanguage,
    author: config.author,
    twitter: config.userTwitter,
    facebook: config.ogSiteName,
    gatsbyStorefrontConfig: {
      storeName: 'eOn mist™',
      storeDescription:
        'eOn is professional-grade hand sanitation and disinfectant, for everyone.',
      email: 'hello@eonmist.com',
      logoUrl: '',
      company: 'eOn mist™',
      location: 'Wilmington, DE',
      address: '427 N Tatnall St # 85923',
      phone: '+1 (800) 123-1234',
      workingDays: 'Mon - Fri',
      workingHours: '8AM - 6PM',
      socialNetworks: [],
      payments: [],
      // For available socia share buttons see: https://github.com/nygardk/react-share
      shareButtons: [],
      googleAnalyticsId: config.googleMeasurementID,
      isShopifyLite: false,
      gatsbyImageProps: {},
      //
      // Main page types: "carousel", "collection", "product"
      //
      mainPage: [],
      // Menu types: "header", "collection", "product", "link"
      menu: {},
      footerLinks: [],
      locales: 'en-US',
      currency: 'USD',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6'
    }
  },
  flags: { PRESERVE_WEBPACK_CACHE: true, FAST_REFRESH: true, FAST_DEV: true },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-5KBCX6Z',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' }

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
    'gatsby-plugin-loadable-components-ssr',
    'gatsby-plugin-netlify',
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-netlify-headers`,
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop. This is required.
        shopName: process.env.GATSBY_SHOP_NAME,
        // An API access token to your Shopify shop. This is required.
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        // Set verbose to true to display a verbose output on `npm run develop`
        // or `npm run build`. This prints which nodes are being fetched and how
        // much time was required to fetch and process the data.
        // Defaults to true.
        verbose: true
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId,
        dataset,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.GATSBY_SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'config',
        path: `${__dirname}/config`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.GATSBY_INSTA_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#4073b2',
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'src/favicon.png'
      }
    }
  ]
}

/**
 * We're requiring a file in the studio folder to make the monorepo
 * work "out-of-the-box". Sometimes you would to run this web frontend
 * in isolation (e.g. on codesandbox). This will give you an error message
 * with directions to enter the info manually or in the environment.
 */

function requireConfig(path) {
  try {
    return require('../studio/sanity.json')
  } catch (e) {
    console.error(
      'Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js'
    )
    return {
      api: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID || '',
        dataset: process.env.GATSBY_SANITY_DATASET || ''
      }
    }
  }
}
