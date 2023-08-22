import React, {useEffect, useState} from 'react';
import {listOrders} from "../../Services/InventoryService";
import {useNavigate} from "react-router-dom";

const ListOrders = () => {
    const navigator = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await listOrders();
        setOrders(data);
    }

    const viewOrder=(id:number)=>
    {
        navigator(`/vieworder/${id}`);
    }

    const updateOrder=(id:number)=>{
        navigator(`/updateorder/${id}`);
    }

    const deleteOrderById=(id:number)=>{

    }
    return (
        <>
            <div className="content table-wrapper">
                <table className="table table-light table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Order Number</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders && orders.length === 0 ? (
                        <div>No Items To Display</div>
                    ) : (
                        (orders || []).map((order) => (
                            <tr key={order["id"]}>
                                <td>{order["orderNumber"]}</td>
                                <td>{order["customerName"]}</td>
                                <td>{order["contactNumber"]}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-view-item"
                                        onClick={() => {
                                            viewOrder(order["id"]);
                                        }}
                                    >
                                        View
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-edit-item"
                                        onClick={() => {
                                            updateOrder(order["id"]);
                                        }}
                                    >
                                        Update
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-delete-item"
                                        onClick={() => {
                                            deleteOrderById(order["id"]);
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
                    onClick={() => navigator("/createorder")}
                >
                    Add New Order
                </button>
            </div>
        </>
    );
};

export default ListOrders;
