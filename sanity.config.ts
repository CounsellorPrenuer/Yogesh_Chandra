import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schema'

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xhb8i5d7',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'CareerAI Studio',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
