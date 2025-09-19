export const categories = {
    name: 'categories',
    title: 'categories',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Category Name',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'categoryImage',
            title: 'Category Image',
            type: 'image',
            options: {
                hotspot: true
            },
        },
    ]
}