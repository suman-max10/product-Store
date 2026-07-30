import mongoose from 'mongoose';    


const productSchema = new mongoose.Schema({
    name:{
        type:String,    
        required:true   
    }  ,
    price:{ 
        type:Number,    
        required:true
    }  ,
    Image   :{
        type:String,    
        required:true},

 },{
    timestamps:true // createdat and updatedat fields will be automatically added to the schema 
 }
);

const Product = mongoose.model('Product', productSchema); // 'Product' is the name of the collection in the database    

export default Product;      