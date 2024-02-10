const express = require('express');
const router = express.Router();
const Person = require("./../models/Person");

router.post("/", async (req, res) => {
    try {
      const data = req.body; 
  
      const newPerson = Person(data);
  
      const response = await newPerson.save();
      console.log("Data Saved!");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

router.get('/', async (req, res) => {
    try {
      const data = await Person.find();
      console.log("Data Fetched!");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  
  router.get('/:workType', async(req, res) => {
    try {
      const workType = req.params.workType; //Extract the workType from the URL parameter
      if(workType == 'chef' || workType == 'waiter' || workType == 'manager') {
        
        const response = await Person.find({work: workType});
        console.log('Response Fetched');
        res.status(200).json(response);
      } else {
        res.status(404).json({error: 'Invalid workType'});
      }
    } catch (error) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })

  router.put('/:id', async(req, res)=>{
    try{
        const personId = req.params.id;
        const updatedPersonId = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonId, {
            new: true, // Return the updated document
            runValidators: true // Run mongoose validiation
        });

        if(!response) {
            return res.status(404).json({error: 'Person not found!'});
        }

        console.log('Data Updated');
        res.status(200).json(response);
    } catch{
        console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }) 

  router.delete('/:id', async(req, res)=>{
    try {
        const personId = req.params.id;

        const response = await Person.findByIdAndDelete(personId);

        if(!response) {
            return res.status(404).json({error: 'Person not found!'});
        }

        console.log('Data Deleted');
        res.status(200).json({message: 'Person deleted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
  })

  module.exports = router;