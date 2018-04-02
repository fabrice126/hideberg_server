"use strict";

import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import configDB from '../config/_confDB';

import UserData from '../_database/json/User.data.json';
import ContinentData from '../_database/json/Continent.data.json';
import CountryData from '../_database/json/Country.data.json';
import WebsiteData from '../_database/json/Website.data.json';
import SectorData from '../_database/json/Sector.data.json';
import AnnonceData from '../_database/json/Annonce.data.json';
import LinkData from '../_database/json/Link.data.json';


const Op = Sequelize.Op;
var db = {};

const sequelize = new Sequelize(configDB.database.name, configDB.database.user, configDB.database.password, {
    operatorsAliases: false,
    host: configDB.database.host,
    port: configDB.database.port,
    dialect: 'mysql',
    logging: false,
    pool: { max: 5, min: 0, idle: 10000 }
});
fs.readdirSync(__dirname).filter((file) => {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
}).forEach((file) => {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
});
Object.keys(db).forEach((modelName) => {
    if ("associate" in db[modelName]) db[modelName].associate(db);
});
db["continent"].hasMany(db["country"], { allowNull: false, onDelete: "CASCADE", foreignKey: { name: 'country_continent_id', allowNull: false } });
db["country"].belongsTo(db["continent"], { allowNull: false, onDelete: "CASCADE", foreignKey: { name: 'country_continent_id', allowNull: false } });

db["country"].hasMany(db["link"], { allowNull: false, onDelete: "CASCADE", foreignKey: { name: 'link_country_id', allowNull: false } });
db["link"].belongsTo(db["country"], { allowNull: false, onDelete: "CASCADE", foreignKey: { name: 'link_country_id', allowNull: false } });

db["country"].hasMany(db["annonce"], { allowNull: false, onDelete: "CASCADE", foreignKey: { name: 'annonce_country_id', allowNull: false } });
db["annonce"].belongsTo(db["country"], { allowNull: false, onDelete: "CASCADE", foreignKey: { name: 'annonce_country_id', allowNull: false } });

db["sector"].hasMany(db["annonce"], { allowNull: false, onDelete: "CASCADE", foreignKey: { name: 'annonce_sector_id', allowNull: false } });
db["annonce"].belongsTo(db["sector"], { allowNull: false, onDelete: "CASCADE", foreignKey: { name: 'annonce_sector_id', allowNull: false } });

db["sector"].hasMany(db["link"], { allowNull: false, onDelete: "CASCADE", foreignKey: { name: 'link_sector_id', allowNull: false } });
db["link"].belongsTo(db["sector"], { allowNull: false, onDelete: "CASCADE", foreignKey: { name: 'link_sector_id', allowNull: false } });

db["website"].hasMany(db["annonce"], { allowNull: false, onDelete: "CASCADE", foreignKey: { name: 'annonce_website_id', allowNull: false } });
db["annonce"].belongsTo(db["website"], { allowNull: false, onDelete: "CASCADE", foreignKey: { name: 'annonce_website_id', allowNull: false } });

db["website"].hasMany(db["link"], { allowNull: false, onDelete: "CASCADE", foreignKey: { name: 'link_website_id', allowNull: false } });
db["link"].belongsTo(db["website"], { allowNull: false, onDelete: "CASCADE", foreignKey: { name: 'link_website_id', allowNull: false } });


db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Op;

sequelize.authenticate().then(async () => {
    console.log('Connection has been established successfully.');
    console.log("NODE_ENV", process.env.NODE_ENV);
    if (process.env.NODE_ENV === "production") return;
    try {
        // await sequelize.sync({ force: true });
        // await db.user.bulkCreate(UserData);
        // await db.continent.bulkCreate(ContinentData);
        // await db.country.bulkCreate(CountryData);
        // await db.website.bulkCreate(WebsiteData);
        // await db.sector.bulkCreate(SectorData);
        // await db.annonce.bulkCreate(AnnonceData);
        // await db.link.bulkCreate(LinkData);
        // console.log("Inserted Successfully.");
    } catch (err) {
        console.log("Fail to insert data", err);
    }
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
process.on('SIGINT', () => sequelize.close().then(() => process.exit(0), () => process.exit(1)));
export default db;