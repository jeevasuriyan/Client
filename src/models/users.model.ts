// users-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { log } from 'winston';
import { Application } from '../declarations';
import { Model, Mongoose, model } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'users';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  
  //this is for password avlidation
  
  
  const schema = new mongooseClient.Schema({
    fname:{
      type:String, required:true
    },
    lname:{
      type:String,required:true
    },
    email: { 
      type: String, unique: true, lowercase: true,required:true
    },
    password: {
      type: String, required:true
    },
    resetLink:{
      data:String,
      default:''
    }
  }, {
    timestamps: true,
    
  });

  
  // This is necessary to avoid model compilation errors in watch mode
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
