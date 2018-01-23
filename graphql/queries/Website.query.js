export default {
    website: (_, { website_id }, { models: { website } }) => website.findById(website_id),
    websites: (_, args, { models: { website } }) => website.findAll(),
    websitesLimit: (_, args, { models: { website } }) => website.findAll(args),

}