import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getItemById, updateItem, updateOrder, viewOrderByID} from "../../Services/InventoryService";

const UpdateOrder = () => {
    const navigator = useNavigate();
    const {id} =useParams();

    const [order, setOrder] = useState({
        id: -1,
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
        const data = await viewOrderByID(Number(id));
        setOrder(data);
    };

    const onFormChange = (event: any) => {
        const {id, value} = event.target;
        const updatedOrder = {...order, [id]: value};
        console.log(updatedOrder);
        setOrder(updatedOrder);
    };

    const deleteItemId=(itemId:any)=>{
        const modifiedItemIds = order.itemIds.filter(item => item !== itemId);
        setOrder({
            ...order,
            itemIds: modifiedItemIds
        });
    }

    const uploadData=(e:any)=>{
        e.preventDefault();
        let updatedOrder = {
            id:order.id,
            orderNumber:order.orderNumber,
            itemIds: order.itemIds,
            customerName: order.customerName,
            deliveryAddress: order.deliveryAddress,
            contactNumber: order.contactNumber
        };

        updateOrder(id, updatedOrder)
            .then((res) => {
                res.status === 200 ? navigator(-1) : navigator("/updateitem");
            })
            .catch((e) => {
                console.log(e);
            });
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
                        onChange={onFormChange}
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
                        onChange={onFormChange}
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
                        onChange={onFormChange}
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="itemids" className="col-sm-2 col-form-label">
                    Item Ids
                </label>
                <div className="col-sm-10">
                    {order.itemIds.map((itemid) => (
                        <div className="row">
                        <div className="col-sm">

                        <input
                            readOnly
                            key={itemid}
                            type="number"
                            className="form-control input-itemIds"
                            id="itemids1"
                            value={itemid}
                            // onChange={onFormChange}
                        />
                        </div>
                            <div className="col-sm">
                            <button type="submit" className="btn btn-delete-item" onClick={() => deleteItemId(itemid)}>
                                Delete
                            </button>

                        </div>
                        </div>
                    ))}
                </div>
            </div>
            <button type="submit" className="btn btn-submit" onClick={uploadData}>
                Update
            </button>
        </div>
    );
};

export default UpdateOrder;
