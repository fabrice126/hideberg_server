export default {
    user: (_, { id }, { model: { user } }) => user.findById(id),
    users: (_, args, { model: { user } }) => user.findAll(args),
}