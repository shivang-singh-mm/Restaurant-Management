import mongoose from "mongoose";
import { cusine } from "../model/cusine";
import { restaurant } from "../model/restaurant";


export class UserServices {
    cusine;
    restaurant;
    constructor(){
        this.cusine = cusine;
        this.restaurant = restaurant;
    }

    async getAllRestaurants(){
        return await this.restaurant.find();
    }
    async getCusinesOfTheRestaurant(restaurantId:String){
        return await this.cusine.find({ref_id:restaurantId});
    }
}