const express = require("express"); //we have created instance of express
const router = express.Router();

let studentList = [
  {
    id: 1,
    name: "Aman",
  },
  {
    id: 2,
    name: "Riya",
  },
];

router.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

function CustomMiddlewareforLogging(req, res, next) {
  console.log("I am Logging in the user");
  next();
}

function CustomMiddlewareforAuth(req, res, next) {
  let data = req.body;

  if (data.UserLogged) {
    console.log("User Authorised");
    next();
  } else {
    res.send("Please log in first");
  }
}

function CustomMiddlewareforVali(req, res, next) {
  console.log("I have valildated the request");
  next();
}

router.use(CustomMiddlewareforLogging);
router.use(CustomMiddlewareforAuth);
router.use(CustomMiddlewareforVali);

router.post("/signup", (req, res) => {
  const newStudent = req.body; //frontend
  console.log(newStudent);
  let UserName = newStudent.name;

  if (newStudent) {
    if (UserName.length > 4) {
      studentList.push(newStudent);
      res.json({
        message: "Student Added",
        studentList,
      });
    } else {
      res.send("Please add a valid name");
    }
  } else {
    res.send("Please add a student");
  }
});

router.get("/user", (req, res) => {
  res.json(studentList);
});

router.put("/user/:id", (req, res) => {
  const userId = req.params.id;

  const UpdatedData = req.body;

  studentList = studentList.map((student) =>
    student.id == userId ? { ...student, UpdatedData } : student,
  );

  res.json({
    message: "Student Updated",
    studentList,
  });
});

router.delete("/user/:id", (req, res) => {
  const userId = req.params.id;
  console.log(userId);

  studentList = studentList.filter((student) => student.id != userId);

  res.json({
    message: "Student Deleted",
    studentList,
  });
});

router.get("/", (req, res) => {
  res.json([
    { id: 1, role: "Developer" },
    { id: 2, role: "Tester" },
  ]);
});

module.exports = router;
