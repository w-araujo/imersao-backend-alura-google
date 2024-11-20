import { MongoClient } from "mongodb";

export default async function mongoDBConnect(connectString) {
  let mongoCLient;

  try {
    mongoCLient = new MongoClient(connectString);
    console.log("Connecting to the cluster...");
    await mongoCLient.connect();
    console.log("Successfully connected!");

    return mongoCLient;
  } catch (error) {
    console.error("connection failure!", error);
    process.exit();
  }
}
