import express from "express";
const adminRouter = express.Router();
import { Admin } from '../models/Admin.models.js';
import bcrypt from 'bcrypt';

adminRouter.post("/signup", async (req, res) => 
  {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) 
      {
        return res.status(400).json(
          {
            message: "All fields are required"
          }
        )
      };

try{
    const existingAdmin = await Admin.findOne({ email })
    if (existingAdmin) 
      {
        return res.status(409).json(
          {
            message: "email already registered"
          }
        )
      }

    const hashedPassword = await bcrypt.hash(password,10);

    const admin = await Admin.create(
      {
        userName, email, password:hashedPassword
      })

    return res.status(201).json(
      {
        message:"Admin registered successfully",
        admin:{
          id:admin._id,
          email:admin.email
        }
      }
    )
}catch(err){
  return res.status(500).json(
    {
      message:"something went wrong",
      error:err.message
    }
  )
}


  })
export { adminRouter };
