import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {viewOrderByID} from "../../Services/InventoryService";

const ViewOrder = () => {
    const navigator = useNavigate();
    const {id} = useParams();
    const [order, setOrder] = useState({
        id: Number,
        orderNumber: Number,
        itemIds: [],
        customerName: String,
        deliveryAddress: String,
        contactNumber: Number
    });
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await viewOrderByID(id);
        setOrder(data);
    }
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
                    <label htmlFor="orderNumber" className="col-sm-2 col-form-label">
                        Order Number
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="orderNumber"
                            readOnly
                            className="form-control-plaintext"
                            id="id"
                            value={Number(order.orderNumber)}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="customerName" className="col-sm-2 col-form-label">
                        Customer Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="customerName"
                            value={String(order.customerName)}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="deliveryAddress" className="col-sm-2 col-form-label">
                        Delivery Address
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="deliveryAddress"
                            value={String(order.deliveryAddress)}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="contactNumber" className="col-sm-2 col-form-label">
                        Contact Number
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            id="contactNumber"
                            value={String(order.contactNumber)}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="itemids" className="col-sm-2 col-form-label">
                        Item Ids
                    </label>
                    <div className="col-sm-10" >
                            {order.itemIds.map((itemid) => (
                                <input
                                    key={itemid}
                                    type="number"
                                    className="form-control input-itemIds"
                                    id="itemids"
                                    value={itemid}
                                />
                            ))}
                    </div>
                </div>
            </fieldset>
        </div>
    );
};

export default ViewOrder;
