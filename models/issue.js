const mongoose = require('mongoose');

// creating schema for project

const issueSchema = new mongoose.Schema({

    issueName : {
        type: String ,
        required : true ,
        unique : true ,
    },
    issueDescription :{
        type :String ,
        max : 200,
    },
    
    lable:[{
            type: String
        }],
    issueAuthor :{
        type:String,
        required :true 
    },
    projectID :{
        type: String
    }   
},{
    timestamps: true
});


const Issues = mongoose.model('Issues', issueSchema);
module.exports = Issues;