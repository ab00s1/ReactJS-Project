import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfpassword] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!gender) {
      document.querySelector(
        "#root > div > div > div > form > p:nth-child(8)"
      ).style.display = "block";
      return;
    }
    if (password !== cnfpassword) {
      document.querySelector(
        "#root > div > div > div > form > p:nth-child(6)"
      ).style.display = "block";
    } else {
      document.querySelector(
        "#root > div > div > div > form > p:nth-child(8)"
      ).style.display = "";
      document.querySelector(
        "#root > div > div > div > form > p:nth-child(6)"
      ).style.display = "";
      localStorage.setItem(
        JSON.stringify({ email }),
        JSON.stringify({ name, email, password, gender })
      );
      // console.log({ name, email, password, cnfpassword });
      handleLoginRedirect();
    }
  };

  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex bg-white shadow-lg w-8/12 rounded-lg overflow-hidden max-w-4xl">
        <div className="hidden md:block w-1/2 bg-contain bg-no-repeat bg-center bg-[url('https://cdn-icons-png.flaticon.com/512/166/166260.png')]"></div>
        <form
          className="bg-white shadow-lg rounded px-8 pt-6 pb-8 w-96"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl mb-4 font-semibold text-gray-700">
            Tuks-Sign Up
          </h2>
          <input
            type="text"
            className="mb-4 p-2 w-full border rounded"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="mb-4 p-2 w-full border rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="mb-4 p-2 w-full border rounded"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            className="mb-4 p-2 w-full border rounded"
            placeholder="Re-enter Password to confirm"
            value={cnfpassword}
            onChange={(e) => setCnfpassword(e.target.value)}
            required
          />
          <p className="text-red-500 text-xs hidden">
            Original Password and Re-enterd password should be same !
          </p>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Gender:
            </label>
            <div className="flex items-center justify-center">
              <label className="mr-4 flex items-center">
                <input
                  type="radio"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Male
              </label>
              <label className="mr-4 flex items-center">
                <input
                  type="radio"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Female
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Other"
                  checked={gender === "Other"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Other
              </label>
            </div>
          </div>
          <p className="text-red-500 text-xs hidden">Select the gender</p>
          <button
            type="submit"
            className="bg-blue-500 text-white w-full p-2 rounded"
          >
            Sign Up
          </button>

          <p className="m-2">Already have an account?</p>
          <button
            type="button"
            onClick={handleLoginRedirect}
            className="bg-gray-400 text-white py-1 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
