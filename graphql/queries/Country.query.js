export default {
    country: (_, { id }, { models: { country } }) => country.findById(id),
    countries: (_, args, { models: { country } }) => country.findAll(args),
}