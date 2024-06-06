//this will house database connection
import mongoose from "mongoose";
import config from 'config'
import log from "./logger";

async function connect(){
  const dbUri = config.get<string>('dbUri')

    try{
        await mongoose.connect(dbUri)
        log.info('connected to Database');
        
    }catch(error){
        log.info('Coould not connect to Database');
        process.exit(1)
        
    }

}
  

export default connect