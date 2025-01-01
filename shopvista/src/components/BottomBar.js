import React from "react";
import "./BottomBar.css";

function BottomBar() {
  return (
    <div className="bottom-bar">
      <a href="#home">🏠 Home</a>
      <a href="#search">🔍 Search</a>
      <a href="#cart">🛒 Cart</a>
      <a href="#profile">👤 Profile</a>
    </div>
  );
}

export default BottomBar;
