import React, { useEffect, useState } from "react";
import { useLoginMutation } from "../../store/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AdminLogin = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [login, { data, error, isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) toast.error(error?.data?.message || "Somethings went wrong...");
    if (data) {
      localStorage.setItem("token", data.token);
      navigate("/main");
    }
  }, [error, data]);

  const handleLogin = () => {
    login({ email: username, password });
  };

  return (
    <div className="max-w-sm mx-auto border border-black py-3 px-4 mt-30 rounded-sm">
      <h1 className="text-2xl font-semibold">Login</h1>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <button
        onClick={handleLogin}
        className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isLoading ? "Loading..." : "Submit"}
      </button>
    </div>
  );
};

export default AdminLogin;
