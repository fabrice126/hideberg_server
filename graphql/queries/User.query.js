export default {
    user: (_, { id }, { models: { user } }) => user.findById(id),
    users: (_, args, { models: { user } }) => user.findAll(args),
}