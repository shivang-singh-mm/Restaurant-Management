import mongoose,{ObjectId} from "mongoose";
import { UserServices } from "../services/user.services";
import { Request,Response } from "express";

const user = new UserServices;

export const getRestaurant =async (req:Request,res:Response) => {
    try{
        const body = await user.getAllRestaurants();
        res.status(400).json({sucess:true,body:body})
    }
    catch(err){
        res.status(404).json({sucess:false, error: err})
    }
}

export const getCusines = async (req:Request,res:Response) => {
    const data = {
        restaurantId: req.body.restaurantId
    };
    try{
        const body = await user.getCusinesOfTheRestaurant(data.restaurantId)
        res.status(400).json({sucess:true,body:body})
    }
    catch(err){
        res.status(404).json({sucess:false, error: err})
    }
}

