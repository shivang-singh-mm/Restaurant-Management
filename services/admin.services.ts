import mongoose, { mongo } from "mongoose";
import { cusine } from "../model/cusine";
import { restaurant } from "../model/restaurant";
import * as mongoDB from 'mongodb';
export default class Game {
    constructor(public name: string, public price: number, public category: string, public id?: mongoose.Types.ObjectId) {}
}
export const collections: { games?: mongoDB.Collection } = {}
export class AdminServices {
    cusine;
    // restaurant;
    constructor(){
        this.cusine = cusine;
        // this.restaurant = restaurant;
    }
    async createRestaurant(restaurantData: any){
        return await restaurant.insertMany(restaurantData);
    }
    async createCusine(cusineData:any){
        return await this.cusine.insertMany(cusineData);
    }
    async deleteRestaurant(restaurantId: String){
        return await restaurant.deleteOne({_id: restaurantId});
    }
    async deleteCusine(cusineId: String){
        return await this.cusine.deleteOne({_id: cusineId});
    }
}