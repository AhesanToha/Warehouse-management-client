import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./InventoryDetail.css";

const InventoryDetail = () => {
  const { detailId } = useParams();
  const [inventory, setInventory] = useState({});
  const { name, _id, price, img, quantity, supplierName, description } =
    inventory;

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${detailId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  const handleQuantity = () => {
    if (quantity >= 1) {
      const remaining = parseFloat(quantity) - 1;
      const newInventory = {
        name,
        _id,
        price,
        img,
        quantity: remaining,
        supplierName,
        description,
      };
      fetch(`http://localhost:5000/inventory/${detailId}`, {
        method: "PUT",
        body: JSON.stringify(newInventory),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Successfully Delivered");
        });
      setInventory(newInventory);
    } else {
      toast.warn("Already out of stock");
    }
  };

  return (
    <div className="container detail-container">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="detail-info">
        <h3>Name: {name}</h3>
        <h5>ID: {_id}</h5>
        <h5>
          Price: $
          <strong style={{ color: "rgb(66, 206, 244)" }}> {price}</strong>
        </h5>
        <h5>Quantity: {quantity}</h5>
        <h5>Supplier: {supplierName}</h5>
        <p>Description: {description}</p>
        <button onClick={handleQuantity}>Delivered</button>
      </div>
    </div>
  );
};

export default InventoryDetail;
