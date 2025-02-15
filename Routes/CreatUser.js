// const express = require('express');
// const router = express.Router();
// const { body, validationResult } = require('express-validator');

// const jwt = require("jsonwebtoken");
// const jwtSecret = "ucgbuiecsyrveubef";

// // Import User model
// const User = require('../models/User');

// const bcrypt = require("bcryptjs");

// // Create user login route
// router.post('/loginUser', [
//     body('email').isEmail(),
//     body('password', "incorrect password").isLength({ min: 5 })]
//     , async (req, res) => {
//         // Validate request
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         let email = req.body.email;
//         let password = req.body.password;
//         try {

//             let userData = await User.findOne({ email })
//             if (!userData) {
//                 console.log("enter valid email");
//                 return res.status(400).json({ errors: "enter correct credetials!" });
//             }
//             const pwdCompare = await bcrypt.compare(password,userData.password);// compare the enter password with stored password
//             if (!pwdCompare) {
//                 console.log("enter valid emial");
//                 return res.status(400).json({ errors: "enter correct password!" });
//             }
//             const data ={
//                 user:{
//                     id:userData.id
//                 }
//             }
//             const authToken =jwt.sign(data,jwtSecret);// create a random token 
//             return res.json({ success: true ,authToken:authToken });

//         }
//         catch (error) {
//             console.log(error);
//             res.json({ success: false });
//         }
//     });


// // Create user route
// router.post('/creatUser', [
//     body('email').isEmail(),
//     body('password', "incorrect password").isLength({ min: 5 })
// ], async (req, res) => {
//     // Validate request
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     const salt = await bcrypt.genSalt(10);//to genrate random bits to add in password for security..
//     let secPassword = await bcrypt.hash(req.body.password, salt);//wrap the salt in password..
//     try {
//         // await User.create({
//         //     name: "Dev",
//         //     password: "5164",
//         //     location: "bgieguyiygyygu",
//         //     email: "@gmail.com",

//         // })
//         // console.log()
//         await User.create({
//             name: req.body.name,
//             password: secPassword,
//             location: req.body.location,
//             email: req.body.email,

//         })
//         res.json({ success: true });

//     }
//     catch (error) {
//         console.log(error);
//         res.json({ success: false });

//     }


    
// // Get logged in User details, Login Required.
// router.post('/getuser', fetch, async (req, res) => {
//     try {
//         const userId = req.user.id;
//         const user = await User.findById(userId).select("-password") // -password will not pick password from db.
//         res.send(user)
//     } catch (error) {
//         console.error(error.message)
//         res.send("Server Error")

//     }
// })
// // Get logged in User details, Login Required.
// router.post('/getlocation', async (req, res) => {
//     try {
//         let lat = req.body.latlong.lat
//         let long = req.body.latlong.long
//         console.log(lat, long)
//         let location = await axios
//             .get("https://api.opencagedata.com/geocode/v1/json?q=" + lat + "+" + long + "&key=74c89b3be64946ac96d777d08b878d43")
//             .then(async res => {
//                 // console.log(`statusCode: ${res.status}`)
//                 console.log(res.data.results)
//                 // let response = stringify(res)
//                 // response = await JSON.parse(response)
//                 let response = res.data.results[0].components;
//                 console.log(response)
//                 let { village, county, state_district, state, postcode } = response
//                 return String(village + "," + county + "," + state_district + "," + state + "\n" + postcode)
//             })
//             .catch(error => {
//                 console.error(error)
//             })
//         res.send({ location })

//     } catch (error) {
//         console.error(error.message)
//         res.send("Server Error")

//     }
// })

//     router.post('/orderData', async (req, res) => {
//         let data = req.body.order_data
//         await data.splice(0,0,{Order_date:req.body.order_date})
//         console.log("1231242343242354",req.body.email)
    
//         //if email not exisitng in db then create: else: InsertMany()
//         let eId = await Order.findOne({ 'email': req.body.email })    
//         console.log(eId)
//         if (eId===null) {
//             try {
//                 console.log(data)
//                 console.log("1231242343242354",req.body.email)
//                 await Order.create({
//                     email: req.body.email,
//                     order_data:[data]
//                 }).then(() => {
//                     res.json({ success: true })
//                 })
//             } catch (error) {
//                 console.log(error.message)
//                 res.send("Server Error", error.message)
    
//             }
//         }
    
//         else {
//             try {
//                 await Order.findOneAndUpdate({email:req.body.email},
//                     { $push:{order_data: data} }).then(() => {
//                         res.json({ success: true })
//                     })
//             } catch (error) {
//                 console.log(error.message)
//                 res.send("Server Error", error.message)
//             }
//         }
//     })
    
//     router.post('/myOrderData', async (req, res) => {
//         try {
//             console.log(req.body.email)
//             let eId = await Order.findOne({ 'email': req.body.email })
//             //console.log(eId)
//             res.json({orderData:eId})
//         } catch (error) {
//             res.send("Error",error.message)
//         }
//     })
    
// });





// module.exports = router;

