import {defineField, defineType} from 'sanity'

export default defineType( {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'phone',
        title: 'Phone Number',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule) => Rule.required().email(),
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      },
    ],
    indexes: [
      {
        name: 'phoneIndex',
        fields: ['phone'],
        unique: true,
      },
      {
        name: 'emailIndex',
        fields: ['email'],
        unique: true,
      },
    ],
  });
  