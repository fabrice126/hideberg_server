import Sequelize from 'sequelize';
import configDB from '../config/_confDB';

const tableName = "website";
export default (sequelize, DataTypes) => {
    const Website = sequelize.define(tableName, {
        [`${tableName}_id`]: {
            type: Sequelize.INTEGER(12).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        [`${tableName}_label`]: {
            type: Sequelize.STRING(255),
            allowNull: false,
            validate: {
                len: { args: [1, 255], msg: "Your website name is too long" },
            }
        }
    }, {
            freezeTableName: true,
            tableName: tableName,
            version: true
        });
    return Website;
}