export default {
    user: (_, { user_id }, { models: { user } }) => user.findById(user_id),
    users: (_, args, { models: { user } }) => user.findAll(args),
}