import { MdHighlight } from "react-icons/md";

export default {
  name: 'instagram',
  title: 'Instagram',
  type: 'document',
  icon: MdHighlight,
  liveEdit: false,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'figure',
      title: 'Figure',
      type: 'figure'
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'blockText'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'For ordering the list',
      type: 'datetime',
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      image: 'figure'
    },
    prepare ({ title = 'No title', publishedAt, image }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : 'Missing publishing date',
        media: image
      }
    }
  }
}
