package com.college.demo.repository;

import com.college.demo.model.User; // Make sure the User model class is in this package
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository <User, Long> {
    // Method to find a user by their username
    User findByUsername(String username);
}
