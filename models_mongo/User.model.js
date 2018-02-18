import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const tableName = "user";

var schema = new mongoose.Schema({
    [`${tableName}_email`]: {
        type: String,
        minlength: [5, "The field 'email' is too short"],
        maxlength: [100, "The field 'email' is too long"],
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please fill a valid email address'],
        unique: true,
        required: [true, 'You must type an email'],
        lowercase: true,
        trim: true,
        index: true
    },
    [`${tableName}_password`]: {
        type: String,
        minlength: [4, "The field 'password' is too short"],
        maxlength: [100, "The field 'password' is too long"],
        required: [true, 'You must type a password']
    },
    [`${tableName}_firstname`]: {
        type: String,
        minlength: [1, "The field 'firstname' is too short"],
        maxlength: [70, "The field 'firstname' is too long"],
    },
    [`${tableName}_lastname`]: {
        type: String,
        minlength: [1, "The field 'lastname' is too short"],
        maxlength: [120, "The field 'lastname' is too long"],
    },
    [`${tableName}_gender`]: {
        type: String,
        default: "",
        enum: ["", "Male", "Female", "Other"],
    },
    [`${tableName}_birthdate`]: Date,
    [`${tableName}_phonenumber`]: {
        type: String,
        minlength: [1, "The field 'phonenumber' is too short"],
        maxlength: [30, "The field 'phonenumber' is too long"],
    },
    //DANS UNE TABLE DIFFERENTE ?? -> mettre les ids referancant les champs
    // [`${tableName}_nationality`]: {
    //     type: Sequelize.STRING(70),
    //     validate: {
    //         isAlphanumeric: true,
    //         len: { args: [1, 70], msg: "The field 'nationality' is too short or too long" },
    //     }
    // },
    // [`${tableName}_country`]: {
    //     type: Sequelize.STRING(70),
    //     validate: {
    //         len: { args: [1, 70], msg: "The field 'country' is too short or too long" },
    //     }
    // },
    [`${tableName}_city`]: {
        type: String,
        minlength: [1, "The field 'city' is too short"],
        maxlength: [130, "The field 'city' is too long"],
    },
    [`${tableName}_actual_city`]: {
        type: String,
        minlength: [1, "The field 'actual city' is too short"],
        maxlength: [130, "The field 'actual city' is too long"],
    },
    //DANS UNE TABLE DIFFERENTE ?? -> mettre les ids referancant les champs
    // [`${tableName}_education_level`]: {
    //     type: String,
    //     minlength: [1, "The field 'education level' is too short"],
    //     maxlength: [130, "The field 'education level' is too long"],
    // },
    // [`${tableName}_affiliated_sector`]: {
    //     type: String,
    //     minlength: [1, "The field 'affiliated sector' is too short"],
    //     maxlength: [50, "The field 'affiliated sector' is too long"],
    // },
    // [`${tableName}_search_sector`]: {
    //     type: String,
    //     minlength: [1, "The field 'search sector' is too short"],
    //     maxlength: [50, "The field 'search sector' is too long"],
    // },
    [`${tableName}_role`]: {
        type: String,
        default: "DEFAULT",
        enum: ["DEFAULT", "PRO", "ADMIN"],
        uppercase: true,
        trim: true,
    }
}, {
        collection: tableName,
        minimize: false,
        timestamps: true
    });


// Saves the user's password hashed (plain text password storage is not good)
schema.pre('save', function (next) {
    const user = this;
    try {
        if (user.isModified('password') || user.isNew) user[`${tableName}_password`] = await bcrypt.hash(user[`${tableName}_password`], 10);
        return next();
    } catch (err) {
        return next(err);
    }
});

// Create method to compare password input to password saved in database
schema.methods.comparePassword = function (pw, cb) {
    const user = this;
    bcrypt.compare(pw, user.password, function (err, isMatch) {
        if (err) {
            console.log("comparePassword ERROR");
            return cb(err, isMatch);
        }
        console.log("comparePassword OK");
        return cb(null, isMatch);
    });
};
export default mongoose.model('User', schema)