const mongoose = require('mongoose');
const { Schema } = mongoose;

const shopSchema = new Schema({
    owner_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    shop_name : {
        type: String,
        required: true
    },
    shop_type : {
        type : String,
        required : true
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

const Shop = mongoose.model('shop', shopSchema);
module.exports = Shop;