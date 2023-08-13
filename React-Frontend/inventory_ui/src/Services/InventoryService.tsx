import React from "react";
import axios from "axios";

const INVENTORY_SERVICE_BASE_URL = "http://localhost:8086/";
export const listItems = async () => {
  return await axios.get(INVENTORY_SERVICE_BASE_URL).then((res) => res.data).catch(e => {console.error(e)});
};

export const createItem = async (item : any) => {
  return await axios
    .post(INVENTORY_SERVICE_BASE_URL + "CreateItem", item)
    .then((res) => res);
};

export const updateItem = async (itemId : number, item : any) => {
  return await axios
      .post(INVENTORY_SERVICE_BASE_URL + "EditItem/" + itemId, item)
      .then((res) => res);
};

export const getItemById = async (itemId : number) => {
  return await axios
      .get(INVENTORY_SERVICE_BASE_URL + "ItemView/" + itemId)
      .then((res) => res.data).catch(e => {console.error(e)});
};

export const deleteItem = async (itemId : number) => {
  return await axios
      .get(INVENTORY_SERVICE_BASE_URL + "DeleteItem/" + itemId)
      .then((res) => res);
};