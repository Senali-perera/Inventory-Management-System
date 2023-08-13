import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {createItem, getItemById, updateItem} from "../Services/InventoryService";

const UpdateItem = () => {
    const navigator = useNavigate();
    const {id} = useParams();
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

    const onFormChange = (event: any) => {
        const {id, value} = event.target;
        const updatedItem = {...item, [id]: value};
        console.log(updatedItem);
        setItem(updatedItem);
    };

    const uploadData = (e: any) => {
        e.preventDefault();
        let updatedItem = {
            name: item.name,
            price: item.price,
            quantity: item.quantity,
        };
        console.log("item => " + JSON.stringify(updatedItem));

        updateItem(item.id, item)
            .then((res) => {
                res.status === 200 ? navigator("/") : navigator("updateitem");
            })
            .catch((e) => {
                console.log(e);
            });
    };

return (
    <div className="content">
        <button type="submit" className="btn btn-cancel" onClick={() => {
            navigator("/");
        }}>
            Cancel
        </button>
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
                <input type="text" className="form-control" id="name" value={String(item.name)}
                       onChange={onFormChange}/>
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="price" className="col-sm-2 col-form-label">
                Price
            </label>
            <div className="col-sm-10">
                <input type="number" className="form-control" id="price" value={Number(item.price)}
                       onChange={onFormChange}/>
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="quanity" className="col-sm-2 col-form-label">
                Quantity
            </label>
            <div className="col-sm-10">
                <input type="number" className="form-control" id="quantity" value={Number(item.quantity)}
                       onChange={onFormChange}/>
            </div>
        </div>
        <button type="submit" className="btn btn-submit" onClick={uploadData}>
            Update
        </button>
    </div>
);
}
;

export default UpdateItem;
