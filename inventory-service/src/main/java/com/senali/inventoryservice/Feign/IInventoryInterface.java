package com.senali.inventoryservice.Feign;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(value="ORDER-SERVICE")
public interface IInventoryInterface {
}
