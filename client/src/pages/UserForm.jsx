import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [username, setName] = useState("");
  const [useraddress, setAddress] = useState("");
  const [userData, setUserData] = useState([]);

  const handleUserData = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:3002/api/user/register",
      {
        name: username,
        address: useraddress,
      }
    );

    console.log(response.data);

    setUserData([
      ...userData,
      {
        name: response.data.User.name,
        address: response.data.address.address,
      },
    ]);
    setName("");
    setAddress("");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-hero-bg bg-cover bg-center">
      <form
        onSubmit={handleUserData}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80 transition-transform transform hover:scale-105"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          User Registration
        </h2>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          User Name:
        </label>
        <input
          type="text"
          name="username"
          placeholder="For e.g Kush Painuly"
          id="username"
          value={username}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 focus:outline-none focus:shadow-outline transition duration-300"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          User Address:
        </label>
        <input
          type="text"
          name="useraddress"
          placeholder="For e.g Muni-Ki-Reti,Rishikesh"
          id="useraddress"
          value={useraddress}
          onChange={(e) => setAddress(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 focus:outline-none focus:shadow-outline transition duration-300"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="w-80">
        {userData.map((user, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded mb-2 shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <p className="text-lg font-semibold">Username: {user.name}</p>
            <p className="text-gray-600">User Address: {user.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserForm;
