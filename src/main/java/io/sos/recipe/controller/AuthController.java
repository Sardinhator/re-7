package io.sos.recipe.controller;

import io.sos.recipe.dto.LoginRequest;
import io.sos.recipe.dto.LoginResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // Allow requests from your frontend
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        // Replace this with your actual authentication logic
        if ("validUser".equals(loginRequest.username()) && "validPassword".equals(loginRequest.password())) {
            return ResponseEntity.ok(new LoginResponse("Login successful", "some-jwt-token"));
        } else {
            return ResponseEntity.status(401).body(new LoginResponse("Invalid credentials", null));
        }
    }
}
