export default {
    productAdd: async (_, { data }, { models: { product } }) => {
        const newProduct = await product.create(data);
        if (!newProduct) throw new Error('Error for adding product');
        return newProduct;
    },
    productUpdate: async (_, { id, data }, { models: { product } }) => {
        const updateProduct = await product.update(data, { where: { id: id } });
        if (!updateProduct) throw new Error('Error for updating this product');
        return true;
    },
    productRemove: async (_, { id }, { models: { product } }) => {
        console.log(`ID = ${id}`);
        const destroyProduct = await product.destroy({ where: { id: id } });
        console.log("destroyProduct = " + destroyProduct);
        if (!destroyProduct) throw new Error('Error for removing this product');
        return true;
    },
    productRemoveAll: async (_, args, { models: { product } }) => {
        const destroyAllProducts = await product.destroy({ where: {} });
        if (!destroyAllProducts) throw new Error('Error for removing all products');
        return true;
    }
}