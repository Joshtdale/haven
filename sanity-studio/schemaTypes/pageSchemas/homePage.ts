import { defineField, defineType } from "sanity";

export const HomePage = defineType({
    name: 'homePage',
    type: 'document',
    title: 'Home Page',
    fields: [
        defineField({
            name: 'page',
            type: 'page',
            title: 'Page'
        })
    ],});