const path = require('path')

module.exports = {
    app: "Bük",
    version: "1.2.0",
    description: "Markdown based Javascript wiki engine.",
    sub: "Bük is a flat file markdown based wiki engine written in Javascript.",

    options: {
        'advanced_slugs': true
    },

    articles : {
        "Getting Started": [
            {
                title: "About Bük",
                tags: [
                    "getting started",
                    "about",
                    "fuzzy",
                    "search",
                    "no server"
                ]
            },
            {
                title: "Installation",
                tags: [
                    "installation",
                    "how to"
                ]
            },
            {
                title: "Extending Bük",
                tags: [
                    "fork",
                    "develop",
                    "npm"
                ]
            }
        ],

        "Usage": [
            {
                title: "Manifest.js",
                tags: [
                    "usage",
                    "manifest.js",
                    "how to write"
                ]
            },

            {
                title: "Write your own pages",
                tags: [
                    "wiki",
                    "extend",
                    "new"
                ]
            }
        ],

        "Nested Categories": {
            "Category 1": [
                {
                    title: "About Bük",
                    tags: [
                        "getting started",
                        "about",
                        "fuzzy",
                        "search",
                        "no server"
                    ]
                },
                {
                    title: "About Bük",
                    tags: [
                        "getting started",
                        "about",
                        "fuzzy",
                        "search",
                        "no server"
                    ]
                }
            ],
            "Category 2" : {
                "Nested Again": [
                    {
                        title: "References",
                        tags: [
                            "licence",
                            "author",
                            "misc"
                        ]
                    }
                ]
            },
        },

        "Other": [
            {
                title: "References",
                tags: [
                    "licence",
                    "author",
                    "misc"
                ]
            }
        ]
    }
}
