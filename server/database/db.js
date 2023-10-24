import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@chatapp.sysuaeg.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose
      .connect(URL, { useUnifiedTopology: true })
      .then(console.log("DB Connected"));
  } catch (error) {
    console.log("Error while connecting with DB", error.message);
  }
};

export default Connection;
