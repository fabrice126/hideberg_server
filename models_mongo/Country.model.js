import mongoose from 'mongoose';
const tableName = "country";

function min_max(min, max, fieldName) {
    return {
        minlength: [min, `The field '${fieldName}' is too short`],
        maxlength: [max, `The field '${fieldName}' is too long`],
    }
}
const stringSchema = {
    type: String,
    trim: true,
    default: ""
};
const arrayOfStringSchema = {
    type: [String],
    default: []
};
const stringSchemaIndex = {
    type: String,
    trim: true,
    default: "",
    index: true
};
var schema = new mongoose.Schema({
    [`${tableName}_label`]: {
        type: String,
        required: [true, 'You must type a label'],
        unique: true,
        trim: true,
        index: true,
        ...min_max(1, 200, "label")
    },
    [`${tableName}_link_politic`]: {
        type: String,
        trim: true,
        ...min_max(10, 512, "link politic")
    },
    [`${tableName}_link_cv`]: {
        type: String,
        trim: true,
        ...min_max(10, 512, "link cv")
    },
    [`${tableName}_link_diplomatic`]: {
        type: String,
        trim: true,
        ...min_max(10, 512, "link diplomatic")
    }
}, {
        collection: tableName,
        minimize: false,
        timestamps: true
    });

export default mongoose.model('Country', schema)