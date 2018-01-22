export default {
    annonce: (_, { id }, { models: { image } }) => image.findById(id),
    annonces: (_, args, { models: { image } }) => image.findAll(args),
}