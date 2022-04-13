const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    owner_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    shop_name : {
        type: String,
        required: true
    },
    items : [
        {
            item_name : {
                type: String,
                required : true
            },
            item_quantity : {
                type : Number,
                required : true
            },
            item_price : {
                type: Number
            },
            item_desc : {
                type : String
            }
        }
    ],
    orders : [
        {
            item_name : {
                type : String,
                required : true
            },
            item_quantity : {
                type : Number,
                required: true
            },
            orderedBy : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "User",
                required : true
            }
        }
    ]
})

const User = mongoose.model('user', userSchema);
module.exports = User;