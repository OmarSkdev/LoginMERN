import mongoose from 'mongoose'

export const conectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1/merndb');
        console.log(" BD conectada");
        
    } catch (error) {
        console.log(error);
    }

};