import { MdHighlight } from "react-icons/md";

export default {
  name: 'retailer',
  title: 'Retailer',
  type: 'document',
  icon: MdHighlight,
  liveEdit: false,
  fields: [
    {
      name: 'retailer',
      title: 'Retailer',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'figure',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'For ordering the list',
      type: 'datetime',
    }
  ]
}
