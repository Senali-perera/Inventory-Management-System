import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {createOrder} from "../../Services/InventoryService";

const CreateOrder = () => {
    const navigator = useNavigate();

    const [order, setOrder] = useState({
        id: Number,
        orderNumber: Number,
        itemIds: [1, 2, 3],
        customerName: String,
        deliveryAddress: String,
        contactNumber: Number
    });

    const itemsids = [1, 2, 3]

    const onFormChange = (event: any) => {
        const {id, value} = event.target;
        const newOrderData = {...order, [id]: value};
        setOrder(newOrderData);
    }

    const uploadData = (e:any) => {
        e.preventDefault();
        let newOrder = {
            id: order.id,
            orderNumber: order.orderNumber,
            itemIds: order.itemIds,
            customerName: order.customerName,
            deliveryAddress: order.deliveryAddress,
            contactNumber: order.contactNumber
        }
        createOrder(newOrder).then((res) => {
            console.log(res);
            res.status === 200 ? navigator(-1) : navigator("/createorder");
        }).catch((e) => {
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
            <form>
                <div className="mb-3">
                    <label htmlFor="customerName" className="form-label">
                        Customer Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="customerName"
                        onChange={onFormChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contactNumber" className="form-label">
                        Contact Number
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="contactNumber"
                        onChange={onFormChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="deliveryAddress" className="form-label">
                        Delivery Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="deliveryAddress"
                        onChange={onFormChange}
                    />
                </div>
                {/*<div className="mb-3">*/}
                {/*    <label htmlFor="itemIds" className="form-label">*/}
                {/*        Items*/}
                {/*    </label>*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        className="form-control"*/}
                {/*        id="itemIds"*/}
                {/*        onChange={onFormChange}*/}
                {/*    />*/}
                {/*</div>*/}
                <button type="submit" className="btn btn-submit" onClick={uploadData}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateOrder;
