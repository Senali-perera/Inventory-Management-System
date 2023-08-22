import React from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const INVENTORY_SERVICE_BASE_URL = "http://localhost:8086/";
const ORDER_SERVICE_BASE_URL = "http://localhost:8087/";
export const listItems = async () => {
    return await axios.get(INVENTORY_SERVICE_BASE_URL).then((res) => res.data).catch(e => {
        console.error(e)
    });
};

export const createItem = async (item: any) => {
    return await axios
        .post(INVENTORY_SERVICE_BASE_URL + "CreateItem", item)
        .then((res) => res);
};

export const updateItem = async (itemId: number, item: any) => {
    return await axios
        .post(INVENTORY_SERVICE_BASE_URL + "EditItem/" + itemId, item)
        .then((res) => res);
};

export const getItemById = async (itemId: number) => {
    return await axios
        .get(INVENTORY_SERVICE_BASE_URL + "ItemView/" + itemId)
        .then((res) => res.data).catch(e => {
            console.error(e)
        });
};

export const deleteItem = async (itemId: number) => {
    return await axios
        .get(INVENTORY_SERVICE_BASE_URL + "DeleteItem/" + itemId)
        .then((res) => res);
};

export const listOrders = async () => {
    return await axios.get(ORDER_SERVICE_BASE_URL).then((res) => res.data).catch(e => {
        console.log(e);
    });
}

export const createOrder = async (order: any) => {
    return await axios.post(ORDER_SERVICE_BASE_URL + "CreateOrder", order).then((res) => res);
}

export const viewOrderByID = async (id: any) => {
    return await axios.get(ORDER_SERVICE_BASE_URL + id).then((res) => res.data).catch(e => {
        console.log(e)
    })
}

export const updateOrder = async (id: any, order: any) => {
    return await axios.post(ORDER_SERVICE_BASE_URL + "EditOrder/" + id, order).then((res) => res);
}