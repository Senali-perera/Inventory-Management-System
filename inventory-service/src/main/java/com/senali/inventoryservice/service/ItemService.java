package com.senali.inventoryservice.service;

import com.senali.inventoryservice.model.Item;
import com.senali.inventoryservice.repository.IItemRepository;
import com.senali.inventoryservice.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemService implements IItemService{

    @Autowired
    IItemRepository itemRepo;
    @Override
    public Item getItemById(long id) {
        return itemRepo.findById(id).get();
    }

    @Override
    public Item editItem(Item item) {
        long itemId = item.getId();
        try{
            Item originalItem = getItemById(itemId);

        originalItem.setId(item.getId());
        originalItem.setName(item.getName());
        originalItem.setPrice(item.getPrice());
        originalItem.setQuantity(item.getQuantity());
        itemRepo.save(originalItem);
        return originalItem;
        }catch (NullPointerException e){
            throw new RuntimeException("Item Id does not found", e);
        }
    }

    @Override
    public Item createItem(Item item) throws Exception{
        try{
            return setItem(item);
        }catch(Exception e){
            throw new Exception("Failed to create an item");
        }
    }

    @Override
    public void deleteItem(long id) throws Exception {
        try {
            Item item = getItemById(id);
            itemRepo.delete(item);
        }catch(NullPointerException e){
            throw new Exception("Failed to delete the item, Item does not exist", e);
        }
    }

    @Override
    public List<Item> listItems(){
        List<Item> listItems = new ArrayList<>();
        listItems = itemRepo.findAll();
        return listItems;
    }

    public Item setItem(Item item) throws Exception{
        Item newItem = new Item();
        newItem.setId(item.getId());
        newItem.setName(item.getName());
        newItem.setPrice(item.getPrice());
        newItem.setQuantity(item.getQuantity());
        itemRepo.save(newItem);
        return newItem;
    }

}
