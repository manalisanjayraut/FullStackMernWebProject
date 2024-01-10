import mongoose from 'mongoose';
 
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
 
 
const { ObjectId } = mongoose.Schema;
const userexperienceSchema = new mongoose.Schema({
    // Other user fields
   
      title: {
        type: String,
        required: false
      },
      companyname: {
        type: String,
        required: false
      },
      "employment-type": {
        type: String,
        required: false
      },
      "start-date": {
        type: Date,
        required: false
      },
      "end-date": {
        type: Date,
        required: false
      },
      location: {
        type: String,
        required: false
      },
      responsibilities: {
        type: String,
        required: false
      },
      role: {
        type: String,
        required: false
      }
   
    // Other fields in the user schema
  });
 
const jobsHistorySchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        maxlength: 70,
    },
    description: {
        type: String,
        trim: true,
    },
    salary: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
    },
    interviewDate: {
        type: Date,
    },
    applicationStatus: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending',
    },
    user: {
        type: ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });
 
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'first name is required'],
        maxlength: 32,
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'last name is required'],
        maxlength: 32,
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'e-mail is required'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email',
        ],
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'password is required'],
        minlength: [6, 'password must have at least (6) characters'],
    },
    Experience: [userexperienceSchema],
    Education: {
        type: String
    },
    jobsHistory: [jobsHistorySchema],
    role: {
        type: Number,
        default: 0,
    },
    skills: {
        type: [String], // Assuming skills are represented as an array of strings
        trim: true,
    },
}, { timestamps: true });
 
// Encrypting password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});
 
// Compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
 
// Return a JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: 3600,
    });
};
 
const User = mongoose.model('User', userSchema);
 
export default User;