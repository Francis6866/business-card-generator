import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const BusinessCard1 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center">
        {/* Profile Image */}
        <img 
          src="https://via.placeholder.com/120" 
          alt="Profile" 
          className="w-28 h-28 mx-auto rounded-full shadow-md mb-4"
        />

        {/* Name and Title */}
        <h1 className="text-2xl font-bold text-gray-800">Francis Iboloke</h1>
        <p className="text-gray-500 mb-4">Pharmaceutical Sales Representative</p>

        {/* Bio */}
        <p className="text-gray-600 text-sm mb-6">
          Persuasive and results-driven medical sales professional with a passion 
          for building strong client relationships and promoting innovative products.
        </p>

        {/* Contact Icons */}
        <div className="flex justify-center gap-6">
          <a href="mailto:ibolokefrancisjames@gmail.com" className="text-gray-600 hover:text-blue-600">
            <Mail size={20} />
          </a>
          <a href="tel:+2349138929545" className="text-gray-600 hover:text-green-600">
            <Phone size={20} />
          </a>
          <a href="https://linkedin.com/in/your-link" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-700">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black">
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard1;
