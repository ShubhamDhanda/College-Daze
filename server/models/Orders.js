const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    shop_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Shop",
        required : true
    },
    item_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Item",
        required : true
    },
    quantity : {
        type : Number,
        required: true
    }
},
{
    timestamps : true
})

const Order = mongoose.model('order', orderSchema);
module.exports = Order;