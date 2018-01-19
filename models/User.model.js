import Sequelize from 'sequelize';
import bcrypt from 'bcrypt';
import configDB from '../config/_confDB';

const tableName = "user";
export default (sequelize, DataTypes) => {
    let User = sequelize.define(tableName, {
        [`${tableName}_id`]: {
            type: Sequelize.INTEGER(12).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        [`${tableName}_email`]: {
            type: Sequelize.STRING(255),
            allowNull: false,
            unique: "email",
            validate: {
                isEmail: { args: true, msg: "You must type a valid email" },
                notEmpty: { args: true, msg: configDB.model.validate.notEmpty },
                len: { args: [4, 255], msg: "The field 'email' is too short or too long" },
            }
        },
        [`${tableName}_password`]: {
            type: Sequelize.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: { args: true, msg: configDB.model.validate.notEmpty },
                len: { args: [4, 100], msg: "The field 'password' is too short or too long" },
            }
        },
        [`${tableName}_firstname`]: {
            type: Sequelize.STRING(70),
            validate: {
                isAlphanumeric: true,
                len: { args: [2, 70], msg: "The field 'first name' is too short or too long" },
            }
        },
        [`${tableName}_lastname`]: {
            type: Sequelize.STRING(70),
            validate: {
                isAlphanumeric: true,
                len: { args: [2, 70], msg: "The field 'last name' is too short or too long" },
            }
        },
        [`${tableName}_gender`]: {
            type: Sequelize.ENUM,
            values: ['Male', 'Female', 'Other'],
        },
        [`${tableName}_birthdate`]: {
            type: Sequelize.DATE
        },
        [`${tableName}_nationality`]: {
            type: Sequelize.STRING(70),
            validate: {
                isAlphanumeric: true,
                len: { args: [1, 70], msg: "The field 'nationality' is too short or too long" },
            }
        },
        [`${tableName}_phonenumber`]: {
            type: Sequelize.STRING(30),
            validate: {
                len: { args: [1, 30], msg: "The field 'phone number' is too short or too long" },
            }
        },
        [`${tableName}_country`]: {
            type: Sequelize.STRING(70),
            validate: {
                len: { args: [1, 70], msg: "The field 'country' is too short or too long" },
            }
        },
        [`${tableName}_city`]: {
            type: Sequelize.STRING(100),
            validate: {
                len: { args: [0, 100], msg: "The field 'city' is too long" },
            }
        },
        [`${tableName}_actual_city`]: {
            type: Sequelize.STRING(100),
            validate: {
                len: { args: [0, 100], msg: "The field 'actual city' is too long" },
            }
        },
        [`${tableName}_education_level`]: {
            type: Sequelize.STRING(50),
            validate: {
                len: { args: [0, 50], msg: "The field 'education level' is too long" },
            }
        },
        [`${tableName}_affiliated_sector`]: {
            type: Sequelize.STRING(50),
            validate: {
                len: { args: [0, 50], msg: "The field 'affiliated sector' is too long" },
            }
        },
        [`${tableName}_search_sector`]: {
            type: Sequelize.STRING(50),
            validate: {
                len: { args: [0, 50], msg: "The field 'search sector' is too long" },
            }
        },
        [`${tableName}_role`]: {
            type: Sequelize.ENUM,
            values: ["DEFAULT", "PRO", "ADMIN"],
            defaultValue: 'DEFAULT',
        }
    }, {
            freezeTableName: true,
            tableName: tableName,
            version: true,
        });
    User.hook('beforeCreate', async (user, options) => {
        try {
            if (user.changed("password") || user.isNewRecord()) {
                console.log('NEW USER OR PASSWORD MODIFIED', user.changed("password"), user.isNewRecord());
                user.password = await bcrypt.hash(user.password, 10);
            }
        } catch (error) {
            throw new Error(error);
        }
        return user;
    });

    return User;
}