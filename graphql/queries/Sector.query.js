export default {
    sector: (_, { id }, { models: { sector } }) => sector.findById(id),
    sectors: (_, args, { models: { sector } }) => sector.findAll(args),
}