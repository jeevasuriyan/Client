// orders-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'orders';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    id:{ type: String, required:true},
    ram: { type: String, required:true},
    rom: { type: String, required:true},
    price: { type: String, required:true},
    color: { type: String, required:true},
    image: { type: String, required:true},
    name: { type: String, required:true},
    all: { type: String, required:true},
    type: { type: String, required:true},
    available: { type: String, required:true},
    progress:{type:Number}, 
  },{
    timestamps: true 
    //pass:{type: string, min:4,max:10} 

  });

  // This is necessary to avoid model compilation errors in watch mode
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
