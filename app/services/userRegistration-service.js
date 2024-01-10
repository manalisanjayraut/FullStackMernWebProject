// Importing the userAuthentication model
import userAuthentication from '../models/userRegistration.js'

// Function to search for userAuthentication based on provided parameters
export const search = async (params = {}) => {
    // Finding userAuthentication based on provided search parameters
    const userAuthentications = await userAuthentication.find(params).exec();
    return userAuthentications; // Returning the found userAuthentication
}

// Function to save a new profile
export const save = async (newProfile) => {
    // Creating a new userAuthentication instance with the provided data
    const userAuthentications = new userAuthentication(newProfile);
    return await userAuthentications.save(); // Saving the new user authentication details and returning the result
}

// Function to find a profile by ID
export const find = async (username) => {
    // Finding a profile by its ID
    const userAuthentications = await userAuthentication.findOne({ username }).exec();
    
    return userAuthentications; // Returning the found user
}

// Function to update a profile by ID
export const update = async (updatedProfile, username) => {
    // Updating a profile by its ID with the provided updated data
    const userAuthentications = await userAuthentication.findOneAndUpdate({ username }, updatedProfile, { new: true }).exec();
    return userAuthentications; // Returning the updated user
}

// Function to remove a profile by ID
export const remove = async (username) => {
    // Removing a profile by its ID
    const userAuthentications = await userAuthentication.findOneAndDelete({ username }).exec();
    return userAuthentications; // Returning the removed user
}

export const findUser = async(username, password) => {

    const userAuthentications = await userAuthentication.findOne({ username }).exec();
    return userAuthentications;
}