const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
  },
  {
    collection: "UserInfo",
  }
);

const StudentDetailsScehma = new mongoose.Schema(
  {
    sname: String,
    roll: String,
    dob: String,
    year: String,
    branch: String,
    mnum: String,
  },
  {
    collection: "StuInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);
mongoose.model("StuInfo", StudentDetailsScehma);
