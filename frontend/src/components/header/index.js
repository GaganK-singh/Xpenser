import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">Xpenser. ltd</div>
      <div className="header-photo">
        <span className="material-symbols-outlined" id="header-photo">wallet</span>
      </div>
    </div>
  );
}

