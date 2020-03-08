const contract = {
    _id: '5e6521599d76186711c96365',
    user: {
        //Pin is inputted the first time you visit or if cookie are cleared
        //This is unique to identify a user
        pin: 1234,
        lastLogin: '2020-03-08T16:46:17.383Z',
    },
    dump: {
        //Dump types are dynamically created from the UI on saving
        //We put the type as the key to separate them
        javascript: {
            //Within a category, each entry is keyed by its ID
            1: {
                title: 'console.log',
                tags: ['javascript'],
                content: 'console.log(true)',
                lastModified: '2020-03-08T16:46:17.383Z',
            },
        },
        json: {
            1: {
                title: 'blah',
                tags: ['json'],
                content: '"{"blah": true}"',
                lastModified: '2020-03-08T16:46:17.383Z',
            },
        },
        plaintext: {
            1: {
                title: 'anything goes',
                tags: ['plaintext', 'icecream flavors'],
                content: '*) chocolate\n*) vanilla',
                lastModified: '2020-03-08T16:46:17.383Z',
            },
        },
    },
}
