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
var prepareRes = require("../apiUtils/prepareRes");
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
                                        text: "Hi user.."+serverAddress+"/#!/confirmRegistration/"+newToken.token
                                    }, function(error, response){  //callback
                                        if(error){
                                            console.log("Error",error);
                                        }else{
                                            console.log("Message sent: " + response.message);
                                        }

                                        smtpTransport.close();
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
    confirmReg : function(req,res){
        console.log(req.query);
        var token = req.query.token;
        /*console.log(token);*/
        var tokenType = tokenEnums.REGISTRATION.code;
        tokenModel.findOne({token : token},function(err,resp){
            if(err){
                console.log("error",err);
            }else{
                console.log(resp);
                userModel.findOneAndUpdate({email : resp.email},{$set:{isActive : true}},function(error,response){
                    if(error){
                        console.log(error);
                    }else{
                        console.log(token);
                        tokenModel.remove({token : token},function(err1,res1){
                            if(err1){
                                console.log(err1);
                            }else{
                                var newToken=new tokenModel();

                                res.send({status:200});
                            }
                        });
                    }
                })
            }
        })
    },
    login : function(req,res){
        console.log(req.query);
        try {
            userModel.findOne({email : req.query.email}, function (error, response) {
                if (error) {
                    response.send(error);
                } else {
                    if(response){
                        console.log(response);
                        console.log(response.password);
                        var comparePass = passwordHash.verify(req.query.pass,response.password);
                        console.log(req.query.pass);
                        //console.log(response);
                        console.log(response.password);
                        if(comparePass == true){
                            console.log("in password compare");
                            var newToken=new tokenModel();
                            newToken.token=jwt.encode(req.query.email,'xxx');
                            if (newToken.token) {
                                newToken.type = tokenEnums.AUTH.code;
                                newToken.email = req.query.email;
                                newToken.startDate = Date.now();
                                newToken.updatedDate = Date.now();
                                newToken.save(function (err, data) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        //console.log(data);
                                        var details={};
                                        details.email = response.email;
                                        details._id=response._id;
                                        details.firstName=response.firstName;
                                        details.lastName=response.lastName;
                                        details.isActive=response.isActive;
                                        details.tokenId = newToken._id;
                                        res.send(prepareRes(200,details,"OK"));
                                    }
                                })
                            }
                        }
                    }

                }
            });
        } catch(error) {
            console.log("Error...",error);
        }
    },
    logOut: function(req,res){
        try{
            console.log(req.query);
            tokenModel.remove({_id : req.query.token,email : req.query.email},function(error,response){
                if(error){
                    console.log("error");
                    response.send(error);
                }else {
                    res.send(prepareRes(200,"","OK"));
                }
            });

        }catch(error){
            console.log("Error:",error);
        }
    },
    forgot: function(req,res){
        var queryParams=req.body ? req.body : req.query;
        var emailId=queryParams.q;
        try{
            console.log("In try");
            console.log(emailId);
            var serverAddress = req.protocol + '://' + req.get('host');
            userModel.findOne({email : emailId},function(error,response){
                if(error){
                    response.send(error);
                }else{
                    console.log(response);
                    if(response!=null){
                        var newToken=new tokenModel();
                        newToken.token=jwt.encode(emailId,'xxx');
                        if(newToken.token) {
                            newToken.type = tokenEnums.OTP.code
                            newToken.email = emailId;
                            newToken.startDate = new Date();
                            newToken.updatedDate = new Date();
                            newToken.save(function(err,data){
                                if(err){
                                    console.log(err);
                                }else{
                                    smtpTransport.sendMail({  //email options
                                        from: config.mailer.auth.user,
                                        to: emailId, // receiver
                                        subject: "Forgot Password", // subject
                                        text: "Hi user..You requested to reset you password click on below link to reset password "+serverAddress+"/#!/resetPass/"+newToken.token
                                    }, function(error, response){  //callback
                                        if(error){
                                            console.log("Error",error);
                                        }else{
                                            console.log("Message sent: " + response.message);
                                        }

                                        smtpTransport.close();
                                    });
                                }
                            })
                        }
                    }
                }
            });
        }catch(error){
            console.log("error:"+error);
        }
    },
    resetPass : function(req,res){
        console.log(req.query);
        var token = req.query.token;
        var pass = passwordHash.generate(req.query.pass);
        var tokenType = tokenEnums.OTP.code;
        tokenModel.findOne({token : token},function(err,resp){
            if(err){
                console.log("error",err);
            }else{
                console.log(resp);
                userModel.findOneAndUpdate({email : resp.email},{$set:{password : pass}},function(error,response){
                    if(error){
                        console.log(error);
                    }else{
                        console.log(token);
                        tokenModel.remove({token : token},function(err1,res1){
                            if(err1){
                                console.log(err1);
                            }else{
                                var newToken=new tokenModel();
                                res.send({status:200});
                            }
                        });
                    }
                })
            }
        })

    },
};
module.exports=userRouter;

