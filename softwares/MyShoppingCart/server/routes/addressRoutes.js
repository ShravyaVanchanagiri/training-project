/**
 * Created by shravya on 17/3/17.
 */
var userModel = require('../models/usersModel');
var addressModel = require('../models/addressModel');
var config = require("../config/config");
var prepareRes = require("../apiUtils/prepareRes");

var addressRouter={
    storeAddress : function(req,res){
        var queryParam=req.body;
        console.log(queryParam.address);
        var address=new addressModel({
            type:queryParam.address.atype,
            addressLine1:queryParam.address.al1,
            addressLine2:queryParam.address.al2,
            street:queryParam.address.street,
            city:queryParam.address.city,
            state:queryParam.address.state,
            country:queryParam.address.country,
            zip:queryParam.address.zip
        });
        address.save(function(err) {
            if (err) {
                console.log("Error", err);
            }else{
                userModel.findOne({_id:queryParam.userId},function(error,response){
                    if(error){
                        console.log("error",error);
                    }else{
                        if(response){
                            console.log(response.addresses);
                            console.log(address);
                            response.addresses.push(address._id);
                            response.save(function(err1){
                                if(err1){
                                    console.log("err1",err1);
                                }else{
                                    var add=response;
                                    res.send(prepareRes(200,add,"OK"))
                                }
                            })
                        }
                    }
                })
            }
        })
    }
};
module.exports=addressRouter;