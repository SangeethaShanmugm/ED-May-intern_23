const express = require("express"); //third party package
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const app = express();
const PORT = 5000;
const MONGO_URL = "mongodb://127.0.0.1:27017";
//"mongodb://localhost:27017"
let db;
//Array of objects
const users = [
  {
    name: "John",
    age: 20,
  },
  {
    name: "Jack",
    age: 22,
  },
  {
    name: "Peter",
    age: 30,
  },
];

// const locations = [
//   {
//     location_id: 1,
//     location_name: "Ashok Vihar Phase 3, New Delhi",
//     state_id: 1,
//     state: "Delhi",
//     country_name: "India",
//   },
//   {
//     location_id: 2,
//     location_name: "Ashok Vihar Phase 2,Chincholi, Delhi-110006, Delhi",
//     state_id: 1,
//     state: "Delhi",
//     country_name: "India",
//   },
//   {
//     location_id: 3,
//     location_name: "Tagore Garden, New Delhi",
//     state_id: 1,
//     state: "Delhi",
//     country_name: "India",
//   },
//   {
//     location_id: 4,
//     location_name: "Bibvewadi, Pune",
//     state_id: 2,
//     state: "Maharashtra",
//     country_name: "India",
//   },
//   {
//     location_id: 5,
//     location_name: "Hadapsar, Pune",
//     state_id: 2,
//     state: "Maharashtra",
//     country_name: "India",
//   },
//   {
//     location_id: 6,
//     location_name: "Kothrud, Pune",
//     state_id: 2,
//     state: "Maharashtra",
//     country_name: "India",
//   },
//   {
//     location_id: 7,
//     location_name: "Anand Vihar",
//     state_id: 1,
//     state: "Delhi",
//     country_name: "India",
//   },
//   {
//     location_id: 8,
//     location_name: "Jeevan Bhima Nagar, Bangalore",
//     state_id: 3,
//     state: "Karnataka",
//     country_name: "India",
//   },
//   {
//     location_id: 9,
//     location_name: "Rajajinagar, Bangalore-430006, Bangalore",
//     state_id: 3,
//     state: "Karnataka",
//     country_name: "India",
//   },
//   {
//     location_id: 10,
//     location_name: "HSR, Bangalore",
//     state_id: 3,
//     state: "Karnataka",
//     country_name: "India",
//   },
//   {
//     location_id: 11,
//     location_name: "Thane, Mumbai",
//     state_id: 2,
//     state: "Maharashtra",
//     country_name: "India",
//   },
//   {
//     location_id: 12,
//     location_name: "Borivali West, Mumbai",
//     state_id: 2,
//     state: "Maharashtra",
//     country_name: "India",
//   },
//   {
//     location_id: 13,
//     location_name: "Sector 40, Chandigarh",
//     state_id: 4,
//     state: "Punjab",
//     country_name: "India",
//   },
//   {
//     location_id: 14,
//     location_name: "Majnu ka Tila, New Delhi",
//     state_id: 1,
//     state: "Delhi",
//     country_name: "India",
//   },
// ];

//rest api endpoints
// req => request =>  what you send/req to server
//res => what we receive from server
app.get("/", function (req, res) {
  res.send("Hello Everyone🥳");
});

app.get("/userList", function (req, res) {
  res.send(users);
});

//get locations
app.get("/locations", function (req, res) {
  db.collection("locations")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//get mealTypes
app.get("/quickSearch", function (req, res) {
  db.collection("mealTypes")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//get restaurant data
app.get("/restaurants", function (req, res) {
  db.collection("restaurant")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//Mongodb connection

MongoClient.connect(MONGO_URL, (err, client) => {
  console.log("Mongodb is connected");
  if (err) console.log("Error while connecting");
  db = client.db("ed-may-intern");
  app.listen(PORT, () => console.log("Server started on the port", PORT));
});
