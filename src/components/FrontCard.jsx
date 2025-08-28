import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import imgSrc from "../images/image-mi.jpeg"

const FrontCard = ({ onClick }) => {
  return (
    <div
        className="absolute w-full h-full backface-hidden bg-gradient-to-br from-indigo-100 via-indigo-200 to-white rounded-2xl shadow-xl p-8 text-center flex flex-col justify-center"
        onClick={onClick}
    >
      <img
        src={imgSrc}
        alt="Profile"
        className="w-28 h-28 mx-auto rounded-full shadow-md mb-4"
      />
      <h1 className="text-2xl font-bold text-gray-800">Francis Iboloke</h1>
      <p className="text-gray-500 mb-4">Pharmaceutical Sales Representative</p>
      <p className="text-gray-600 text-sm mb-6">
        Persuasive medical sales professional skilled in product promotion
        and client relationship building.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="mailto:ibolokefrancisjames@gmail.com"
          className="text-gray-600 hover:text-blue-600 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <Mail size={20} />
        </a>
        <a
          href="tel:+2349138929545"
          className="text-gray-600 hover:text-green-600 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <Phone size={20} />
        </a>
        <a
          href="https://linkedin.com/in/your-link"
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-blue-700 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-black transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <Github size={20} />
        </a>
      </div>
    </div>
  );
};

export default FrontCard;
