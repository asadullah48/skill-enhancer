const scholarship = {
    name: 'scholarship',
    title: 'Scholarship',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'Image representing the scholarship.',
            options: {
                hotspot: true, // Enables image cropping
            },
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'Title or heading of the scholarship.',
        },
        {
            name: 'slug',
            title: 'Slug',
            type:'slug',
            description: 'A unique identifier for the scholarship.',
            options: {
                source: 'heading',
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Detailed description of the scholarship.',
        },
        {
            name: 'countries',
            title: 'Scholarship Offer by Country',
            type: 'string',
            description: 'Which country offering the scholarship offers',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'USA', value: 'usa' },
                    { title: 'UK', value: 'uk' },
                    { title: 'Canada', value: 'canada' },
                    { title: 'Australia', value: 'australia' },
                    { title: 'Germany', value: 'germany' },
                    { title: 'South Africa', value: 'south-Africa' },
                    { title: 'China', value: 'china' },
                    { title: 'Japan', value: 'japan' },
                    { title: 'Saudi Arabia', value: 'saudi-arabia' },
                    { title: 'Singapore', value: 'singapore' },
                    { title: 'Thailand', value: 'thailand' },
                    { title: 'UAE', value: 'uae' },
                    { title: 'New Zealand', value: 'new-zealand' },
                    { title: 'Austria', value: 'austria' },
                    { title: 'Belgium', value: 'belgium' },
                    { title: 'Denmark', value: 'denmark' },
                    { title: 'France', value: 'france' },
                    { title: 'Hungary', value: 'hungary' },
                    { title: 'Ireland', value: 'ireland' },
                    { title: 'Italy', value: 'italy' },
                    { title: 'Netherlands', value: 'netherlands' },
                    { title: 'Norway', value: 'norway' },
                    { title: 'Romania', value: 'romania' },
                    { title: 'Spain', value: 'spain' },
                    { title: 'Sweden', value: 'sweden' },
                    { title: 'Switzerland', value: 'switzerland' },
                    { title: 'Turkey', value: 'turkey' },
                    // Add more countries as needed
                ],
                layout: 'dropdown', // Ensures dropdown style
            },
        },
        {
            name: 'levelOfStudies',
            title: 'Level of Studies',
            type: 'array',
            description: 'The level of studies eligible for the scholarship.',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Undergraduate', value: 'undergraduate' },
                    { title: 'Masters', value: 'masters' },
                    { title: 'PhD', value: 'phd' },
                    { title: 'Postdoctoral', value: 'postdoctoral' },
                    { title: 'Diploma', value: 'diploma' },
                ],
                layout: 'dropdown', // Ensures dropdown style
            },
        },
        {
            name: 'isRecommended',
            title: 'Is Recommended',
            type: 'boolean',
            description: 'Set to true if this item is recommended',
          },
        {
            name: 'ScholarshipType',
            title: 'Scholarship Type',
            type: 'array',
            description: 'Scholarship type.',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Fully funded', value: 'fullyFunded' },
                    { title: 'Partial', value: 'Partial' },
                ],
                layout: 'dropdown',
            },
        },
    ],
};

export default scholarship;