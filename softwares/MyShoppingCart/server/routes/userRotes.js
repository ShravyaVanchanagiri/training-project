/**
 * Created by shravya on 14/3/17.
 */
var userModel = require('../models/usersModel');
var passwordHash = require('password-hash');
var tokenModel = require('../models/tokenModel');
var jwt = require('jwt-simple');
var tokenEnums = require('../enums/tokenEnums');
var nodemailer = require("nodemailer");
var config = require("../config/config");
var emailTemplates = require('email-templates');


var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: config.mailer.auth
});

var userRouter={
    registerUser:function(req,res){
        var queryParam=req.body;
        queryParam.pass = passwordHash.generate(queryParam.pass);
        function expiresIn(numDays) {
            var dateObj = new Date();
            return dateObj.setDate(dateObj.getDate() + numDays);
        }
        var serverAddress = req.protocol + '://' + req.get('host');

        userModel.findOne({email:queryParam.email},function(err,user){
            if(!user){
                new userModel({
                    firstName:queryParam.fname,
                    lastName:queryParam.lname,
                    email:queryParam.email,
                    password:queryParam.pass,
                    mobile:queryParam.phone
                }).save(function(err,response){
                    if(err){
                        console.log("Error",err);
                    }
                    else {
                        var newToken=new tokenModel();
                        newToken.token=jwt.encode(queryParam.email,'xxx');
                        console.log(newToken.token);
                        if(newToken.token) {
                            newToken.type = tokenEnums.REGISTRATION.code
                            newToken.email = queryParam.email;
                            newToken.startDate = new Date();
                            newToken.updatedDate = new Date();
                            /*newToken.save(function (err) {*/
                            newToken.save(function(err,data){
                                if(err){
                                    console.log(err);
                                }else{
                                    console.log(data);
                                    smtpTransport.sendMail({  //email options
                                        from: config.mailer.auth.user,
                                        to: queryParam.email, // receiver
                                        subject: "Activate Registration", // subject
                                        text: "hieee"+serverAddress+"/#!/confirmRegistration/:"+newToken.token
                                    }, function(error, response){  //callback
                                        if(error){
                                            console.log("Error",error);
                                        }else{
                                            console.log("Message sent: " + response.message);
                                        }

                                        smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
                                    });
                                }
                            })
                        }
                        console.log({status : 200})
                        res.send({status : 200});
                        res.end();
                    }
                })
            }
            else {
                console.log("user is all ready availabel");
                res.send({status : 404});
            }
        })
    },
    confirmReg:function(req,res){
        console.log(req.query);
        var token = req.query;
        var tokenType = tokenEnums.REGISTRATION.code;
        tokenModel.findOne({token : token},function(err, res){
            if(err){
                console.log("error",err);
            }else{
                res.send({status:200});
            }

        })

    }
};
module.exports=userRouter;

