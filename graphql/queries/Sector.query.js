export default {
    sector: (_, { sector_id }, { models: { sector } }) => sector.findById(sector_id),
    sectors: (_, args, { models: { sector } }) => sector.findAll(),
    sectorsLimit: (_, args, { models: { sector } }) => sector.findAll(args),

}