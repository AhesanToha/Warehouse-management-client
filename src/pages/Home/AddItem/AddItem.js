import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import "./AddItem.css";

const AddItem = () => {
  const [user] = useAuthState(auth);

  const addItem = (e) => {
    e.preventDefault();
    const newItem = {
      email: user?.email,
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
      quantity: e.target.quantity.value,
      supplierName: e.target.suppliername.value,
      img: e.target.img.value,
    };

    fetch(`https://manage4578.herokuapp.com/addItem`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Item Added Successfully");
      });
  };
  return (
    <div>
      <h2 className="text-xl md:text-3xl my-5 font-bold text-slate-300 text-center">
        ADD ITEM <small className="text-sm">by giving info bellow</small>
      </h2>

      <form onSubmit={addItem} className="md:w-2/4 mx-auto p-2 mb-10 ">
        <div className="form-group mb-6">
          <input
            type="text"
            name="name"
            className="form-control block 
           
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-gray-800  bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-300 focus:bg-gray-800  focus:border-blue-600 focus:outline-none"
            id="exampleInput125"
            placeholder="Item Name"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group mb-6">
            <input
              type="text"
              name="price"
              className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-gray-800  bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-300 focus:bg-gray-800  focus:border-blue-600 focus:outline-none"
              id="exampleInput123"
              aria-describedby="emailHelp123"
              placeholder="Price"
              required
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              name="quantity"
              className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-gray-800  bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-300 focus:bg-gray-800  focus:border-blue-600 focus:outline-none"
              id="exampleInput124"
              aria-describedby="emailHelp124"
              placeholder="Quantity"
              required
            />
          </div>
        </div>

        <div className="form-group mb-6">
          <input
            type="text"
            name="suppliername"
            className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-gray-800  bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-300 focus:bg-gray-800  focus:border-blue-600 focus:outline-none"
            id="exampleInput123"
            aria-describedby="emailHelp123"
            placeholder="Supplier Name"
            required
          />
        </div>

        <div className="form-group mb-6">
          <input
            type="email"
            name="email"
            className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-500
          bg-gray-800  bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-300 focus:bg-gray-800  focus:border-blue-600 focus:outline-none"
            id="exampleInput125"
            value={user?.email}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="text"
            name="img"
            className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-gray-800  bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-300 focus:bg-gray-800  focus:border-blue-600 focus:outline-none"
            id="exampleInput126"
            placeholder="Image Url"
            required
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            name="description"
            className="w-full h-24 bg-gray-800"
            placeholder="Description"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="
        w-full
        px-6
        py-2.5
        bg-gray-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-gray-500 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"
        >
          Add Now
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddItem;
