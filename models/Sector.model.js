import Sequelize from 'sequelize';
import configDB from '../config/_confDB';

const tableName = "sector";
export default (sequelize, DataTypes) => {
    const Sector = sequelize.define(tableName, {
        [`${tableName}_id`]: {
            type: Sequelize.INTEGER(12).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        [`${tableName}_label`]: {
            type: Sequelize.STRING(255),
            allowNull: false,
            validate: {
                len: { args: [1, 255], msg: "Your sector name is too long" },
            }
        }
    }, {
            freezeTableName: true,
            tableName: tableName,
            version: true
        });
    return Sector;
}