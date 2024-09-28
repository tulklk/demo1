import React from "react";


function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }} className="menuItem-image"></div>
      <h3>{name}</h3>
      <p>{price}đ</p>
      <div className="menuItem-rating">
        <span>★★★★★</span> {/* Placeholder for rating stars */}
      </div>
    </div>
  );
}

export default MenuItem;
