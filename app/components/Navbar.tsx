"use client";

import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold">SoftDevBridge</h1>
        <span className="text-sm text-gray-500">Bridging vision and world-class software</span>
      </div>

      <div className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
        <Link href="/" className="text-gray-700 hover:text-gray-900">Services</Link>
        <Link href="/" className="text-gray-700 hover:text-gray-900">Projects</Link>
        <Link href="/" className="text-gray-700 hover:text-gray-900">Contact</Link>
        <Link href="/login" className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">Login</Link>
        <Link href="/signup" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;