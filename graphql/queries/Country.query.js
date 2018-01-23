export default {
    country: (_, { country_id }, { models: { country } }) => country.findById(country_id),
    countries: (_, args, { models: { country } }) => country.findAll(),
    countriesLimit: (_, args, { models: { country } }) => country.findAll(args),
    countryByLabel: (_, country_label, { models: { country } }) => country.findOne({ where: country_label }),
}