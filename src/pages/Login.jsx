import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Login = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Login attempt:", formData);
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  const handleSignUp = () => {
    console.log("Sign up clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-light text-gray-600 tracking-widest">
            LOGIN
          </h1>
        </div>

        <div className="space-y-6">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="E-mail"
              className="w-full px-4 py-4 bg-white border-2 font-sans border-gray-200 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#e97625] transition-colors"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full px-4 py-4 bg-white border-2 font-sans border-gray-200 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#e97625] transition-colors"
            />
          </div>

          <div className="text-left">
            <button
              onClick={handleForgotPassword}
              className="text-gray-400 text-sm hover:text-gray-600 transition-colors underline"
            >
              Forgot your password?
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-[#e97625] text-white cursor-pointer font-semibold tracking-wide hover:bg-orange-600 focus:outline-none transition-colors"
          >
            LOGIN
          </button>

          <div className="text-center pt-4">
            <button
              onClick={handleSignUp}
              className="text-gray-400 text-sm hover:text-gray-600 transition-colors underline"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
