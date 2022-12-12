package com.project.backend.service;

import com.project.backend.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    public User addUser(User user);

    public List<User> getUser();

    public User getUserByid(int id);

    public User updateUser(int id , User user);

    public void deleteUser(int id);

}
