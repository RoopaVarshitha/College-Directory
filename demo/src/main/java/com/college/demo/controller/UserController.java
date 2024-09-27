package com.college.demo.controller;

import com.college.demo.dto.UserSignupDTO;
import com.college.demo.model.User;
import com.college.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody UserSignupDTO userSignupDTO) {
        // Custom validation
        if (userSignupDTO.getUsername() == null || userSignupDTO.getUsername().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username is required");
        }
        if (userSignupDTO.getPassword() == null || userSignupDTO.getPassword().length() < 6) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Password must be at least 6 characters long");
        }
        if (userSignupDTO.getRole() == null || userSignupDTO.getRole().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Role is required");
        }

        try {
            User createdUser = userService.signup(userSignupDTO.getUsername(), userSignupDTO.getPassword(), userSignupDTO.getRole());
            return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Signup failed: " + e.getMessage());
        }
    }
}
