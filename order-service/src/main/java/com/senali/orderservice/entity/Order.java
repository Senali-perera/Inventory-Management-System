package com.senali.orderservice.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name =  "orders")
public class Order {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private long id;

        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "orderNumber")
        private long orderNumber;

        @ElementCollection
        @Column(name = "itemIds")
        private List<Long> itemIds;

        @Column(name = "customerName")
        private String customerName;

        @Column(name = "deliveryAddress")
        private String deliveryAddress;

        @Column(name = "contactNumber")
        private String contactNumber;

        public long getId() {
                return id;
        }

        public void setId(long id) {
                this.id = id;
        }

        public long getOrderNumber() {
                return orderNumber;
        }

        public void setOrderNumber(long orderNumber) {
                this.orderNumber = orderNumber;
        }

        public List<Long> getItemIds() {
                return itemIds;
        }

        public void setItemIds(List<Long> itemIds) {
                this.itemIds = itemIds;
        }

        public String getCustomerName() {
                return customerName;
        }

        public void setCustomerName(String customerName) {
                this.customerName = customerName;
        }

        public String getDeliveryAddress() {
                return deliveryAddress;
        }

        public void setDeliveryAddress(String deliveryAddress) {
                this.deliveryAddress = deliveryAddress;
        }

        public String getContactNumber() {
                return contactNumber;
        }

        public void setContactNumber(String contactNumber) {
                this.contactNumber = contactNumber;
        }
}
