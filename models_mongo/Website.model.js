import mongoose from 'mongoose';
const tableName = "website";

var schema = new mongoose.Schema({
    [`${tableName}_label`]: {
        type: String,
        required: [true, 'You must type a label'],
        unique: true,
        trim: true,
        index: true,
        minlength: [5, "The field 'label' is too short"],
        maxlength: [255, "The field 'label' is too long"],
    }
}, {
        collection: tableName,
        minimize: false,
        timestamps: true
    });

export default mongoose.model('Website', schema)