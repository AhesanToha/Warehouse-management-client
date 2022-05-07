import React from "react";
import { useNavigate } from "react-router-dom";
import "./Inventory.css";

const Inventory = ({ inventory }) => {
  const navigate = useNavigate();
  const { _id, description, name, img, supplierName, price, quantity } =
    inventory;

  const handleNavigate = (id) => {
    navigate(`/inventoryDetail/${id}`);
  };
  return (
    <div className="inventory">
      <img className="w-100" src={img} alt="" />
      <h5>{name}</h5>
      <h6>
        Price: $ <strong>{price}</strong>
      </h6>
      <p>
        supplier: <strong>{supplierName}</strong>
      </p>
      <p>
        Quantity: <strong>{quantity}</strong>
      </p>
      <h6>
        <small>{description}</small>
      </h6>
      <button onClick={() => handleNavigate(_id)}>Update</button>
    </div>
  );
};

export default Inventory;
