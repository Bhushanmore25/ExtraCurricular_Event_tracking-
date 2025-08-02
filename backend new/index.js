import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();
const app = express();



// CORS options
const corsOptions = {
    origin: 'http://localhost:5173', // Your frontend's URL
    credentials: true, // Allow credentials (cookies)
  };
  
  
  
  // Connection
  mongoose.connect(process.env.MONGODB_URI, { dbName: "extracurricular_event_tracking", useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log("Connected Successfully to MongoDB"); })
  .catch((err) => { console.log(err); 
  });

  // Middlewares
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors(corsOptions));


// models/Event.js
//EventSchema
import { Schema, model } from 'mongoose';

const eventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  prize: { type: String, required: true },
  skills: { type: String, required: true },
  benefits: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type:  String, required: true },
  swags: { type:  String, required: true },
  refreshment: { type:  String, required: true },
  contact: { type:  String, required: true },
  sponsors: { type:  String, required: true },
  organizerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});
const Event = model('Event', eventSchema);
const RegisterEventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    skills: {
        type: [String], required: true
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    experienceGained: {
        type: String,
        required: true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    }
});

const RegisterEvent = mongoose.model('RegisterEvent', RegisterEventSchema);


//User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'organizer', 'admin'], default: 'student' },
});
const User= mongoose.model('User', userSchema);
  
// Authentication Middlewares
const authMiddleware = (req, res, next) => {
    const token = req.cookies.token || req.header("Authorization").replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded);  // Check if token is decoded correctly
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
};


const adminMiddleware = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Access denied" });
    }
    next();
};


//post api
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    // In your login and signup routes
const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
res.cookie('token', token, {
    domain: 'localhost',
    path: '/user',           // Ensure the cookie is available for all paths
    // httpOnly: true,
    secure: false,       // For development, can be false since you might not be using HTTPS
    maxAge: 24 * 60 * 60 * 1000,
  });
  

    res.status(200).json({ message: "Login successful", user: { id: user._id, username: user.username, email: user.email, role: user.role } });
});
app.post("/organizerlogin", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    // In your login and signup routes
const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
res.cookie('token', token, {
    domain: 'localhost',
    path: '/organizer',           // Ensure the cookie is available for all paths
    // httpOnly: true,
    secure: false,       // For development, can be false since you might not be using HTTPS
    maxAge: 24 * 60 * 60 * 1000,
  });
  

    res.status(200).json({ message: "Login successful", user: { id: user._id, username: user.username, email: user.email, role: user.role } });
});

app.post("/signup", async (req, res) => {
    const { name, email, password, role } = req.body;
    console.log(req.body);
    

    let user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({
        name,
        email,
        password: hashedPassword,
        role:role||"student"
    });

    // In your login and signup routes
const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
res.cookie('token', token, {
    domain: 'localhost',
    path: '/',           // Ensure the cookie is available for all paths
    // httpOnly: true,
    secure: false,       // For development, can be false since you might not be using HTTPS
    maxAge: 24 * 60 * 60 * 1000,
  });
  

    res.status(201).json({ message: "User registered successfully", user: { id: user._id, username: user.username, email: user.email, role: user.role } });
});
app.post("/organizersignup", async (req, res) => {
    const { name, email, password, role } = req.body;
    console.log(req.body);
    

    let user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({
        name,
        email,
        password: hashedPassword,
        role:role||"organizer"
    });

    // In your login and signup routes
const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
res.cookie('token', token, {
    domain: 'localhost',
    path: '/',           // Ensure the cookie is available for all paths
    // httpOnly: true,
    secure: false,       // For development, can be false since you might not be using HTTPS
    maxAge: 24 * 60 * 60 * 1000,
  });
  

    res.status(201).json({ message: "User registered successfully", user: { id: user._id, username: user.username, email: user.email, role: user.role } });
});

app.post("/registerevent", authMiddleware, async (req, res) => {
    const { eventName, description, location, skills, status, date, experienceGained } = req.body;
    
    if (!req.user || !req.user._id) {
        return res.status(400).json({ message: "Invalid user information" });
    }

    const registerEvent = await RegisterEvent.create({
        eventName,
        description,
        location,
        skills,
        status,
        date,
        experienceGained,
        studentId: req.user._id,  // Ensure req.user._id exists
    });

    res.status(201).json(registerEvent);
});


app.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
});


app.post("/createevent", authMiddleware, async (req, res) => {
    const { title, description, location, prize, skills, benefits, date, time, swags, refreshment, contact, sponsors } = req.body;
    const event = await Event.create({
        title,
        description,
        location,
        prize,
        skills,
        benefits,
        date,
        time,
        swags,
        refreshment,
        contact,
        sponsors,
        organizerId: req.user._id
    });
    res.status(201).json(event);
    res.json(event);
});

app.get("/events/:id", authMiddleware, async (req, res) => {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
});

app.put("/events/:id", authMiddleware, async (req, res) => {
    const { title, description, location, prize, skills, benefits, date, time, swags, refreshment, contact, sponsors } = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, { title, description, location, prize, skills, benefits, date, time, swags, refreshment, contact, sponsors }, { new: true });
    if (!updatedEvent) return res.status(404).json({ message: "Event not found" });
    res.json(updatedEvent);
});

app.delete("/events/:id", authMiddleware, adminMiddleware, async (req, res) => {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) return res.status(404).json({ message: "Event not found" });
    res.json(deletedEvent);
});



//get apis
app.get("/",(req,res)=>{
    res.send("Hello World!");
})
app.get("/events", authMiddleware, async (req, res) => {
    const events = await Event.find({ organizerId: req.user._id });
    res.json(events);
});
app.get("/allevents", authMiddleware, async (req, res) => {
    const events = await Event.find({});
    res.json(events);
});

app.get("/registered-events", authMiddleware, async (req, res) => {
    const events = await RegisterEvent.find({ studentId: req.user._id });
    if (!events) return res.status(404).json({ message: "No registered events found" });
    res.json(events);
});

app.get("/user", authMiddleware, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password'); // Exclude the password
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
});
app.get("/organizer", authMiddleware, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password'); // Exclude the password
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");

});