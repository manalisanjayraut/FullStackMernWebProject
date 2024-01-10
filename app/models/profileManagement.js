// Importing Mongoose library
import mongoose from "mongoose";

// Getting the Schema class from Mongoose
const Schema = mongoose.Schema;

// Creating a new Schema for Profile Management
const ProfileManagementSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number // Assuming phone number is stored as a number
    },
    Skills: {
        type: String
    },
    profileID: {
        type: String
    },
    Experience: {
        title: {
            type: String,
            required: true
        },
        "company-name": {
            type: String,
            required: true
        },
        "employment-type": {
            type: String,
            required: true
        },
        "start-date": {
            type: Date,
            required: true
        },
        "end-date": {
            type: Date,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        responsibilities: {
            type: String,
            required: true
        }
    },
    Education: {
        type: String
    },
    "profile-type": {
        type: String,
        required: true
    },
    resume: {
        type: String
    }
},
{
    versionKey: false // Disabling versioning by setting versionKey to false
});

// Creating a Mongoose Model based on the defined Schema
const ProfileManagementModel = mongoose.model('profileManagement', ProfileManagementSchema);

// Exporting the ProfileManagementModel to be used in other parts of the application
export default ProfileManagementModel;