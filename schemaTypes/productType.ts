import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        // Basic info
        defineField({ name: 'name', title: 'Product Name', type: 'string' }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 },
        }),
        // New classification fields
        defineField({
            name: 'mainCategory',
            title: 'Main Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Guitar', value: 'guitar' },
                    { title: 'Violin', value: 'violin' },
                    { title: 'Piano', value: 'piano' },
                    { title: 'Persian Instruments', value: 'persian-instruments' },
                    { title: 'Book', value: 'book' },
                    { title: 'Accessories', value: 'accessories' },
                ],
                layout: 'dropdown',
            },
        }),
        defineField({
            name: 'brand',
            title: 'Brand',
            type: 'string',
            options: {
                list: [
                    { title: 'ARS', value: 'ars' },
                    { title: 'Stentor', value: 'stentor' },
                    { title: 'Alhambra', value: 'alhambra' },
                    { title: 'Yamaha', value: 'yamaha' },
                    { title: 'Persian', value: 'persian' },
                    { title: 'AIM', value: 'aim' },
                    
                ],
                layout: 'dropdown',
            },
        }),
        defineField({
            name: 'subCategory',
            title: 'Sub-Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Classical Guitar', value: 'classical-guitar' },
                    { title: 'Electric Guitar', value: 'electric-guitar' },
                    { title: 'Acoustic Guitar', value: 'acoustic-guitar' },
                    { title: 'Student Violin', value: 'student-violin' },
                    { title: 'Professional Violin', value: 'professional-violin' },
                    { title: 'Digital Piano', value:'digital-piano' },
                    { title: 'Guitar Amp', value:'guitar-amp' },
                    { title: 'Setar', value:'setar' },
                    { title: 'Tar', value:'tar' },
                ],
                layout: 'dropdown',
            },
        }),
        // Legacy field (hidden)
        defineField({
            name: 'category',
            title: 'Legacy Category',
            type: 'string',
            hidden: true,
        }),
        // Images
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
        }),
        // Base pricing (if no variants)
        defineField({
            name: 'price',
            title: 'Base Price',
            type: 'number',
            description: 'Price if no variants are specified',
        }),
        defineField({
            name: 'quantity',
            title: 'Quantity',
            type: 'number',
            description: 'Available stock quantity (if not using variants)',
        }),
        // Ratings and reviews
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
            description: 'Rating out of 5',
        }),
        defineField({
            name: 'reviews',
            title: 'Reviews',
            type: 'number',
            description: 'Number of reviews',
        }),
        // Description and extra info
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'availableSizes',
            title: 'Available Sizes',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'availableColors',
            title: 'Available Colors',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List of color options (if not using variants)',
        }),
        // Variants for different configurations
        defineField({
            name: 'variants',
            title: 'Variants',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Variant Name',
                            type: 'string',
                            description: 'For example: Cedar top, Spruce top',
                        }),
                        defineField({
                            name: 'price',
                            title: 'Variant Price',
                            type: 'number',
                            description: 'Price for this variant',
                        }),
                        defineField({
                            name: 'quantity',
                            title: 'Variant Quantity',
                            type: 'number',
                            description: 'Available stock for this variant',
                        }),
                    ],
                    preview: {
                        select: { title: 'name', subtitle: 'price' },
                    },
                },
            ],
            description: 'Define product variations with distinct pricing and stock',
        }),
        // Additional information
        defineField({
            name: 'details',
            title: 'Details',
            type: 'text',
        }),
        defineField({
            name: 'shipping',
            title: 'Shipping Information',
            type: 'text',
        }),
        defineField({
            name: 'returns',
            title: 'Returns Policy',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'images.0',
            subtitle: 'mainCategory',
        },
    },
});