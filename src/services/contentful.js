import {createClient} from "contentful"

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENT_DELIVERY_TOKEN
})

// Return an array of all artefacts
export const fetchArtefacts = async () => {
    const entries = await client.getEntries({
        content_type: 'artefact',
    })
    return entries.items
}

// Return an array of matching artefacts for a given slug
export const fetchArtefactBySlug = async slug => {
    const matches = await client.getEntries({
        content_type: 'artefact',
        'fields.slug': slug,
    })
    return matches.items
}