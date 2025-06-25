import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('{ Add your mongodb URI Here }/food-del').then(()=>console.log("DB Connected"));
   
}
