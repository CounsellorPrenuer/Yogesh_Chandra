import { defineField, defineType } from 'sanity'

export const packageSchema = defineType({
  name: 'pricingPackage',
  title: 'Pricing Package',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Target Audience Category',
      type: 'string',
      options: {
        list: [
          { title: '8-9 Students', value: '8-9 STUDENTS' },
          { title: '10-12 Students', value: '10-12 STUDENTS' },
          { title: 'College Graduates', value: 'COLLEGE GRADUATES' },
          { title: 'Working Professionals', value: 'WORKING PROFESSIONALS' },
        ],
      },
    }),
    defineField({
      name: 'tier',
      title: 'Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Standard', value: 'STANDARD' },
          { title: 'Premium', value: 'PREMIUM' },
        ],
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Feature Name' },
            { name: 'included', type: 'boolean', title: 'Is Included' },
          ],
        },
      ],
    }),
  ],
})

export const customPackageSchema = defineType({
  name: 'customPackage',
  title: 'Custom Package',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Type',
      type: 'string',
    }),
  ],
})

export const founderSchema = defineType({
  name: 'founderInfo',
  title: 'Founder Info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
  ],
})

export const schemaTypes = [packageSchema, customPackageSchema, founderSchema]
