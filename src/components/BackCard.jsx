import React from "react";
import * as QRCodeLib from "qrcode.react";
const QRCode = QRCodeLib.QRCodeCanvas;

const BackCard = ({ onClick }) => {
  return (
    <div
      className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center rotate-y-180"
      onClick={onClick}
    >
      <h2 className="text-lg font-semibold mb-4">Scan my QR Code</h2>
      <QRCode
        value="https://linkedin.com/in/your-link"
        size={150}
        className="shadow-md rounded"
      />
      <p className="mt-4 text-gray-500 text-sm">Tap to flip back</p>
    </div>
  );
};

export default BackCard;
