import React from "react";

const Inventory = ({ inventory }) => {
  const { name, img, supplierName, price, quantity } = inventory;
  return (
    <div>
      <img className="w-100" src={img} alt="" />
      <p>{name}</p>
      <p>{supplierName}</p>
      <p>{price}</p>
      <p>{quantity}</p>
    </div>
  );
};

export default Inventory;
