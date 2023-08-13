import React, { useEffect, useState } from "react";
import { createItem, updateItem } from "../Services/InventoryService";
import { useNavigate } from "react-router-dom";

 const CreateItem = () => {
  const navigator = useNavigate();

  const [formData, setFormData] = useState({
    id: Number,
    name: String,
    price: Number,
    quantity: Number,
  });

  const onFormChange = (event: any) => {
    const { id, value } = event.target;
    const newFormData = { ...formData, [id]: value };
    console.log(newFormData);
    setFormData(newFormData);
  };

  const uploadData = (e: any) => {
    e.preventDefault();
    let item = {
      name: formData.name,
      price: formData.price,
      quantity: formData.quantity,
    };
    console.log("employee => " + JSON.stringify(item));

    createItem(item)
        .then((res) => {
          res.status === 200 ? navigator("/") : navigator("additem");
        })
        .catch((e) => {
          console.log(e);
        });
  };

  return (
    <div className="content">
        <button
            type="submit"
            className="btn btn-cancel"
            onClick={() => {
                navigator("/");
            }}
        >
            Cancel
        </button>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Item Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={onFormChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            onChange={onFormChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            onChange={onFormChange}
          />
        </div>
        <button type="submit" className="btn btn-submit" onClick={uploadData}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateItem;
