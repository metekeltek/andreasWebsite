module.exports = {
  SiteTitle: 'Babymassage mit ',
  Sitelogo: '#',
  SiteLogoText: 'Babymassage mit',
  SiteAuthor: 'Andrea Schröder-Aydincioglu',
  SiteDescription: 'Babymassagen',
  defaultDescription: 'Babymassagen', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {
    linkedin: 'https://www.linkedin.com/in/metekeltek/',
  },
  SiteAddress: {
    city: 'Lippstadt',
    region: 'region',
    country: 'Deutschland',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'andrea.schroeder0879as@gmail.com',
    phone: 'phone number',
  },
  SiteCopyright: '2020',
};
