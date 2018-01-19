import Sequelize from 'sequelize';
import configDB from '../config/_confDB';

const tableName = "continent";
export default (sequelize, DataTypes) => {
    const Continent = sequelize.define(tableName, {
        [`${tableName}_id`]: {
            type: Sequelize.INTEGER(12).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        [`${tableName}_label`]: {
            type: Sequelize.STRING(20),
            allowNull: false,
            validate: {
                len: { args: [1, 20], msg: "Your continent name is too long" },
            }
        }
    }, {
            freezeTableName: true,
            tableName: tableName,
            version: true
        });
    return Continent;
}