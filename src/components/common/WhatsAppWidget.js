import React from 'react';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
  const whatsappNumber = '254723156066';
  const message = encodeURIComponent('Hello! I need assistance with your services. Can you help me?');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-widget"
    >
      <span className="whatsapp-icon">💬</span>
      <span>Chat with us</span>
    </a>
  );
};

export default WhatsAppWidget;