package com.college.demo.service;

import com.college.demo.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    
    // Assuming you have a UserRepository injected here
    // @Autowired
    // private UserRepository userRepository;

    public User signup(String username, String password, String role) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password); // Consider hashing passwords
        user.setRole(role);
        
        // Save the user to the database (uncomment if using a repository)
        // return userRepository.save(user);
        return user; // Replace with actual save logic
    }
}
