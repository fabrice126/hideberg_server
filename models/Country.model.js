import Sequelize from 'sequelize';
import configDB from '../config/_confDB';

const tableName = "country";
export default (sequelize, DataTypes) => {
    const Country = sequelize.define(tableName, {
        [`${tableName}_id`]: {
            type: Sequelize.INTEGER(12).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        [`${tableName}_label`]: {
            type: Sequelize.STRING(255),
            allowNull: false,
            validate: {
                len: { args: [1, 255], msg: "Your country name is too long" },
            }
        },
        [`${tableName}_link_politic`]: {
            type: Sequelize.STRING(255),
            allowNull: true,
            validate: {
                isUrl: true,
                len: { args: [0, 255], msg: "Your politic link is too long" },
            }
        },
        [`${tableName}_link_cv`]: {
            type: Sequelize.STRING(255),
            allowNull: true,
            validate: {
                isUrl: true,
                len: { args: [0, 255], msg: "Your cv link name is too long" },
            }
        },
        [`${tableName}_link_diplomatic`]: {
            type: Sequelize.STRING(255),
            allowNull: true,
            validate: {
                isUrl: true,
                len: { args: [0, 255], msg: "Your diplomatic link is too long" },
            }
        }
    }, {
            freezeTableName: true,
            tableName: tableName,
            version: true
        });
    return Country;
}