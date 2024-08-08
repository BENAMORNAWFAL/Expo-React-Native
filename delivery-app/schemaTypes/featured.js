import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Restaurants',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title:'Resaurant Name',
      validation: rule=>rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title:'Restaurant description',
      validation: rule=>rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title:'image of the Dish',
      validation: rule=>rule.required()
    },
    {
        name: 'restaurants',
        type: 'array',
        title:'Restaurants',
        of: [{type: 'reference', to: [{type: 'restaurant'}]}]
      }
  ],
})
