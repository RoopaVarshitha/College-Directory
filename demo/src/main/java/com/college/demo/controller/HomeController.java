package com.college.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/") // Handles root path
    public ResponseEntity<String> home() {
        return ResponseEntity.ok("Welcome to the College Directory Application!");
    }
}
