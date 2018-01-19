export default {
    product: (_, { id }, { model: { product } }) => product.findById(id),
    products: (_, args, { model: { product } }) => product.findAll(args),
}