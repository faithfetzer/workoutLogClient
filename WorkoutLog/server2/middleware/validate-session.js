require("dotenv").config;
const jwt = require("jsonwebtoken");
const {UserModel} = require('../models');

const validateSession = async (req, res, next) =>{
    console.log(req.body);
    console.log(req.method);
    console.log(req.headers.authorization);
    let test =jwt.verify(process.env.JWT_SECRET);
    console.log(test);
    // if(req.method === 'OPTIONS'){
    //     return next()
    // } else 
    if(req.headers.authorization){
        const {authorization} = req.headers;
        console.log("authorization-->", authorization);
        const payload = authorization ? jwt.verify(authorization, process.env.JWT_SECRET) : undefined
        console.log("payload -->", payload);
        if(payload){
            let foundUser = await UserModel.findOne({
                where: {id: payload.id}
            });
            console.log("foundUser -->", foundUser);
            if(foundUser){
                console.log("request -->", req);
                req.user = foundUser;
                next()
            } else {
                res.status(400).send({
                    message: "Not authorized"
                })
            } 
        } else {
            res.status(401).send({
                message: "Invalid token"
            })
        }
    } else {
        res.status(403).send({
            message: "Forbidden"
        })
    }
}

module.exports = validateSession;