export default {
    type: 'object',
    name: 'heroSimpleCentered',
    title: 'Hero - Simple Centered',
    fields: [
      {
        name: 'subtext',
        type: 'string',
        title: 'Subtext',
      },
      {
        name: 'heading',
        type: 'string',
        title: 'Heading',
      },
      {
        name: 'description',
        type: 'portableText',
        title: 'Description',
      },
      {
        name: 'ctas',
        type: 'array',
        title: 'Call to actions',
        of: [
          {
            title: 'Call to action',
            type: 'cta',
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'heading',
        heading: 'heading',
        media: 'backgroundImage',
      },
      prepare({ title, heading, media }) {
        return {
          title: `${heading}`,
          subtitle: 'Hero section - Simple Centered',
          media,
        };
      },
    },
  };  