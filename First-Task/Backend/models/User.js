const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,   
  },
    password: {
    type: String,
    required: true,
  },    
  isVerified: {
    type: Boolean,
    default: false, 
    },
    verifyToken: {
    type: String,
    default: null,      
    },
    verifyTokenExpire: {
    type: Date,
    default: null,
    },
    resetToken: { 
        type: String,
        default: null,
    }, 
    resetTokenExpire: {
        type: Date,
        default: null,
    },
    twoFAcode:{
        type: String,
        default: null,
    },
    twoFAcodeExpire: {
        type: Date,
        default: null,
    },
  },
  { timestamps: true }
); 

module.exports = mongoose.model('User', userSchema);