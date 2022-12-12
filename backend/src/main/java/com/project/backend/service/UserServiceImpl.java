package com.project.backend.service;

import com.project.backend.model.User;
import com.project.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getUser() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public User getUserByid(int id) {
        return userRepository.findById(id).get();
    }

    @Override
    public User updateUser(int id, User user) {
        User user1 = userRepository.findById(id).get();
        user1.setEmail(user.getEmail());
        user1.setpNo(user.getpNo());
        user1.setAddress(user.getAddress());
        return userRepository.save(user1);
    }

    @Override
    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }
}
