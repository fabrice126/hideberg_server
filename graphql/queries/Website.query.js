export default {
    website: (_, { id }, { models: { website } }) => website.findById(id),
    websites: (_, args, { models: { website } }) => website.findAll(args),
}