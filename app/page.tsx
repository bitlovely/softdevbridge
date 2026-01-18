"use client";

import React from 'react';
import Navbar from "./components/Navbar";

// ---------------- HERO / HOME PAGE ----------------
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <Navbar />

      <header className="text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">We Build Secure & Modern Software Solutions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          SoftDevBridge specializes in high-performance backend systems, secure cloud platforms, distributed services,
          and modern software solutions for businesses. We focus on reliability, security, and senior-developer craftsmanship.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a href="#projects" className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">View Projects</a>
          <a href="#contact" className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100">Contact Us</a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Project Overview */}
        <section id="projects" className="bg-white rounded-xl p-8 shadow mb-10">
          <h2 className="text-2xl font-semibold mb-4">TrueProduct — Product Authentication Platform</h2>
          <p className="mb-4 text-gray-700">
            TrueProduct uses cryptographically signed QR codes to help companies stop product counterfeiting and allow
            customers to instantly verify authenticity via mobile or web. It’s built as a modular, production-ready service
            with a focus on performance and security.
          </p>
        </section>

        {/* Features */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What We Build</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">Custom Web Applications</h4>
              <p className="text-sm text-gray-600">Responsive, performant, and maintainable web platforms tailored to your business.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">Automation & Backend Systems</h4>
              <p className="text-sm text-gray-600">Reliable microservices, job queues, and integrations to automate business ops.</p>
            </div>
          </div>
        </section>

        {/* Callout */}
        <section className="bg-blue-50 p-6 rounded-xl mb-10">
          <h3 className="text-xl font-semibold mb-2">Ready to protect your brand?</h3>
          <p className="text-gray-700 mb-4">Contact SoftDevBridge to learn how TrueProduct can secure your products from counterfeiters.</p>
          <div>
            <a href="#contact" className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Get in Touch</a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white p-8 rounded-xl shadow mb-20">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 mb-4">Email: hello@softdevbridge.example</p>
          <p className="text-gray-700">Location: Bethesda, MD</p>
        </section>
      </main>

      <footer className="text-center text-gray-600 py-10 border-t mt-10">
        © 2025 SoftDevBridge — All Rights Reserved
      </footer>
    </div>
  );
}
