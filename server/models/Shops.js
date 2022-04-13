const mongoose = require('mongoose');
const { Schema } = mongoose;

const shopSchema = new Schema({
    owner_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true,
        unique : true
    },
    shop_name : {
        type: String,
        required: true
    },
    shop_type : {
        type : String,
        required : true
    }
})

const Shop = mongoose.model('shop', shopSchema);
module.exports = Shop;