export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61de3ede72f7318b9810bb5b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-e8t3n8iw',
                  apiId: '48a6cb28-fa61-4d48-b0d0-67d6c84e2a17'
                },
                {
                  buildHookId: '61de3ede50297e82f296d331',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-crrju1ci',
                  apiId: 'cac56186-fc0b-487a-b8de-8e5afa8a6667'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vinceyc/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-crrju1ci.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
