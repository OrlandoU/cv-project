const sectionTemplates = [
    {
        section: 'Personal Details',
        template: [
            {
                header: 'First Name',
                type: 'Text'
            },
            {
                header: 'Last Name',
                type: 'Text',
            },
            {
                header: 'Email',
                type: 'Text'
            },
            {
                header: 'Phone',
                type: 'Text',
            },
            {
                header: 'Country',
                type: 'Text'
            },
            {
                header: 'Last Name',
                type: 'Text',
            }
        ]
    },
    {
        section: 'Professional Summary',
        info: 'Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.',
        template: [
            {
                type: 'TextArea'
            },
        ]
    },
    {
        section: 'Employment History',
        add: 'employment',
        info: 'Show your relevant experience (last 10 years). Use numbers/facts (Achieved X, measured by Y, by doing Z).',
        template: [
            {
                header: 'Job title',
                type: 'Text'
            },
            {
                header: 'Employer',
                type: 'Text'
            },
            {
                header: 'Start & End Date',
                type: 'Date'
            },
            {
                header: 'City',
                type: 'Text'
            },
            {
                header: 'Description',
                type: 'Text'
            },
        ]
    },
    {
        section: 'Education',
        add: 'education',
        info: 'A varied education on your resume sums up the value that your learnings and background will bring to job.',
        template: [
            {
                header: 'School',
                type: 'Text'
            },
            {
                header: 'Degree',
                type: 'Text'
            },
            {
                header: 'Start & End Date',
                type: 'Date'
            },
            {
                header: 'City',
                type: 'Text'
            },
            {
                header: 'Description',
                type: 'Text'
            },
        ]
    },
    {
        section: 'Skills',
        add: 'skill',
        info: 'Enter 5 of the most important skills to show your talents! Make sure they match the keywords of the job listing if applying via an online system.',
        template: [
            {
                header: 'Skill',
                type: 'Text'
            }
        ]
    },
    {
        section: 'Languages',
        add: 'language',
        template: [
            {
                header: 'Language',
                type: 'Text'
            },
            {
                header: 'Level',
                type: 'Select'
            }
        ]
    },
    {
        section: 'Courses',
        add: 'course',
        template: [
            {
                header: 'Course',
                type: 'Text'
            },
            {
                header: 'Institution',
                type: 'Select'
            },
            {
                header: 'Start & End Date',
                type: 'Date'
            }
        ]
    }
]
export default sectionTemplates