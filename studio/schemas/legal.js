import { MdHighlight } from "react-icons/md";

export default {
  name: 'legal',
  title: 'Legal stuff',
  type: 'document',
  icon: MdHighlight,
  liveEdit: false,
  fields: [
    {
      name: 'terms',
      title: 'Terms of Service',
      type: 'terms'
    },
    {
      name: 'privacy',
      title: 'Privacy Policy',
      type: 'privacy'
    },
    {
      name: 'returns',
      title: 'Returns',
      type: 'returns'
    },
  ]
}
