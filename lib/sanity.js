import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'p15ap4ry',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:
        'skQ7wEi2cB8SJAbQGfpCQA6VxScsTrLY6SOpm8VPp7rvmJDFGUoQhqTZCjudI1MfWDCMfMMg8i3Kvfxts04ccFHcvJSpWUOzlpjMky5JClhBAVyPkZntWZHgdpfQs61IpSJSePpwSlE6HawgQs3ADikZOe2agC7rzv0KbkNYFgWA3pRXH0po',
    useCdn: false,
})