const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    shop_name : {
        type: String,
        required: true
    },
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
        }
    ]
})

const Order = mongoose.model('order', orderSchema);
module.exports = Order;