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
                  buildHookId: '5f6efc5f998ac421a96430b9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-n37h1bkr',
                  apiId: '95674d42-4379-43e1-8cf1-16a7ab2ff70e'
                },
                {
                  buildHookId: '5f6efc5f879ac70d4ed4338d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-x3it6c8a',
                  apiId: 'b3e26531-29c3-4119-88ad-9355d262d7bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prettydev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-x3it6c8a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
