export default {
    annonce: (_, { id }, { models: { annonce } }) => annonce.findById(id),
    annonces: (_, args, { models: { annonce } }) => annonce.findAll(),
    annoncesLimit: (_, args, { models: { annonce } }) => annonce.findAll(args),

}