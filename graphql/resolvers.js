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
    },
    // Mutation: {
    //     ...UserResolver,
    //     ...ProductResolver,
    //     ...ImageResolver
    // },
    Continent: {
        countries: (continent) => continent.getCountries()
    },
    Country: {
        annonces: (country) => country.getAnnonces(),
        links: (country) => country.getLinks()
    },
    Sector: {
        links: (sector) => sector.getLinks(),
        annonces: (annonce) => annonce.getAnnonces()
    },
    Website: {
        links: (website) => website.getLinks(),
        annonces: (website) => website.getAnnonces()
    },
    User: {
        user_gender: (user) => user.getUserGender(),
        user_role: (user) => user.getUserRole(),
    }
};