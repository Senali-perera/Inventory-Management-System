package com.senali.orderservice.service;

import com.senali.orderservice.entity.Order;

import java.util.List;
import java.util.Optional;

public interface IOrderService{
    public List<Order> listOrders();

    public Order getOrderById(long id);

    public Order createOrder(Order order);

    public Order editOrder(Long id, Order order);

    public void deleteOrder(Long id);
}
