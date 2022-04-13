const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    shop_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    item_quantity: {
        type: Number,
        required: true
    },
    item_price: {
        type: Number,
        required : true
    },
    item_desc: {
        type: String
    }
},
{
    timestamps : true
})

const Item = mongoose.model('item', itemSchema);
module.exports = Item;