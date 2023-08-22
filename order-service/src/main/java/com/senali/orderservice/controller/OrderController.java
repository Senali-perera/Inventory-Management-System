package com.senali.orderservice.controller;

import com.senali.orderservice.entity.Order;
import com.senali.orderservice.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@CrossOrigin
public class OrderController {

    @Autowired
    IOrderService orderService;

    @GetMapping("/")
    public ResponseEntity<List<Order>> listOrders() {
        List<Order> orderList = new ArrayList<>();
        orderList = orderService.listOrders();
        return new ResponseEntity<>(orderList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderByID(@PathVariable(value = "id") long id) {
        Order order = orderService.getOrderById(id);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @PostMapping("/CreateOrder")
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order newOrder = orderService.createOrder(order);
        return new ResponseEntity<>(newOrder, HttpStatus.OK);
    }

    @PostMapping("/EditOrder/{id}")
    public ResponseEntity<Order> editOrder(@PathVariable(value = "id") long id, @RequestBody Order order) {
        Order editedOrder = orderService.editOrder(id, order);
        return new ResponseEntity<>(editedOrder, HttpStatus.OK);
    }

    @GetMapping("/DeleteOrder/{id}")
    public ResponseEntity<Order> deleteOrder(@PathVariable(value = "id") long id) {
        orderService.deleteOrder(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
