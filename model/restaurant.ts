import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name:{type:String},
    adress:{type:String},
    phone:{type:String},
    pictures:[{type:String}]
})

export const restaurant = mongoose.model('restaurant',restaurantSchema);
// exports = restaurant;