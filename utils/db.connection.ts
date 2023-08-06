import mongoose,{ConnectOptions} from "mongoose";
import * as mongoDB from "mongodb"
import dotenv from 'dotenv';
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

// export async function connectToDatabase () {
//     dotenv.config();
    
 
//     const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_URL);
            
//     await client.connect();
        
//     // const db: mongoDB.Db = client.db(process.env.DB_NAME);

 
       
//     console.log(`Successfully connected to database`);
//  }

// export async function connectToDatabase() { // add async
//     console.log('connecting to mongo');

//     try {
//     //   if (client) { // I added this extra check
//         console.log('setting client');
//         const client = await mongoDB.MongoClient.connect(this.connectionString, { useNewUrlParser: true })
//         console.log(client);      
//     //   }
//     } catch(error) {
//       console.log('error during connecting to mongo: ');
//       console.error(error);
//     }    
// }

 declare var process : {
    env: {
      DB_URL: string
    }
  }

