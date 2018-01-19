import Sequelize from 'sequelize';
import configDB from '../config/_confDB';

const tableName = "link";
export default (sequelize, DataTypes) => {
    const Link = sequelize.define(tableName, {
        [`${tableName}_id`]: {
            type: Sequelize.INTEGER(12).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        [`${tableName}_url`]: {
            type: Sequelize.STRING(512),
            allowNull: false,
            validate: {
                isUrl: true,
                len: { args: [1, 512], msg: "Your url is too long" },
            }
        }
    }, {
            freezeTableName: true,
            tableName: tableName,
            version: true
        });
    return Link;
}