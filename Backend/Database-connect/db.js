const mongoose = require("mongoose");
const dotenv = require("dotenv");

//load evn configration
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {});
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(
//       `mongodb+srv://oberoipankaj449_db_user:BVHSChySq9207Mo8@cluster0.yoawum1.mongodb.net/?appName=Cluster0`,
//       {},
//     );
//     console.log(`MongoDB Connected`);
//   } catch (error) {
//     console.error(error.message);
//     process.exit(1);
//   }
// };

module.exports = connectDB;
