const express= require("express");
const UserModel= require("../Schema/user")
const expressAsyncHandler = require("express-async-handler");

const loginController=()=>{

};

const registerController =expressAsyncHandler (async (req,res)=>{
    const {name,email,password} = req.body;

    // check for all fields
    if(!name || !email || !password){
        res.send(400);
        throw Error("All necessary input fields have not been filed");
    }

    // if a user already exists
    const userExists = await UserModel.findOne({email});
    if(userExists){
        throw new Error("User already Exists");
    }

    // userName already Taken
    const userNameExists = await UserModel.findOne({email});
    if(userNameExists){
        throw new Error("Name already taken");
    }

    // Adding the user to database
    const user=await UserModel.create({name,email,password});
});
