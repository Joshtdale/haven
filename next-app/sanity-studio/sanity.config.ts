import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { deskStructure } from './deskStructure'

const config = defineConfig({
  name: 'default',
  title: 'sanity-studio',

  projectId: 'ib1ciqv7',
  dataset: 'production',

  basePath: '/studio',

  plugins: [structureTool({ structure: deskStructure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

export default config
