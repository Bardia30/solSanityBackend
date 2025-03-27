import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'Sol School of Music Studio',

  projectId: 'z8bvzs6b',
  dataset: 'production',
  apiVersion: '2025-03-24',

  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: '2025-03-24' }),
  ],

  schema: {
    types: schemaTypes,
  },
})