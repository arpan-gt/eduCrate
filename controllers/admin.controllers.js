import { Admin } from "../models/Admin.models.js";
import { Course } from "../models/Course.model.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const signup = async (req, res) => {

  const { userName, email, password } = req.validatedData;

  try {
    const existingAdmin = await Admin.findOne({ email })
    if (existingAdmin) {
      return res.status(409).json(
        {
          message: "email already registered"
        }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create(
      {
        userName, email, password: hashedPassword
      })

    return res.status(201).json(
      {
        message: "Admin registered successfully",
        admin: {
          id: admin._id,
          email: admin.email
        }
      }
    )
  } catch (err) {
    return res.status(500).json(
      {
        message: "something went wrong",
        error: err.message
      }
    )
  }
};

const signin = async (req, res) => {

  const { email, password } = req.validatedData;
  try {
    const existingAdmin = await Admin.findOne({ email });
    if (!existingAdmin) {
      return res.status(400).json(
        {
          message: "user not registered"
        }
      )
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingAdmin.password);
    if (!isPasswordCorrect) {
      return res.status(401).json(
        {
          message: "Invalid credentials"
        }
      )
    }

    const token = jwt.sign({ adminId: existingAdmin._id }, process.env.JWT_ADMIN_SECRET, { expiresIn: "1h" });

    return res.status(200).json(
      {
        message: "Admin signin successfully",
        token,
        admin: {
          id: existingAdmin._id,
          userName: existingAdmin.userName
        }
      }
    )
  } catch (err) {
    console.error("Error in signin:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const createCourse = async (req, res) => {

  const { title, description, price } = req.validatedData;
  try {
    const course = await Course.create({ title, description, price });

    return res.status(201).json({
      message: "Course created successfully", course
    })
  }
  catch (err) {
    console.log("error creating course", err);
    return res.status(500).json({
      message: "Internal server error"
    })
  }
};

const updateCourse = async (req, res) => {
  const { id } = req.params;

  const { title, description, price } = req.validatedData;

  try {
    const updatedCourse = await Course.findByIdAndUpdate(id, { title, description, price }, { new: true, runValidators: true });

    if (!updatedCourse) {
      return res.status(404).json({
        message: "Course not found"
      })
    }

    return res.status(200).json({
      message: "Course updated successfully",
      course: updatedCourse
    })
  } catch (err) {
    console.error("Error updating course:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

const allCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    return res.status(200).json(
      {
        message: "Courses fetched successfully",
        courses
      });
  } catch (err) {
    console.error("Error fetching courses:", err);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
}

const deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({
        message: "Course not found"
      })
    }

    return res.status(200).json({
      message: "Course deleted successfully",
      deletedCourse
    })
  } catch (err) {
    console.log("error deleting course", err);
    return res.status(500).json({
      message: "Internal server error"
    })
  }
}


export { signin, signup, createCourse, updateCourse, allCourses, deleteCourse }