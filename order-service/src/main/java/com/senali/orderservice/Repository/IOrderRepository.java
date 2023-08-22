package com.senali.orderservice.Repository;

import com.senali.orderservice.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderRepository extends JpaRepository<Order, Long> {
}
