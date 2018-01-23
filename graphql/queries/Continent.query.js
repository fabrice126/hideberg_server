export default {
    continent: (_, { continent_id }, { models: { continent } }) => continent.findById(continent_id),
    continents: (_, args, { models: { continent } }) => continent.findAll(),
    continentsLimit: (_, args, { models: { continent } }) => continent.findAll(args),
    continentByLabel: (_, continent_label, { models: { continent } }) => continent.findOne({ where: continent_label }),
}