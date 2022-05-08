import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Inventory from "../Inventory/Inventory";
import "./Inventories.css";

const Inventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("https://manage4578.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return (
    <div className="inventories container mb-10">
      <h1 className="text-4xl font-bold my-4">
        INVENTORIES : {inventories.length}
      </h1>
      <div className="inventory-product">
        {inventories.slice(0, 6).map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
      <Link to="/manage">
        <button className="manage-button">MANAGE INVENTORY</button>
      </Link>
    </div>
  );
};

export default Inventories;
