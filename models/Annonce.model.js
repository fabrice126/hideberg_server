import Sequelize from 'sequelize';
import configDB from '../config/_confDB';

const tableName = "annonce";
export default (sequelize, DataTypes) => {
    const Annonce = sequelize.define(tableName, {
        annonce_id: {
            type: Sequelize.INTEGER(12).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        annonce_description: {
            type: Sequelize.STRING(255),
            allowNull: true,
            validate: {
                len: { args: [0, 255], msg: "Your description is too long" },
            }
        }
    }, {
            freezeTableName: true,
            tableName: tableName,
            version: true
        });
    return Annonce;
}