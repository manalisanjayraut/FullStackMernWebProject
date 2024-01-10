/*
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const JobInterviewSchema = new Schema({
    interviewId: {
        type:String,
        required: true

    },

    jobId: {
        type: String,
        required : true
    },

    candidateId: {
        type: String,
        required: true
    },
    dateTime: {
        type: Date,
        
    },

    location:
    {
        type: String
    }

},
{
    versionKey: false
}
);


const JobInterviewModel = mongoose.model('jobInterview', JobInterviewSchema);

export default JobInterviewModel;
*/
import mongoose from "mongoose";

// Define a Mongoose schema for the JobInterview model
const Schema = mongoose.Schema;

/**
 * Mongoose schema for the JobInterview model.
 */
const JobInterviewSchema = new Schema({
    /**
     * Unique identifier for the interview.
     *
     * @type {String}
     * @required
     */
    interviewId: {
        type: String,
        required: true
    },

    /**
     * Identifier for the job associated with the interview.
     *
     * @type {String}
     * @required
     */
    jobId: {
        type: String,
        required: true
    },

    /**
     * Identifier for the candidate participating in the interview.
     *
     * @type {String}
     * @required
     */
    candidateId: {
        type: String,
        required: true
    },

    /**
     * Date and time of the interview.
     *
     * @type {Date}
     */
    dateTime: {
        type: Date
    },

    /**
     * Location of the interview.
     *
     * @type {String}
     */
    location: {
        type: String
    }
},
{
    // Disable the "__v" version key in the documents
    versionKey: false
});

/**
 * Mongoose model for the JobInterview collection.
 */
const JobInterviewModel = mongoose.model('jobInterview', JobInterviewSchema);

export default JobInterviewModel;