import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 60
    }, 
    gender: {
        type: String,
        required: true,
        enum: ['He/Him', 'She/Her', 'Other']    // select gender
    }, 
    otherGender: {
        type: String,
        minlength: 1,
        maxlength: 30,
        required: function() { return this.gender === 'Other'; }    // only required if gender is 'Other'
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 320,
        unique: true
    }, 
    age: {
        type: Number,
        min: 1,
        max: 200,
        required: true
    }, 
    applicationType: {
        type: String,
        required: true,
        enum: ['Hacker', 'Judge']
    },
    ucscStudent: {
        type: String,
        enum: ['Yes', 'No'],
        required: function () { return this.applicationType === 'Hacker'; }     // only required if applicationType is 'Hacker'
    },
    otherSchool: {
        type: String,
        minlength: 1,
        maxlength: 50,
        required: function () { return this.ucscStudent === 'No'; }     // only required if ucscStudent is 'No'
    },
    currentComp: {
        type: String,
        minlength: 1,
        maxlength: 50,
        required: function () { return this.applicationType === 'Judge'; }      // only required if applicationType is 'Judge'
    }
});

export default mongoose.model("User", userSchema);

//users