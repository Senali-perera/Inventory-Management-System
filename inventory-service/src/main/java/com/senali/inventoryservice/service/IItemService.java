package com.senali.inventoryservice.service;

import com.senali.inventoryservice.model.Item;

import java.util.List;

public interface IItemService{
    Item getItemById(long id);

    Item editItem(Item item) ;

    Item createItem(Item item) throws Exception;

    void deleteItem(long id)throws Exception;

    List<Item> listItems();
}

