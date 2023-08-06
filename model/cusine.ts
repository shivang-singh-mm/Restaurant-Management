import {restaurant} from './restaurant'
import mongoose from 'mongoose'
import * as mongoDB from 'mongodb'

const cusineSchema = new mongoose.Schema({
    ref_id:{ref:restaurant,type:mongoose.Types.ObjectId},
    dishName:{type:String},
    description:{type:String},
    categoryOfFood:{type:String},
    pictures:[{type:String}],
    ingredients:[{type:String}],
})

export const cusine = mongoose.model('cusine',cusineSchema);
// mongoDB.model/
// mongoose.Connection.on()