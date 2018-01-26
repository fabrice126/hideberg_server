export default {
    annonce: (_, { annonce_id }, { models: { annonce } }) => annonce.findById(annonce_id),
    annonces: (_, args, { models: { annonce } }) => annonce.findAll(),
    annoncesLimit: (_, args, { models: { annonce } }) => annonce.findAll(args),
}