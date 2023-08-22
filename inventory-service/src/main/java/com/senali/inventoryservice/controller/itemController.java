package com.senali.inventoryservice.controller;

import com.senali.inventoryservice.model.Item;
import com.senali.inventoryservice.service.ItemService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@CrossOrigin
public class itemController {

    @Autowired
    ItemService itemService;

    @GetMapping("/")
    public ResponseEntity<List<Item>> listItems(){
        List<Item> itemList = new ArrayList<>();
        itemList=itemService.listItems();
        return new ResponseEntity<>(itemList,HttpStatus.OK);
    }

    @GetMapping("ItemView/{id}")
    public ResponseEntity<Item> viewItem(@PathVariable(value = "id") long id){
        Item viewedItem = itemService.getItemById(id);
        return new ResponseEntity<>(viewedItem, HttpStatus.OK);
    }

    @PostMapping("EditItem/{id}")
    public ResponseEntity<Item> editItem(@PathVariable(value = "id") long id, @RequestBody Item editItem){
        try {
            itemService.editItem(editItem);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("CreateItem")
    public ResponseEntity<Item> createItem(@RequestBody Item item)  {
        try {
            itemService.createItem(item);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("DeleteItem/{id}")
    public ResponseEntity<Item> deleteItem(@PathVariable(value = "id") long id){

        try {
            itemService.deleteItem(id);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
