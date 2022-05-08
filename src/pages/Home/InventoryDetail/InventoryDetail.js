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
    const url = `https://manage4578.herokuapp.com/inventory/${detailId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  const handleQuantity = () => {
    if (quantity >= 1) {
      const remaining = parseFloat(quantity) - 1;
      const newInventory = {
        name,
        price,
        img,
        quantity: remaining,
        supplierName,
        description,
      };
      setInventory(newInventory);

      fetch(`https://manage4578.herokuapp.com/inventory/${detailId}`, {
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
    } else {
      toast.warn("Already out of stock");
    }
  };

  const handleRestock = (e) => {
    e.preventDefault();
    const restockUpdate = e.target.quantityField.value;
    if (restockUpdate < 1) {
      alert("Please add at least 1 item");
      return;
    }
    const updatedQuantity =
      parseFloat(restockUpdate) + parseFloat(inventory.quantity);
    const newInventory = {
      img,
      name,
      price,
      quantity: updatedQuantity,
      description,
      supplierName,
    };
    setInventory(newInventory);
    fetch(`https://manage4578.herokuapp.com/inventory/${detailId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newInventory),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
        toast("Stock added successfully");
      });
  };

  return (
    <>
      <div className="container detail-container">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="detail-info">
          <h3 className="text-3xl font-semibold mb-2">Name: {name}</h3>
          <h5>ID: {detailId}</h5>
          <h5 className="text-xl ">
            Price: $
            <strong style={{ color: "rgb(66, 206, 244)" }}> {price}</strong>
          </h5>
          <h5 className="text-xl  mb-2">
            Quantity: <strong>{quantity}</strong>
          </h5>
          <h5 className="text-md mb-2">
            Supplier: <strong>{supplierName}</strong>
          </h5>
          <p>Description: {description}</p>
          <button onClick={handleQuantity}>Delivered</button>
        </div>
      </div>
      <div className="container restock-container pb-3">
        <h2>Restock Item</h2>
        <form onSubmit={handleRestock}>
          <input
            placeholder="Add"
            className="restock-quantity text-black"
            type="number"
            name="quantityField"
            required
          />
          <input className="restock-button" type="submit" value="Restock" />
        </form>
      </div>
    </>
  );
};

export default InventoryDetail;
