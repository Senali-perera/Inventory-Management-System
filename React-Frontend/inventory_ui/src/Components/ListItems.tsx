import React, { useState, useEffect } from "react";
import { listItems, deleteItem } from "../Services/InventoryService";
import { useNavigate } from "react-router-dom";

const ListItems = () => {
  const navigator = useNavigate();

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await listItems();
    setItems(data);
  };

  const viewItem = (id: number) => {
    navigator(`/viewitem/${id}`);
  };

  const updateItem = (id: number) => {
    navigator(`/updateitem/${id}`);
  };

  const deleteItemById = (id: number) => {
    deleteItem(id).then((res) => {
        console.log(res);
        const newItems = items.filter(item => item['id'] !== id);
        setItems(newItems);
    }).catch((e) => {
        console.log(e);
    });
  };

  return (
    <>
      <div className="content table-wrapper">
        <table className="table table-light table-striped">
          <thead>
            <tr>
              <th scope="col">Order Number</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items && items.length === 0 ? (
              <div>No Items To Display</div>
            ) : (
              (items || []).map((item) => (
                <tr key={item["id"]}>
                  <td>{item["id"]}</td>
                  <td>{item["name"]}</td>
                  <td>{item["quantity"]}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-view-item"
                      onClick={() => {
                        viewItem(item["id"]);
                      }}
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-edit-item"
                      onClick={() => {
                        updateItem(item["id"]);
                      }}
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-delete-item"
                      onClick={() => {
                        deleteItemById(item["id"]);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-add-item"
          onClick={() => navigator("/additem")}
        >
          Add New Item
        </button>
      </div>
    </>
  );
};

export default ListItems;
