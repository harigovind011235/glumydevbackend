import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  username: { type: String, required: true, min: 4, unique: true },
  password: { type: String, required: true },
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
      "Please enter a valid email address",
    ],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    unique: true,
    match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"],
  },
  highestQualification: {
    type: String,
    enum: [
      "High School",
      "Associate Degree",
      "Bachelor's Degree",
      "Master's Degree",
      "Doctorate",
      "None",
    ],
    default: "None",
    required: [true, "Highest Qualification is required"],
  },
  courseStudied: {
    type: String,
    enum: ["FSD", "DSA", "ML-AI", "RPA", "ST", "CSA", "None"],
    default: "None",
    required: [true, "Course studied at ICTAK is required"],
  },
  batchDetails: {
    type: String,
    enum: ["KKEM", "NORKA", "KDISC", "None"],
    default: "None",
    required: [true, "Batch details is required"],
  },
  placementStatus: {
    type: String,
    enum: ["Placed", "Job-Seeking", "None"],
    default: "None",
    required: [true, "Placement status is required"],
  },
  companyName: {
    type: String,
    default: "None",
  },
  userType: {
    type: String,
    enum: ["Alumni", "Employer", "Admin"],
    default: "Admin",
    required: [true, "User type is required"],
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
