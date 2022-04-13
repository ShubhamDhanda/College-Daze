const mongoose = require('mongoose');
const { Schema } = mongoose;

const subsSchema = new Schema({
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
    time_limit : {
        type : Number,
        required : true
    }
},
{
    timestamps : true
})

const Subs = mongoose.model('subs', subsSchema);
module.exports = Subs;