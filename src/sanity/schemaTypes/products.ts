export const products = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required()
        },
        {
            name: 'price',
            title: 'Price',
            type: 'string',
            validation: Rule => Rule.required().positive()
        },
        {
            name: 'discountedPrice',
            title: 'Discounted Price',
            type: 'string',
            validation: Rule => Rule.positive()
        },
        {
            name: 'qty',
            title: 'Quantity',
            type: 'number',
            validation: Rule => Rule.positive()
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            validation: Rule => Rule.max(3)
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'categories' }],
            validation: Rule => Rule.required()
        },
        {
            name: "is_featured",
            title: "Featured Product",
            type: "boolean",
        }
    ]
}
