import React from "react";

function ProductCard({ product }) {
  return (
    <div style={cardStyles}>
      <img
        src={product.image}
        alt={product.title}
        style={imageStyles}
      />
      <h2 style={titleStyles}>
        {product.title.length > 20 ? product.title.substring(0,20)+'..' : product.title}
        </h2>
      <p><u>Sign In</u> or Create an account to see pricing</p>
    </div>
  );
}

const cardStyles = {
  borderRadius: "8px",
  padding: "10px",
  backgroundColor: "#fff",
  textAlign: "center",
  height: "350px"
};

const imageStyles = {
  width: "100%",
  height: "250px",
  objectFit: "contain",
  marginBottom: "10px",
};

const titleStyles = {
  fontSize: "16px",
  color: "#333",
  marginBottom: "10px",
};

export default ProductCard;
