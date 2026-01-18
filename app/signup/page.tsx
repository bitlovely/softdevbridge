"use client";

import React from "react";
import Navbar from "../components/Navbar";
// ---------------- SIGN UP PAGE ----------------
export function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300" />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300" />
            <input type="password" placeholder="Password" className="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300" />
            <button className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;