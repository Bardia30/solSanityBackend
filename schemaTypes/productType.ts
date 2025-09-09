import { defineType, defineField } from 'sanity';


const DEFAULT_RETURN_POLICY = `
<h2 style="margin:0 0 0.5rem;font-size:1.4rem;font-weight:700;">
  Return &amp; Exchange Policy
</h2>

<p style="margin:0 0 1.25rem;font-style:italic;">
  Last updated: May 9, 2025
</p>

<ol style="padding-left:1.25rem;margin:0 0 1.25rem;line-height:1.45;">
  <li style="margin-bottom:1rem;">
    <strong>All Sales Are Final</strong><br />
    Except as noted below, we do not accept returns or exchanges under any circumstance.
  </li>

  <li style="margin-bottom:1rem;">
    <strong>Defective or Damaged Instruments</strong><br />
    We stand behind every instrument we sell. If your instrument arrives with a manufacturer defect
    or is damaged in transit (e.g., a broken pickup on an electric guitar),
    please contact us immediately.<br /><br />

    <u>Eligibility</u>:<br />
    <ul style="margin:0.5rem 0 0.5rem 1.25rem;">
      <li>The defect / damage must be reported within <strong>7&nbsp;days</strong> of delivery.</li>
      <li>You must provide clear photographs or video showing the issue.</li>
    </ul>

    <u>Inspection Requirement</u>:<br />
    Submission of photos or video alone does <em>not</em> guarantee a return or repair.
    All claims are subject to a physical inspection by our certified technician.<br /><br />

    <u>Process</u>:<br />
    <ol style="margin:0.5rem 0 0.5rem 1.25rem;">
      <li>Email <a href="mailto:support@solschoolofmusic.ca">support@solschoolofmusic.ca</a>
          with your order number, a description of the problem, and the visual evidence.</li>
      <li>We’ll review and, if preliminarily approved, issue a prepaid shipping label.</li>
      <li>Ship the instrument back to us for inspection.</li>
      <li>After inspection:
        <ul style="margin:0.25rem 0 0 1.25rem;">
          <li>If approved, we’ll repair the instrument at no cost or replace it with an equivalent model (subject to availability).</li>
          <li>If not approved, the instrument will be returned to you unrepaired and return shipping will be charged to you.</li>
        </ul>
      </li>
    </ol>
  </li>

  <li style="margin-bottom:1rem;">
    <strong>Repairs &amp; Maintenance</strong><br />
    Beyond initial defects, we offer ongoing <em>string replacement and repair services for Tar and Setar</em>.
    These services follow our standard repair rates and turnaround times.
  </li>

  <li style="margin-bottom:1rem;">
    <strong>Non-Defective Instruments</strong><br />
    Instruments that are undamaged and functioning as intended—regardless of buyer’s remorse or change of mind—are
    <strong>not eligible</strong> for return, exchange, refund, or credit.
  </li>

  <li>
    <strong>How to Reach Us</strong><br />
    Email: <a href="mailto:support@solschoolofmusic.ca">support@solschoolofmusic.ca</a><br />
    Phone: 905-508-7888<br />
    Hours: Mon–Fri, 10 AM – 6 PM (EST)
  </li>
</ol>
`.trim()

const DEFAULT_SHIPPING_INFO = 'This item can only be shipped within Canada.'

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    initialValue: {
        returns: DEFAULT_RETURN_POLICY,
        shipping: DEFAULT_SHIPPING_INFO,
    },

    fields: [
        // Basic info
        defineField({ name: 'name', title: 'Product Name', type: 'string' }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 },
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            description: 'Turn on to pin this product at the top of listings',
            initialValue: false,
        }),
        // New classification fields
        defineField({
            name: 'mainCategory',
            title: 'Main Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Classical Guitar', value: 'classical-guitar' },
                    { title: 'Electric Guitar', value: 'electric-guitar' },
                    { title: 'Acoustic Guitar', value: 'acoustic-guitar' },
                    { title: 'Woodwind/Brass', value: 'woodwind-brass' },
                    { title: 'Ukelele', value: 'ukelele' },
                    { title: 'Violin', value: 'violin' },
                    { title: 'Piano', value: 'piano' },
                    { title: 'Amp', value: 'amp' },
                    { title: 'Effect/pedal', value: 'effect-pedal' },
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
                    { title: 'Akord-kvint', value: 'akord-kvint' },
                    { title: 'Jackson', value: 'jackson' },
                    { title: 'Ibanez', value: 'ibanez' },
                    { title: 'Gretsch', value: 'gretsch' },
                    { title: 'Manuel Rodriguez', value: 'manuel-rodriguez' },
                    { title: 'EVH', value: 'evh' },
                    { title: 'Danelectro', value: 'danelectro' },
                    { title: 'Ernie Ball', value: 'ernie-ball' },
                    { title: 'NUVOBand', value: 'nuvoband' },
                    { title: 'Universal Audio', value: 'universal-audio' },
                    { title: 'Blackstar', value: 'blackstar' },
                    { title: 'Line 6', value: 'line6' },
                    { title: 'BeaverCreek', value: 'beavercreek' },
                    { title: 'Alhambra', value: 'alhambra' },
                    { title: 'Yamaha', value: 'yamaha' },
                    { title: 'Zev', value: 'zev' },
                    { title: 'Kun', value: 'kun' },
                    { title: 'pirastro', value: 'pirastro' },
                    { title: 'D\'Addario', value: 'daddario' },
                    { title: 'Strukture', value: 'strukture' },
                    { title: 'Hal Leonard', value: 'hal-leonard' },
                    { title: 'RCM', value: 'rcm' },
                    { title: 'Thomastik-Infeld', value: 'thomastik-infeld' },
                    { title: 'Hill', value: 'hill' },
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
                    { title: 'Ukulele', value: 'ukulele' },
                    { title: 'Student Violin', value: 'student-violin' },
                    { title: 'Professional Violin', value: 'professional-violin' },
                    { title: 'Woodwind/Brass', value: 'woodwind-brass' },
                    { title: 'Digital Piano', value: 'digital-piano' },
                    { title: 'Guitar Accessories', value: 'guitar-accessories' },
                    { title: 'Violin Accessories', value: 'violin-accessories' },
                    { title: 'Book', value: 'book' },
                    { title: 'Guitar Amp', value: 'guitar-amp' },
                    { title: 'Setar', value: 'setar' },
                    { title: 'Tar', value: 'tar' },
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
        // // Ratings and reviews
        // defineField({
        //     name: 'rating',
        //     title: 'Rating',
        //     type: 'number',
        //     description: 'Rating out of 5',
        // }),
        // defineField({
        //     name: 'reviews',
        //     title: 'Reviews',
        //     type: 'number',
        //     description: 'Number of reviews',
        // }),
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
        defineField({
            name: 'weight',
            title: 'Weight (lbs)',
            type: 'number',
            description: 'Product weight in pounds',
            validation: Rule => Rule.required().min(0.01),
        }),
        defineField({
            name: 'length',
            title: 'Length (in)',
            type: 'number',
            description: 'Product length in inches',
            validation: Rule => Rule.required().min(0),
        }),
        defineField({
            name: 'width',
            title: 'Width (in)',
            type: 'number',
            description: 'Product width in inches',
            validation: Rule => Rule.required().min(0),
        }),
        defineField({
            name: 'height',
            title: 'Height (in)',
            type: 'number',
            description: 'Product height in inches',
            validation: Rule => Rule.required().min(0),
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
            initialValue: DEFAULT_SHIPPING_INFO,   // shows up in the editor
            readOnly: false,                       // remove if staff may edit
        }),
        defineField({
            name: 'returns',
            title: 'Return Policy',
            type: 'text',                         // or 'blockContent' if you prefer rich text
            initialValue: DEFAULT_RETURN_POLICY,
            readOnly: false,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            subtitle: 'featured',
        },
        prepare({ title, media, subtitle }) {
            return {
                title,
                media,
                subtitle: subtitle ? '★ Featured' : undefined,
            }
        },
    },
})
