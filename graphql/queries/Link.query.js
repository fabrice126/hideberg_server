export default {
    link: (_, { id }, { models: { link } }) => link.findById(id),
    links: (_, args, { models: { link } }) => link.findAll(args),
}