import { connectToDatabase } from "./utils/db.connection";
import { ExpressServer } from "./utils/server";
connectToDatabase().then(e=>{
    const server = new ExpressServer(parseInt(process.env.PORT || '9999', 10));
    server.start();
}).catch(err=>console.log(err));
