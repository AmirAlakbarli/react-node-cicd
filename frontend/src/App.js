import { React, useState, useEffect } from "react";
import axios from "axios";

const baseURL = "http://localhost:5000/api";
const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

function App() {
  const [name, setName] = useState("");

  const getNames = async () => {
    const response = await instance.get("/names");
    setName(response.data);
  };

  useEffect(() => {
    getNames();
  }, []);

  return (
    <>
      <h1>My frontend</h1>
      <h3>This project is {name}</h3>
    </>
  );
}

export default App;
