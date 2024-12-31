package io.sos.recipe.initializer;

import io.sos.recipe.dto.UserRegistrationDTO;
import io.sos.recipe.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("init")
public class UserInitializer implements CommandLineRunner {

    private UserService userService;

    public UserInitializer(UserService userService) {
        this.userService = userService;
    }

    @Override
    public void run(String... args) throws Exception {

        UserRegistrationDTO dto =new UserRegistrationDTO("sergeos", "sergeosardinha@gmail.com", "password");
        userService.registerUser(dto);
    }
}
