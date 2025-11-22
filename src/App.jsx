import { useState } from "react";
import Header from "./components/Header.jsx";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  


  return (
    <>
      <Header
        name={"Noilee Ann"}
        course={"BACHELOR OF SCIENCE INFORMATION TECHNOLOGY"}
      />

      <div className="flex flex-col justify-center ">

        {/* Name */}
        <label className="mb-1 font-semibold">Name</label>
        <input
          placeholder="Enter your Name"
          className="border-2 bg-pink-200 p-2 mb-4 w-64"
          onChange={(e) => setName(e.target.value)}
        />
        <h3>{name}</h3>

        {/* Email */}
        <label className="mb-1 font-semibold">Email</label>
        <input
          placeholder="Enter your Email"
          className="border-2 bg-pink-200 p-2 mb-4 w-64"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3>{email}</h3>

        {/* Password */}
        <label className="mb-1 font-semibold">Password</label>
        <input
          placeholder="Enter your Password"
          type="password"
          className="border-2 bg-pink-200 p-2 mb-4 w-64"
          onChange={(e) => setPassword(e.target.value)}
        />
        <h3>{password}</h3>

        

      </div>
    </>
  );
}

export default App;