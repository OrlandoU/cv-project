const sectionTemplates =  [
    {
        section: 'Personal Info',
        template: [
            {
                header: 'First Name',
                type : 'Text'
            },
            {
                header: 'Last Name',
                type : 'Text',
            },
            {
                header: 'Email',
                type : 'Text'
            },
            {
                header: 'Phone',
                type : 'Text',
            },
            {
                header: 'Country',
                type : 'Text'
            },
            {
                header: 'Last Name',
                type : 'Text',
            }
        ]
    },
    {
        section: 'Professional Summary',
        info: 'Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.',
        template: [
            {
                header: 'Todo label',
                type : 'TextArea'
            },
        ]
    },
    {
        section: 'Employment History',
        info: 'Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).',
        template: [
            {
                header: 'Todo label',
                type : 'Text'
            }
        ]
    }
]
export default sectionTemplates