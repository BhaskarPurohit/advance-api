//when req comes in, we will provide a schema and the request will be validated against that schema
import { Request, Response, NextFunction } from "express"
import {AnyZodObject} from 'zod'
const validate = (schema: AnyZodObject)=> (req:Request , res:Response , next:NextFunction)=>{ //curried funciton
    try{
        schema.parse({
            //creating schema to validate
            body: req.body,
            query: req.query,
            params: req.params
        })
    }catch(e:any){
        return res.status(400).send(e.errors)
    }
}

export default validate