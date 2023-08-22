import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItemById, listItems } from "../Services/InventoryService";

const ViewItem = () => {
  const navigator = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState({
    id: -1,
    name: String,
    price: Number,
    quantity: Number,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getItemById(Number(id));
    setItem(data);
  };
  return (
    <div className="content">
      <button
        type="submit"
        className="btn btn-cancel"
        onClick={() => {
          navigator(-1);
        }}
      >
        Cancel
      </button>
      <fieldset disabled>
        <div className="mb-3 row">
          <label htmlFor="id" className="col-sm-2 col-form-label">
            ID
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              readOnly
              className="form-control-plaintext"
              id="id"
              value={Number(item.id)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              value={String(item.name)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="price" className="col-sm-2 col-form-label">
            Price
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="price"
              value={Number(item.price)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="quanity" className="col-sm-2 col-form-label">
            Quantity
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="quantity"
              value={Number(item.quantity)}
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default ViewItem;
