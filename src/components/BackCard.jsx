import React from "react";
import * as QRCodeLib from "qrcode.react";
const QRCode = QRCodeLib.QRCodeCanvas;

const BackCard = ({ onClick }) => {
  return (
    <div
    className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center rotate-y-180"
    onClick={onClick}
  >
    <h2 className="text-xl font-semibold mb-2">Let’s Connect</h2>
    <p className="text-sm text-blue-100 text-center mb-4">
      Scan the QR code to view my LinkedIn profile, portfolio, or download my vCard.  
      Building professional connections is just one scan away.
    </p>

    <QRCode
      value="https://linkedin.com/in/your-link"
      size={150}
      bgColor="transparent"
      fgColor="#ffffff"
      className="shadow-md rounded"
    />

    <p className="mt-4 text-blue-100 text-xs">Tap the card to flip back</p>
  </div>
  );
};

export default BackCard;
