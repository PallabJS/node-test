// Import the necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Create an instance of the Express application
const app = express();

// Set the port number
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

// Define a simple route for the root URL
app.get("/", (req, res) => {
  res.send("exp://u.expo.dev/7e3ce535-1195-47b2-a79b-221a988cb3bd");
});

// Define another route for a sample API endpoint
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
