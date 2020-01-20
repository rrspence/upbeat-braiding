export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5e254817f9bf74a6ae6a0ab8',
                  title: 'Sanity Studio',
                  name: 'upbeat-braiding-studio',
                  apiId: '8a7b5453-8df9-45e9-8bb0-56ecfeca5ba2'
                },
                {
                  buildHookId: '5e2548172f1507c1b96a995b',
                  title: 'Portfolio Website',
                  name: 'upbeat-braiding',
                  apiId: '2e0cbb83-f665-4629-b561-30bda2213c75'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rrspence/upbeat-braiding',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://upbeat-braiding.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
