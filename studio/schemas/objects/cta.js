export default {
  title: 'Call to action',
  name: 'cta',
  type: 'object',
  groups: [
    {
      name: 'button',
      title: 'Button Properties',
    }
  ],
  validation: Rule =>
    Rule.custom(
      (fields = {}) =>
        !fields.route || !fields.link || 'Only one link type is allowed'
    ),
  fieldsets: [
    {
      title: 'Link',
      name: 'link'
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Button Style',
      name: 'variant',
      type: 'string',
      group: 'button',
      options: {
        list: [  // these values will be the only available options
          {value: 'solid', title: 'Solid'},
          {value: 'outline', title: 'Outline'},
          {value: 'ghost', title: 'Ghost'},
          {value: 'link', title: 'Link'}
        ],
        layout: 'dropdown' // <-- defaults to 'dropdown' with a list of values
      },
      initialValue: {value: 'solid', title: 'Solid'}
    },
    {
      title: 'Button Size',
      name: 'size',
      type: 'string',
      group: 'button',
      options: {
        list: [  // these values will be the only available options
          {value: 'xs', title: 'Very Small'},
          {value: 'sm', title: 'Small'},
          {value: 'md', title: 'Medium'},
          {value: 'lg', title: 'Large'}
        ],
        layout: 'dropdown' // <-- defaults to 'dropdown' with a list of values
      },
      initialValue: 'md'
    },
    {
      title: 'Internal link',
      description: 'Use this to link between pages on the website',
      name: 'route',
      type: 'reference',
      to: [{ type: 'route' }],
      fieldset: 'link',
    },
    {
      title: 'External link',
      name: 'link',
      type: 'url',
      fieldset: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title',
      routeTitle: 'route.title',
      slug: 'route.slug.current',
      link: 'link'
    },
    prepare({ title, routeTitle = '', slug, link }) {
      const subtitleExtra = slug
        ? `Slug :/${slug}/`
        : link
        ? `External link: ${link}`
        : 'Not set';
      return {
        title: `${title}`,
        subtitle: `${routeTitle} ${subtitleExtra}`,
      };
    },
  },
};
