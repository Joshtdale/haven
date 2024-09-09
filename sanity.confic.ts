import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

const config = defineConfig({
    projectId: 'ib1ciqv7',
    dataset: 'production',
    title: 'praria-studio',
    basePath: '/studio',
    plugins: [structureTool()]
})

export default config