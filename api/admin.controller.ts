import { Request, Response } from "express";
import { AdminServices } from "../services/admin.services";

const admin = new AdminServices;

export const createRestaurant = async (req:Request,res:Response) => {
    const arr:any = [];

    // Itereation through files of req.files
    const iterate = (obj:any) => {
      const stack = [obj];
      while (stack?.length > 0) {
        const currentObj = stack.pop();
        Object.keys(currentObj).forEach(key => {
          if (key == 'path') arr.push(currentObj[key])
          if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
            stack.push(currentObj[key]);
          }
        });
      }
    };
    iterate(req.files)
    const data = {
        name: req.body.name,
        adress: req.body.adress,
        phone: req.body.phone,
        pictures: arr,
        // _id:'641d82536e97d7387353bd65'
    }
    try{
        const body = await admin.createRestaurant(data);
        // console.log(data)
        res.status(400).json({sucess:true,body:body})
    }
    catch(err){
        res.status(404).json({sucess:false, error: err});
        console.log(err)
    }
}

export const createCusine = async (req:Request,res:Response) => {
    const arr:any = [];

    //Itereation through files of req.files
    const iterate = (obj:any) => {
      const stack = [obj];
      while (stack?.length > 0) {
        const currentObj = stack.pop();
        Object.keys(currentObj).forEach(key => {
          if (key == 'path') arr.push(currentObj[key])
          if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
            stack.push(currentObj[key]);
          }
        });
      }
    };
    iterate(req.files)
    const data = {
        ref_id: req.body.ref_id,
        dishName:req.body.name,
        description: req.body.description,
        categoryOfFood:req.body.categoryOfFood,
        pictures:arr,
        ingredients:req.body.ingredients
    }
    try{
        const body = await admin.createCusine(data);
        res.status(400).json({sucess:true,body:body})
    }
    catch(err){
        console.log(err)
        res.status(404).json({sucess:false, error: err})
    }
}

export const deleteRestaurant = async (req:Request,res:Response) => {
    const data = {
        restaurantId:req.body.restaurantId
    }
    try{
        const body = await admin.deleteRestaurant(data.restaurantId)
        res.status(400).json({sucess:true,body:body})
    }
    catch(err){
        res.status(404).json({sucess:false, error: err})
    }
}

export const deleteCusine = async (req:Request,res:Response) => {
    const data = {
        cusineId: req.body.cusineId
    }
    try{
        const body = await admin.deleteCusine(data.cusineId)
        res.status(400).json({sucess:true,body:body})
    }
    catch(err){
        res.status(404).json({sucess:false, error: err})
    }
}

