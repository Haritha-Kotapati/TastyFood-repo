const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Harithalkv:admin123@cluster0.rhncrcd.mongodb.net/Restaurant?retryWrites=true&w=majority"


//Connect to MongoDB
const connectToDB = async () => {  
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName:'Restaurant', //The database name
        });
        console.log("Connectd to MongoDB");

        const fetched_data = await mongoose.connection.db.collection("FoodMenu");
        //const data = await collection.find({}).toArray();
        
        fetched_data.find({}).toArray(async function(err, data){
            const foodCategory = await mongoose.connection.db.collection("FoodCategory");
            foodCategory.find({}).toArray(function (err,catData){
                if(err) console.log(err);
                else{
                     global.FoodMenu = data;
                     global.FoodCategory = catData;
                     console.log(data);
                }
            })
       });
        
    //   console.log('Data from the "FoodCategory" collection:');
    //    console.log(data);

    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }

};
module.exports = connectToDB;
