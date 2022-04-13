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
        required: true,
        unique : true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required : true
    },
    desc: {
        type: String
    }
},
{
    timestamps : true
})

const Item = mongoose.model('item', itemSchema);
module.exports = Item;