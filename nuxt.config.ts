import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-graphql-client'
  ],

  runtimeConfig: {
    public: {
      'graphql-client': {
        clients: {
          // starlink: 'https://api.spacex.land/graphql', // process.env.GQL_HOST
          default: 'https://keystone-6-railway-example-production-d917.up.railway.app/api/graphql',
          // github: {
          //   host: 'https://api.github.com/graphql', // process.env.GQL_GITHUB_HOST
          //   token: 'your_access_token', // process.env.GQL_GITHUB_TOKEN & process.env.GQL_GITHUB_TOKEN_NAME
          // },
          // countries: {
          //   host: 'https://countries.trevorblades.com/graphql', // process.env.GQL_COUNTRIES_HOST
          //   token: {
          //     name: 'X-Custom-Auth', // process.env.GQL_COUNTRIES_TOKEN_NAME
          //     value: 'your_access_token' // process.env.GQL_COUNTRIES_TOKEN
          //   }
          // }
        }
      }
    }
  }
})
