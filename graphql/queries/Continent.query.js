export default {
    continent: (_, { id }, { models: { continent } }) => continent.findById(id),
    continents: (_, args, { models: { continent } }) => continent.findAll(args),
}