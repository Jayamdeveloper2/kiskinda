import React from 'react';

const whatsappStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 9999,
  borderRadius: '50%',
  backgroundColor: 'transparent',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.2s',
};

const imgStyle = {
  width: '55px',
  height: '55px',
};

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919443949773"
      style={whatsappStyle}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="Chat on WhatsApp"
        style={imgStyle}
      />
    </a>
  );
};

export default WhatsAppButton;
