"use strict";

import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import configDB from '../config/_confDB';
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
    console.log(db[model.name]);
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
    try {
        await sequelize.sync({ force: true });
        console.log("Inserted Successfully.");
    } catch (err) {
        console.log("Fail to insert data", err);
    }
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
export default db;