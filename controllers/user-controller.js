import User from '../model/User.js';

// get all user info function (for debugging)
export const getAllUser = async(req, res, next)=>{
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if (!users){
        return res.status(404).json({message: "No Users Found"});
    }
    return res.status(200).json({users})
};

export const getByEmail = async(req, res, next) => {
    //body
    const userEmail = req.params.email;
    let users;
    try {
        users = await User.findOne({email: userEmail});
    } catch (err) {
        return console.log(err);
    }

    if (!users) {
        return res.status(404).json({message: "User Not Found"});
    }
    return res.status(200).json({users});
};

export const getById = async(req, res, next) => {
    const userId = req.params.id;

    let user;
    try{
        user = await User.findById(userId);
    } catch (err) {
        return console.log(err);
    }
    if (!user) {
        return res.status(404).json({message: "User Not Found"});
    }
    return res.status(200).json({user});
};

export const apply = async(req, res, next) => {
    const {name, gender, otherGender, email, age, applicationType, ucscStudent, otherSchool, currentComp} = req.body;

    // check if user already exists
    let existingUser;
    try {
        existingUser = await User.findOne({email})
    } catch (err) {
        return console.log(err)
    }
    if (existingUser){
        return res.status(400).json({message: "User Already Exists"});
    }

    // if user does not exist, create new user
    const user = new User(req.body);

    // try catch block to save user
    try{
        await user.save();
    } catch (err) {
        return console.log(err)
    }

    return res.status(201).json({user})
};