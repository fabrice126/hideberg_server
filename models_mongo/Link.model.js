import mongoose from 'mongoose';
const tableName = "link";

var schema = new mongoose.Schema({
    [`${tableName}_url`]: {
        type: String,
        required: [true, 'You must type a label'],
        unique: true,
        trim: true,
        index: true,
        minlength: [10, "The field 'url' is too short"],
        maxlength: [512, "The field 'url' is too long"],
    }
}, {
        collection: tableName,
        minimize: false,
        timestamps: true
    });

export default mongoose.model('Link', schema)