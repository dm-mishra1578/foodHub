const mongoose = require('mongoose');

const mongoURI = "mongodb://dm1578738:Dev%402026@clusterdb-shard-00-00.rongo.mongodb.net:27017,clusterdb-shard-00-01.rongo.mongodb.net:27017,clusterdb-shard-00-02.rongo.mongodb.net:27017/goFood?ssl=true&replicaSet=atlas-pewfyu-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ClusterDB";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
        
        // Fetching the collection
        const fetched_data = await mongoose.connection.db.collection("food_item");
        const foodCategory = await mongoose.connection.db.collection("foodCategary");
        // Reading data
        const data = await fetched_data.find({}).toArray();
        const CategaryData = await foodCategory.find({}).toArray();

        global.food_items = data;
        // console.log(global.food_items);
        // console.log(global.CategaryData);
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
    }
};

module.exports = mongoDB;


// const mongoose = require('mongoose');
// // const mongoURI = "mongodb+srv://dm1578738:Dev%402026@clusterdb.rongo.mongodb.net/goFood?retryWrites=true&w=majority&appName=ClusterDB";
// const mongoURI="mongodb://dm1578738:Dev%402026@clusterdb-shard-00-00.rongo.mongodb.net:27017,clusterdb-shard-00-01.rongo.mongodb.net:27017,clusterdb-shard-00-02.rongo.mongodb.net:27017/goFood?ssl=true&replicaSet=atlas-pewfyu-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ClusterDB"
// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI);
//         console.log('Connected to MongoDB');
        
//         // Fetching the collection
//         const fetched_data = await mongoose.connection.db.collection("food_item");
        
//         // Reading data
//         fetched_data.find({}).toArray(function (err, data) {
            
//             if (err) console.log("Error:", err);
//             else{
//                 global.food_items=data;
//                 console.log(global.food_items);
//             } 
//         });
//     } catch (err) {
//         console.error('Error connecting to MongoDB', err);
//     }
// };


// // const mongoDB = async () => {
// //     try {
// //         await mongoose.connect(mongoURI);
// //         console.log('Connected to MongoDB');
// //     } catch (err) {
// //         console.error('Error connecting to MongoDB', err);
// //     }
// // };

// module.exports = mongoDB;


