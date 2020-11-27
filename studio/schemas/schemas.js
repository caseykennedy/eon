// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import blockText from './blockText'
import figure from './figure'
import instagram from './instagram'
import legal from './legal'
import mainImage from './mainImage'
import privacy from './privacy'
import retailer from './retailer'
import returns from './returns'
import siteSettings from './siteSettings'
import terms from './terms'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.

    blockContent,
    blockText,
    figure,
    instagram,
    legal,
    mainImage,
    privacy,
    retailer,
    returns,
    siteSettings,
    terms,


    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
