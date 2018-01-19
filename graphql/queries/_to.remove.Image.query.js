export default {
    image: (_, { id }, { model: { image } }) => image.findById(id),
    images: (_, args, { model: { image } }) => image.findAll(args),
}