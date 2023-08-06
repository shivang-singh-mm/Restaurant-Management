import mongoose,{ConnectOptions} from "mongoose";
export const connectToDatabase = async ()=>{
    mongoose.set('strictQuery', false);
    try{
        await mongoose.connect(process.env.DB_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        }as ConnectOptions);
        console.log("MongoDb connected sucessfully")
    }
    catch (error){
        console.log("MongoDb connection unsucessfully")
        console.log(error)
        // process.exit(1);
    }
}

 declare var process : {
    env: {
      DB_URL: string
    }
  }

