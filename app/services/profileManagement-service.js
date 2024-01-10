// Importing the ProfileManagement model
import ProfileManagement from '../models/profileManagement.js'

// Function to search for profileManagements based on provided parameters
export const search = async (params = {}) => {
    // Finding profileManagements based on provided search parameters
    const profileManagements = await ProfileManagement.find(params).exec();
    return profileManagements; // Returning the found profileManagements
}

// Function to save a new profile
export const save = async (newProfile) => {
    // Creating a new ProfileManagement instance with the provided data
    const profileManagements = new ProfileManagement(newProfile);
    return await profileManagements.save(); // Saving the new profile and returning the result
}

// Function to find a profile by ID
export const find = async (name) => {
    // Finding a profile by its ID
    const profileManagements = await ProfileManagement.findOne({ name }).exec();
    return profileManagements; // Returning the found profile
}

// Function to update a profile by ID
export const update = async (updatedProfile, name) => {
    // Updating a profile by its ID with the provided updated data
    const profileManagements = await ProfileManagement.findOneAndUpdate({ name }, updatedProfile, { new: true }).exec();
    return profileManagements; // Returning the updated profile
}

// Function to remove a profile by ID
export const remove = async (name) => {
    // Removing a profile by its ID
    const profileManagements = await ProfileManagement.findOneAndDelete({ name }).exec();
    
    return profileManagements; // Returning the removed profile
}