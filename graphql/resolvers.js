// import UserResolver from './mutations/User.resolver';
// import ProductResolver from './mutations/Product.resolver';
// import ImageResolver from './mutations/Image.resolver';

import AnnonceQuery from './queries/Annonce.query';
import ContinentQuery from './queries/Continent.query';
import CountryQuery from './queries/Country.query';
import LinkQuery from './queries/Link.query';
import SectorQuery from './queries/Sector.query';
import UserQuery from './queries/User.query';
import WebsiteQuery from './queries/Website.query';


export default {
    Query: {
        ...AnnonceQuery,
        ...ContinentQuery,
        ...CountryQuery,
        ...LinkQuery,
        ...SectorQuery,
        ...UserQuery,
        ...WebsiteQuery
    }
    // Mutation: {
    //     ...UserResolver,
    //     ...ProductResolver,
    //     ...ImageResolver
    // },
    // User: {
    //     products: (user) => user.getProducts()
    // },
    // Product: {
    //     images: (product) => product.getImages()
    // }
};