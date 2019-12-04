const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
// Connection URL
const url = "mongodb://localhost:27017";
// Database Name
const dbName = "intro";
// Create a new MongoClient
const client = new MongoClient(url);
// Use connect method to connect to the Server
async function initDb() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const userCollection = db.collection("users");
  // list all items
  const cursor = userCollection.find();
  const users = await cursor.toArray();
  // list one item
  const user = await userCollection.findOne({ firstName: "Manuel" });
  // console.log(users);
  console.log(user);
  client.close();
}
initDb();
