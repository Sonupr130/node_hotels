const express = require("express");
const db = require("./db");

// Models
const Person = require("./models/Person");
const MenuItem = require("./models/MenuItem");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("THIS IS MY HOTEL");
});

// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body; //Assuming the request body contains the person data

//     //Create a new person document using the mongoose model
//     const newPerson = Person(data);

//     // Save te new person to the database
//     const response = await newPerson.save();
//     console.log("Data Saved!");
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.get('/person', async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log("Data Fetched!");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // POST method to add menuItems
// app.post("/menu", async (req, res) => {
//   try {
//     const data = req.body; 

//     const newMenu = MenuItem(data);

//     const response = await newMenu.save();
//     console.log("Data Saved!");
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });


// // GET method to get the MenuItems
// app.get('/menu', async (req, res) => {
//   try {
//     const data = await MenuItem.find();
//     console.log("Data Fetched!");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });


// app.get('/Person/:workType', async(req, res) => {
//   try {
//     const workType = req.params.workType; //Extract the workType from the URL parameter
//     if(workType == 'chef' || workType == 'waiter' || workType == 'manager') {
      
//       const response = await Person.find({work: workType});
//       console.log('Response Fetched');
//       res.status(200).json(response);
//     } else {
//       res.status(404).json({error: 'Invalid workType'});
//     }
//   } catch (error) {
//     console.log(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// })

// Import route files
const personRoutes = require('./routes/personRoutes')
const menuItemRoutes = require('./routes/menuItemRoutes')

//use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(3000, () => {
  console.log("The port is running on Localhost 3000");
});
