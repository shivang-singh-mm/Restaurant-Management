import express from "express";
import multer from 'multer'
import { getCusines,getRestaurant} from "./user.controller";
import { createCusine,createRestaurant,deleteCusine,deleteRestaurant} from "./admin.controller";

const storage = multer.diskStorage({
    destination: './public',
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        __filename = file.fieldname + '-' + uniqueSuffix + '-' + file.originalname
        cb(null, __filename)
    }
});

const upload = multer({storage: storage})

const router = express.Router();

router.post('/user/getRestaurant',getRestaurant);
router.post('/user/getCusine',getCusines);
router.post('/create/Cusine',upload.array('media',10),createCusine);
router.post('/create/Restaurant',upload.array('media',10),createRestaurant);
router.post('/delete/Restaurant',deleteRestaurant);
router.post('/delete/Cusine',deleteCusine);

export default router; 