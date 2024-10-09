require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");

// database connection
connection();

//Define Gender Equality Schema
const equalPay = new mongoose.Schema({
    employeeDiversity: {
      totalEmployees: {
        type: Number,
        required: true,
      },
      maleEmployees: {
        type: Number,
        required: true,
      },
      femaleEmployees: {
        type: Number,
        required: true,
      },
    },
    genderDiversityRatio: {
      malePercentage: {
        type: Number,
        required: true,
      },
      femalePercentage: {
        type: Number,
        required: true,
      },
    },
  });

  
// middlewares
app.use(express.json());
app.use(cors());

//Get Routes.
app.get("/api/equal-pay",async(req,res)=>{
    try {
        const equalPayData = await EqualPay.find();
        res.json(equalPayData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));