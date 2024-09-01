import { defineField, defineType } from "sanity";
import { isUniqueAcrossAllDocuments } from "../../lib/isUniqueAcrossAllDocuments";

export const Page = defineType({
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
              isUnique: isUniqueAcrossAllDocuments
            }
        })
    ]
})