import express from 'express'
import http from 'http'
import { createRoutes } from './routes';
import router from '../api';
import * as bodyParser from 'body-parser';
export class ExpressServer {
    readonly port : number;
    public app : express.Application;
    constructor(port: number){
        this.port = port;
        this.app = express()
    }

    async start(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}))
        // this.app.use(bodyParser.json());
        // this.app.use(bodyParser.urlencoded({ extended: true }));
        await createRoutes(router,this.app)
        const server = http.createServer(this.app)
        server.listen(this.port, ()=> console.info(`Server running at port ${this.port}`))
    }

}