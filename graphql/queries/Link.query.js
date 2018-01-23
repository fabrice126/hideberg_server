export default {
    link: (_, { link_id }, { models: { link } }) => link.findById(link_id),
    links: (_, args, { models: { link } }) => link.findAll(),
    linksLimit: (_, args, { models: { link } }) => link.findAll(args),

}