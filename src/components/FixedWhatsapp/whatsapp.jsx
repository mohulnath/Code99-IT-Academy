import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import './whatsapp.css';

export default function WhatsAppButton() {
  return (
    <div className="whatsapp">
      <a
        data-social="Whatsapp"
        style={{ accentColor: "black" }}
        href="https://wa.me/+916374510754"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsWhatsapp />
      </a>
    </div>
  );
}
