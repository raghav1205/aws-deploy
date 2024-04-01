const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

// app.get('/', (req, res) => {
//     res.send('Hello World');
//     });

app.get('/', (req, res) => {
    res.send(
        `<h1>Welcome to the Courses API</h1>
        <h2>Routes</h2>
        <ul>
            <li>/admin</li>
            <li>/user</li>
        </ul>`
    )
    });
// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
// mongoose.connect('mongodb://localhost:27017/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(3000, () => console.log('Server running on port 3000 '));
