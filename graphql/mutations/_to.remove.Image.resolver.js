export default {
    imageAdd: async (_, { data }, { models: { image } }) => {
        const newImage = await image.create(data);
        if (!newImage) throw new Error('Error adding a new image');
        return newImage;
    },
    imageUpdate: async (_, { id, data }, { models: { image } }) => {
        const updateImage = await image.update(data, { where: { id: id } });
        if (!updateImage) throw new Error('Error for updating this image');
        return true;
    },
    imageRemove: async (_, { id }, { models: { image } }) => {
        const destroyImage = await image.destroy({ where: { id: id } });
        if (!destroyImage) throw new Error('Error for removing this image');
        return true;
    },
    imageRemoveAll: async (_, args, { models: { image } }) => {
        const destroyAllImages = await image.destroy({ where: {} });
        if (!destroyAllImages) throw new Error('Error for removing all images');
        return true;
    }
}