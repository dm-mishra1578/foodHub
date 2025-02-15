const express = require('express')
const app = express()
const port = 5000

const mongoDB = require("./db")
mongoDB();
//
app.use((req,res, next)=>{

  res.setHeader("Access-Control-Allow-Origin", "https://food-hub-react-lime.vercel.app");
  
  res.header(
  
  "Access-Control-Allow-Headers",
  
  "Origin, X-Requested-With, Content-Type, Accept"
  
  );
  
  next();
})  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());//Middleware to parse JSON requests
// Mount the routes
// app.use('/api/',require("./Routes/CreatUser"));
// app.use('/api/',require("./Routes/DisplayData"));
app.use('/api/auth', require('./Routes/Auth'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})