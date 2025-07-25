import { Course } from "../models/Course.model.js";
import { Purchase } from "../models/Purchase.models.js";

const purchase = async (req, res) => {
  const userId = req.userId;
  const { courseId } = req.body;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    };

    const existingCourse = await Purchase.findOne({ userId, courseId });
    if (existingCourse) {
      return res.status(409).json({
        message: "Course already purchased"
      })
    };

    const purchase = await Purchase.create({
      userId,
      courseId,
      creatorId: course.creatorId
    });

    return res.status(201).json({
      message: "Course purchased successfully",
      purchase
    });
  } catch (err) {
    console.error("Error purchasing course:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}


const preview = async (req, res) => {

  try {
    const courses = await Course.find();

    return res.status(200).json({
      message: "Courses fetched successfully",
      courses
    })

  } catch (err) {
    console.error("Error fetching courses:", err);
    return res.status(500).json({ message: "Internal server error" });
  }

}

const previewOne = async (req, res) => {
  const { id } = req.params;

  try {

    const course = await Course.findById(id);

    if (!course) {
      return res.status(400).json({
        message: "Course not found"
      })
    }

    return res.status(200).json({
      message: "Course fetched successfully",
      course
    })
  } catch (err) {
    console.error("Error fetching course:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
export { purchase, preview }