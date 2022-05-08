import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SpinnerInfinity } from "spinners-react";
import "./Manage.css";

const Manage = () => {
  const [inventory, setInventory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  const updatetock = (id) => {
    navigate(`/inventoryDetail/${id}`);
  };

  const deletitem = (id) => {
    const proceed = window.confirm("Are You Sure");
    if (proceed) {
      fetch(`http://localhost:5000/inventory/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json(id))
        .then((json) => {
          if (json.acknowledged) {
            toast("Delete Successful!");
            const remaining = inventory.filter((item) => item._id !== id);
            setInventory(remaining);
          }
        });
    }
  };

  const additem = () => {
    navigate("/additem");
  };
  console.log(inventory);

  return (
    <div className=" mb-20">
      <div className="h-[30vh] flex flex-col items-center justify-center stockheader mb-3">
        <h2 className="text-xl md:text-2xl my-5 font-bold text-indigo-400">
          Manage Inventory : {inventory?.length}
        </h2>
        <button
          onClick={additem}
          className="border border-blue-600 my-2 mb-4 font-bold px-3 py-2 rounded-full"
        >
          Add New Item
        </button>
      </div>

      {inventory ? (
        <>
          <div className=" hidden md:block md:flex flex-col md:w-3/4 mx-auto border text-left">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full bg-slate-600">
                    <thead className="bg-slate-700 border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-slate-200 px-6 py-4 text-left"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-slate-200 px-6 py-4 text-left"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-slate-200 px-6 py-4 text-left"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-slate-200 px-6 py-4 text-center"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {inventory?.map((item) => (
                        <tr key={item?._id} className="bg-slate-600 border-b">
                          <td className="text-sm text-slate-200 font-light px-6 py-4 whitespace-nowrap">
                            {item?.name}
                          </td>
                          <td className="text-sm text-green-200 font-light px-6 py-4 whitespace-nowrap">
                            {item?.email}
                          </td>
                          <td className="text-sm text-slate-200 font-light px-6 py-4 whitespace-nowrap">
                            {item?.quantity >= 1 ? (
                              item.quantity
                            ) : (
                              <span className="text-red-500">Out Of Stock</span>
                            )}
                          </td>
                          <td className="text-sm text-slate-200 font-light px-6 py-4 whitespace-nowrap">
                            <div className="flex">
                              <button
                                onClick={() => {
                                  updatetock(item?._id);
                                }}
                                className="border border-indigo-600 p-2 mx-2"
                              >
                                Update Stock
                              </button>
                              <button
                                onClick={() => deletitem(item?._id)}
                                className="border border-red-600 p-2"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden ">
            {inventory?.map((item) => (
              <div className="w-full shadow-md p-2 my-2" key={item?._id}>
                <h2 className="font-bold text-xl"> Name : {item?.name}</h2>
                <h2 className="text-blue-500">Email {item?.email}</h2>
                <h2>Quantity {item?.quantity}</h2>
                <div className="flex py-2 justify-center">
                  <button
                    onClick={() => {
                      updatetock(item?._id);
                    }}
                    className="border border-indigo-600 p-1 mx-2"
                  >
                    Update Stock
                  </button>
                  <button
                    onClick={() => deletitem(item?._id)}
                    className="border border-red-600 p-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <SpinnerInfinity
          className="mx-auto"
          size={57}
          thickness={180}
          speed={100}
          color="#1A56DB"
          secondaryColor="rgba(73, 57, 172, 0.44)"
        />
      )}
    </div>
  );
};

export default Manage;
