package com.senali.orderservice.service;

import com.senali.orderservice.Repository.IOrderRepository;
import com.senali.orderservice.entity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService implements IOrderService{

    @Autowired
    IOrderRepository orderRepository;

    @Override
    public List<Order> listOrders() {
        List<Order> orderList= new ArrayList();
        orderList = orderRepository.findAll();
        return orderList;
    }

    @Override
    public Order getOrderById(long id) {
        return orderRepository.findById(id).get();
    }

    @Override
    public Order createOrder(Order order) {
        Order newOrder= new Order();
        System.out.print(order);
        newOrder.setOrderNumber(order.getOrderNumber());
        newOrder.setItemIds(order.getItemIds());
        newOrder.setCustomerName(order.getCustomerName());
        newOrder.setContactNumber(order.getContactNumber());
        newOrder.setDeliveryAddress(order.getDeliveryAddress());
        orderRepository.save(newOrder);
        return newOrder;
    }

    @Override
    public Order editOrder(Long id, Order order) {
        Order originalOrder=getOrderById(order.getId());
        originalOrder.setContactNumber(order.getContactNumber());
        originalOrder.setCustomerName(order.getCustomerName());
        originalOrder.setDeliveryAddress(order.getDeliveryAddress());
        originalOrder.setItemIds(order.getItemIds());
        orderRepository.save(originalOrder);
        return originalOrder;
    }

    @Override
    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}
