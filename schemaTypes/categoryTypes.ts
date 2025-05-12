// sanity/schemas/category.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Category Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Category Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Visual representation of the category',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'filterKey',
            title: 'Filter Key',
            type: 'string',
            description: 'Key used to filter products by this category',
            validation: (Rule) => Rule.required(),
        }),
    ],
})
