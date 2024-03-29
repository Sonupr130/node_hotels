const express = require('express');
const router = express.Router();
const MenuItem = require("./../models/MenuItem");

// POST method to add menuItems
router.post("/", async (req, res) => {
    try {
      const data = req.body; 
  
      const newMenu = MenuItem(data);
  
      const response = await newMenu.save();
      console.log("Data Saved!");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  
  // GET method to get the MenuItems
  router.get('/', async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log("Data Fetched!");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // This is my Comment

  module.exports = router;