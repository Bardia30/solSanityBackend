// sanity/schemas/brand.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'brand',
    title: 'Brand',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Brand Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'logo',
            title: 'Logo Image',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required()
        }),
        // optional: if you want a custom filter-key not just slug:
        defineField({
            name: 'filterKey',
            title: 'Filter Key',
            type: 'string',
            description: 'Matches product.brand or other query param',
            validation: (Rule) => Rule.required()
        }),
    ]
})